// 靜態作用域檢查：找出使用了但在任何可及作用域都沒有定義的識別字
// 用途：抓出「函式定義在 A 元件、卻在 B 元件呼叫」這類編譯器看不出來的錯誤
const fs = require('fs');
const parser = require('@babel/parser');
const traverseMod = require('@babel/traverse');
const traverse = traverseMod.default || traverseMod;

const file = process.argv[2] || 'work.html';
const html = fs.readFileSync(file, 'utf8');
const m = html.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);
if (!m) { console.log('找不到 babel script 區塊'); process.exit(1); }
const code = m[1];

// 計算 script 區塊在整份檔案中的起始行，方便回報真實行號
const lineOffset = html.slice(0, html.indexOf(m[1])).split('\n').length - 1;

const ast = parser.parse(code, {
  sourceType: 'script',
  plugins: ['jsx'],
  errorRecovery: true,
});

// 瀏覽器 / 函式庫提供的全域
const GLOBALS = new Set([
  'window','document','console','React','ReactDOM','XLSX','jspdf','html2canvas',
  'firebase','Math','JSON','Date','Object','Array','String','Number','Boolean',
  'Promise','Map','Set','WeakMap','RegExp','Error','parseInt','parseFloat',
  'isNaN','isFinite','setTimeout','setInterval','clearTimeout','clearInterval',
  'requestAnimationFrame','fetch','alert','confirm','prompt','localStorage',
  'sessionStorage','navigator','location','FileReader','Blob','URL','Uint8Array',
  'encodeURIComponent','decodeURIComponent','undefined','NaN','Infinity','globalThis',
  'Intl','Symbol','BigInt','structuredClone','TextEncoder','TextDecoder','AbortController',
  'MutationObserver','IntersectionObserver','CustomEvent','Event','Image','Audio','arguments',
  'File','FormData','Headers','Request','Response','DOMParser','XMLHttpRequest',
  'HTMLElement','Node','getComputedStyle','matchMedia','print','history','screen',
]);

// 掛在 window 上的自訂全域（window.X = ... 形式），視為已定義
const WINDOW_ASSIGNED = new Set(
  [...html.matchAll(/window\.([A-Za-z_$][\w$]*)\s*=/g)].map(m => m[1])
);

const problems = [];

traverse(ast, {
  ReferencedIdentifier(path) {
    const name = path.node.name;
    if (GLOBALS.has(name) || WINDOW_ASSIGNED.has(name)) return;
    // JSX 元素名稱以大寫開頭者由下面另外處理
    if (path.scope.hasBinding(name, /* noGlobals */ true)) return;
    if (path.scope.hasGlobal && path.scope.hasGlobal(name)) {
      // hasBinding 已涵蓋，這裡表示真的找不到定義
    }
    problems.push({
      name,
      line: path.node.loc ? path.node.loc.start.line + lineOffset : '?',
      kind: path.parent.type === 'JSXOpeningElement' ? 'JSX 元件' : '識別字',
    });
  },
});

// 去重並排序
const seen = new Map();
problems.forEach(p => {
  const key = p.name;
  if (!seen.has(key)) seen.set(key, { ...p, count: 1, lines: [p.line] });
  else { const e = seen.get(key); e.count++; if (e.lines.length < 5) e.lines.push(p.line); }
});

const list = Array.from(seen.values()).sort((a, b) => b.count - a.count);

if (list.length === 0) {
  console.log('✅ 作用域檢查通過：沒有未定義的識別字');
} else {
  console.log(`⚠ 找到 ${list.length} 個可能未定義的識別字：\n`);
  list.forEach(p => {
    console.log(`  ${p.name}  (${p.kind}，出現 ${p.count} 次，行 ${p.lines.join(', ')}${p.count > 5 ? ' …' : ''})`);
  });
  process.exitCode = 1;
}
