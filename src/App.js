import React, { useState, useMemo, useEffect, Component } from 'react';
import { 
  Package, ShoppingCart, FileText, Settings, Search, Share2, Printer, 
  Trash2, Plus, Minus, Database, CheckCircle, Copy, Send, MessageCircle, 
  List, Calculator, ChevronDown, ChevronUp, ChevronRight, User, Sliders, 
  LayoutGrid, LayoutList, Tag, MapPin, Scale, Box, Ruler, Warehouse, X, 
  Upload, FileSpreadsheet, Filter, DollarSign, Eye, EyeOff, Save, AlertTriangle, RefreshCw, RotateCcw, Clock, BrainCircuit, Link2, ArrowDownToLine, Tag as PriceTag, Phone, FileDigit
} from 'lucide-react';

// --- System Configuration ---
const SYSTEM_VERSION = 'v36.2-refactor-fix'; 

// --- Error Boundary ---
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) { return { hasError: true }; }
  componentDidCatch(error, errorInfo) { console.error("System Error:", error, errorInfo); }
  handleReset = () => { localStorage.clear(); window.location.reload(); };
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full">
            <AlertTriangle size={32} className="text-red-600 mx-auto mb-4" />
            <h2 className="text-xl font-black text-slate-800 mb-2">系統發生錯誤</h2>
            <button onClick={this.handleReset} className="w-full py-3 bg-red-600 text-white rounded-xl font-bold shadow-lg mt-4 flex items-center justify-center gap-2"><RefreshCw size={18}/> 立即修復</button>
          </div>
        </div>
      );
    }
    return this.props.children; 
  }
}

// --- Constants ---
const WAREHOUSE_GROUPS = {
  '崇文': ['原料', '工廠', '洽通', '品順', '有興', '富崑', '景山1', '景山2', '白蝦', '成品', '業務', '息-布袋'],
  '八方': ['原料', '工廠', '洽通', '品順', '有興', '富崑', '景山1', '景山2', '白蝦', '成品'],
  '其他': ['客戶代工倉', '貨品暫存庫']
};

const CUSTOMER_TIERS = [
  { id: 'priceBusiness', name: '生意價', short: '生意', color: 'text-emerald-800 bg-emerald-100 border-emerald-300' },
  { id: 'priceCase', name: '整件價', short: '整件', color: 'text-blue-800 bg-blue-100 border-blue-300' },
  { id: 'priceVIP', name: '中盤(VIP價)', short: 'VIP', color: 'text-purple-800 bg-purple-100 border-purple-300' },
  { id: 'priceBase', name: '大盤(業務底價)', short: '底價', color: 'text-gray-800 bg-gray-200 border-gray-400' },
  { id: 'priceBulkA', name: '大盤A', short: '大盤A', color: 'text-red-800 bg-red-100 border-red-300' }, 
];

const CATEGORY_MAPPING = { 'A': 'A 蝦仁類', 'B': 'B 蝦類', 'C': 'C 魚類', 'D': 'D 軟體類', 'E': 'E 蟹類', 'F': 'F 貝類', 'G': 'G 調理類' };

const CATEGORY_CONFIG = {
  'A蝦仁類': { names: ['鳳尾蝦仁', '白蝦仁'], formats: ['20/30 *600g*20包 (王牌)', '30/40 *1kg*10包 (20%冰)', '50/60 *1.2kg*10盒 (宏都拉斯)'] },
  'B蝦類': { names: ['活凍生白蝦', '熟鳳尾泰蝦'], formats: ['30/40 *850g*12盒 (GC牌)', '40/50 *850g*12盒 (南美)', '50/60 *850g*14盒 (海之星)', '60/70 *1KG*12包 (IQF, 開背)'] },
  'C魚類': { names: ['頂極鮭切', '鮭魚厚切', '大比目魚切片'], formats: ['L15D 15-16片/箱,6K,2.4cm', '2L 12-13片/箱,6K,2.4cm', 'M20D 20-24片*3/箱,10.5K', '2K*10包 (泰國蝦)'] },
  'D軟體類': { names: ['薄鹽魷魚一夜干'], formats: ['(單入) 3XS,淨重250-300g,20包/件', '(單入) M,淨重450-500g,20包/件', '(單入XL) XL,淨重550-600g,20包/件'] },
};

// --- Helpers ---
const parseSpecDetails = (specString, productName = "") => {
  let ratio = 1;
  let unit = '件';
  const matchCount = specString.match(/[\*xX\/]\s*(\d+)\s*([盒包片袋罐瓶])/); 
  const matchWeight = specString.match(/(\d+(\.\d+)?)[kK][gG]?/);
  if (matchCount) { ratio = parseInt(matchCount[1], 10); unit = matchCount[2]; } 
  else if (matchWeight && (productName.includes('魚') || specString.includes('K') || specString.includes('KG'))) { ratio = parseFloat(matchWeight[1]); unit = 'kg'; }
  if (specString.includes('20包/件')) { ratio = 20; unit = '包'; }
  if (specString.includes('12片/箱') && unit === '件') { if (matchWeight) { ratio = parseFloat(matchWeight[1]); unit = 'kg'; } else { ratio = 12; unit = '片'; } }
  return { ratio, unit };
};

const safeJsonParse = (key, fallback) => {
  try { const item = localStorage.getItem(key); return item ? JSON.parse(item) : fallback; } catch (e) { return fallback; }
};

const generateStock = () => {
  const stock = {};
  Object.keys(WAREHOUSE_GROUPS).forEach(group => {
    stock[group] = {};
    WAREHOUSE_GROUPS[group].forEach(sub => { stock[group][sub] = Math.random() > 0.85 ? Math.floor(Math.random() * 100) + 1 : 0; });
  });
  return stock;
};

const generateBulkData = () => {
  let data = [];
  let idCounter = 1;
  const brands = ['王牌', '海神', '海洋之星', '紅太陽', 'GC牌', '南美'];
  const origins = ['越南', '泰國', '巴拿馬', '厄瓜多', '智利', '格陵蘭'];
  const ices = ['0%', '10%', '20%', '不包冰'];
  Object.entries(CATEGORY_CONFIG).forEach(([cat, config]) => {
    config.names.forEach(name => {
      config.formats.forEach(specStr => {
        const basePrice = Math.floor(Math.random() * 800) + 100;
        const { ratio, unit } = parseSpecDetails(specStr, name);
        data.push({
          id: `${cat[0]}${idCounter.toString().padStart(3, '0')}`, name: name, spec: specStr, 
          brand: brands[Math.floor(Math.random() * brands.length)], origin: origins[Math.floor(Math.random() * origins.length)], iceRate: ices[Math.floor(Math.random() * ices.length)],
          bigUnit: '件', smallUnit: unit, ratio: ratio, category: cat,
          prices: { priceBusiness: basePrice + 60, priceCase: basePrice + 40, priceVIP: basePrice + 20, priceBase: basePrice, priceBulkA: basePrice - 10 }
        });
        idCounter++;
      });
    });
  });
  return data;
};

// --- GLOBAL COMPONENTS (Defined outside AppContent) ---

const A4PrintComponent = ({ cart = [], customerName, total, getPrice, quoteMode, customer }) => (
    <div className="w-full bg-white p-10 text-black font-serif" style={{ minHeight: '29.7cm' }}>
        <div className="flex justify-between items-end border-b-2 border-gray-800 pb-4 mb-6">
            <div>
                <h1 className="text-4xl font-bold tracking-wider text-gray-900">{quoteMode === 'order' ? '訂貨單' : '產品報價單'}</h1>
                <p className="text-sm text-gray-600 mt-1 uppercase tracking-widest">{quoteMode === 'order' ? 'Sales Order' : 'Quotation List'}</p>
            </div>
            <div className="text-right">
                <p className="font-bold text-xl">水產貿易有限公司</p>
                <p className="text-sm text-gray-500">日期: {new Date().toLocaleDateString()}</p>
            </div>
        </div>
        <div className="mb-6 bg-gray-50 p-4 rounded border text-sm">
            <div className="grid grid-cols-2 gap-2">
                <div><span className="text-gray-500">客戶名稱：</span><span className="font-bold text-lg">{customerName || "____________________"}</span></div>
                <div><span className="text-gray-500">統一編號：</span><span className="font-bold">{customer?.taxId}</span></div>
                <div><span className="text-gray-500">聯絡人：</span><span className="font-bold">{customer?.contact}</span></div>
                <div><span className="text-gray-500">電話：</span><span className="font-bold">{customer?.phone}</span></div>
                <div className="col-span-2"><span className="text-gray-500">地址：</span><span className="font-bold">{customer?.address}</span></div>
            </div>
        </div>
        <table className="w-full text-left border-collapse mb-8">
            <thead>
                <tr className="border-b-2 border-gray-800 text-sm uppercase">
                    <th className="py-3 w-12">#</th><th className="py-3">品項與規格</th><th className="py-3 text-right">單價</th>
                    {quoteMode === 'order' && <><th className="py-3 text-center">數量</th><th className="py-3 text-right">金額</th></>}
                </tr>
            </thead>
            <tbody className="text-sm">
                {cart && cart.length > 0 ? cart.map((item, i) => (
                    <tr key={item?.id || i} className="border-b border-gray-200">
                        <td className="py-3 text-gray-500">{i + 1}</td>
                        <td className="py-3">
                            <div className="font-bold text-base">{item?.name || '未知'}</div>
                            <div className="text-xs text-gray-600 mt-1">{item?.spec || ''}</div>
                        </td>
                        <td className="py-3 text-right">
                            <div className="font-bold">${getPrice ? getPrice(item, item?.itemTier) : 0}</div>
                            <div className="text-xs text-gray-400">/{item?.smallUnit || '單位'}</div>
                        </td>
                        {quoteMode === 'order' && (
                            <>
                                <td className="py-3 text-center font-bold">{item?.qty || 0} {item?.bigUnit || ''}</td>
                                <td className="py-3 text-right font-medium">${(item?.qty && item?.ratio && getPrice ? (item.qty * item.ratio * getPrice(item, item.itemTier)) : 0).toLocaleString()}</td>
                            </>
                        )}
                    </tr>
                )) : <tr><td colSpan="5" className="py-4 text-center text-gray-400">無商品</td></tr>}
            </tbody>
            {quoteMode === 'order' && (
                <tfoot><tr><td colSpan="4" className="pt-4 text-right font-bold text-lg">總計:</td><td className="pt-4 text-right font-bold text-2xl border-b-4 border-double border-gray-800">${(total || 0).toLocaleString()}</td></tr></tfoot>
            )}
        </table>
        <div className="mt-auto pt-12 text-xs text-gray-500 border-t"><p>備註：1. 生鮮食品請當面點清。 2. 報價單有效期限3日。</p></div>
    </div>
);

const PreviewTab = ({ cart, customerName, total, getPrice, quoteMode, customer }) => {
    const generateLineText = () => {
        return `🐟【${customerName || '客戶'} ${quoteMode === 'order' ? '報價單' : '產品價目表'}】\n` + 
               cart.map(i => `🔹${i.name}\n   ${i.spec}\n   $${getPrice(i, i.itemTier)}/${i.smallUnit}` + (quoteMode === 'order' ? ` | 數量:${i.qty}${i.bigUnit}` : '')).join('\n') + 
               (quoteMode === 'order' ? `\n💰 總計: $${total.toLocaleString()}` : '') +
               `\n📅 ${new Date().toLocaleDateString()}`;
    };
    const copyToClipboard = () => { navigator.clipboard.writeText(generateLineText()); alert('已複製'); };
    const shareToLine = () => { window.open(`https://line.me/R/msg/text/?${encodeURIComponent(generateLineText())}`, '_blank'); };
    const handlePrint = () => window.print();

    return (
      <div className="px-4 pb-24 mt-4 space-y-6">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-emerald-700 flex items-center gap-2 mb-3"><MessageCircle size={20}/> Line 訊息</h3>
              <textarea readOnly className="w-full bg-gray-50 p-3 rounded-lg text-sm font-mono h-32 border border-gray-200 text-gray-600 focus:outline-none" value={generateLineText()} />
              <button onClick={shareToLine} className="mt-3 w-full py-3 bg-emerald-600 text-white rounded-xl font-black text-lg shadow-lg hover:bg-emerald-700 active:scale-95 transition-all flex items-center justify-center gap-2"><Send size={20}/> 一鍵傳送 Line</button>
              <button onClick={copyToClipboard} className="mt-2 w-full py-2 bg-gray-100 text-gray-600 rounded-lg font-bold text-sm hover:bg-gray-200">複製文字</button>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-blue-800 flex items-center gap-2"><FileText size={20}/> A4 報價單</h3><button onClick={handlePrint} className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-xs font-bold flex items-center gap-1 hover:bg-blue-700"><Printer size={14}/> 列印</button></div>
              <div className="border border-gray-200 rounded-lg bg-gray-50 p-2 h-72 overflow-y-auto flex justify-center">
                  <div className="transform scale-[0.4] origin-top bg-white shadow-lg pointer-events-none mt-2" style={{ width: '210mm', minHeight: '297mm' }}>
                      <A4PrintComponent cart={cart} customerName={customerName} total={total} getPrice={getPrice} quoteMode={quoteMode} customer={customer} />
                  </div>
              </div>
          </div>
      </div>
    );
};

const StickyHeader = ({ 
    activeTab, quoteMode, setQuoteMode, searchTerm, setSearchTerm, 
    viewMode, setViewMode, selectedCategory, setSelectedCategory,
    globalTier, setActivePriceModal, cartCount, setShowZeroStock, showZeroStock,
    onOpenCustomerModal, customerName
  }) => (
    <div className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
        <div className="bg-blue-800 text-white px-4 h-8 flex justify-between items-center text-xs">
            <span className="flex items-center gap-1 opacity-90"><Clock size={12}/> {new Date().toLocaleDateString()} 報價系統</span>
            <span className="font-mono opacity-80">{SYSTEM_VERSION}</span>
        </div>
        <div className="flex justify-between items-center px-4 py-3 gap-2">
            <button onClick={onOpenCustomerModal} className="flex-1 flex items-center gap-2 bg-blue-50 border-2 border-blue-200 px-3 py-2 rounded-xl text-blue-800 hover:bg-blue-100 transition-colors truncate">
                <div className="bg-blue-200 p-1.5 rounded-full"><User size={18} className="text-blue-800"/></div>
                <div className="flex flex-col items-start overflow-hidden"><span className="text-[10px] text-blue-500 font-bold leading-none">客戶</span><span className="text-sm font-black truncate w-full text-left">{customerName || '設定'}</span></div>
            </button>
            <div className="flex gap-2">
                <button onClick={() => setActivePriceModal({ mode: 'global' })} className="flex flex-col items-center justify-center px-3 py-1 rounded-xl text-xs font-bold transition-all border-2 bg-white text-purple-700 border-purple-200 hover:bg-purple-50 h-12 w-20"><span className="text-[10px] text-purple-400">預設</span><span>{CUSTOMER_TIERS.find(t => t.id === globalTier)?.short}</span></button>
                <button onClick={() => setQuoteMode(quoteMode === 'order' ? 'pricelist' : 'order')} className={`flex flex-col items-center justify-center px-3 py-1 rounded-xl text-xs font-bold transition-all border-2 h-12 w-20 ${quoteMode === 'pricelist' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}><span className={`text-[10px] ${quoteMode === 'pricelist' ? 'text-emerald-400' : 'text-gray-400'}`}>模式</span><span>{quoteMode === 'pricelist' ? '純報價' : '試算中'}</span></button>
            </div>
        </div>
        {activeTab === 'quote' && (
            <div className="px-4 pb-3 space-y-3 bg-white">
                <div className="flex gap-2">
                    <div className="relative flex-grow"><Search className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" /><input type="text" placeholder="搜尋..." className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl text-base font-bold text-gray-900 focus:outline-none focus:border-blue-500" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/></div>
                    <button onClick={() => setShowZeroStock(!showZeroStock)} className={`p-3 rounded-xl border-2 flex items-center justify-center transition-all ${showZeroStock ? 'bg-red-50 border-red-200 text-red-600' : 'bg-gray-100 border-gray-200 text-gray-400'}`}>{showZeroStock ? <Eye size={20}/> : <EyeOff size={20}/>}</button>
                    <div className="flex bg-gray-100 rounded-xl p-1 border-2 border-gray-200 shrink-0"><button onClick={() => setViewMode('group')} className={`p-2 rounded-lg ${viewMode === 'group' ? 'bg-white shadow-sm text-blue-700' : 'text-gray-400'}`}><Filter size={20}/></button><button onClick={() => setViewMode('list')} className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-white shadow-sm text-blue-700' : 'text-gray-400'}`}><LayoutList size={20}/></button></div>
                </div>
                <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">{['All', ...Object.keys(CATEGORY_CONFIG).sort()].map(cat => (<button key={cat} onClick={() => setSelectedCategory(cat)} className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold border-2 transition-all ${selectedCategory === cat ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'}`}>{cat}</button>))}</div>
            </div>
        )}
    </div>
);

const CustomerModal = ({ customer, setCustomer, onClose }) => (
    <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
        <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-up" onClick={e => e.stopPropagation()}>
            <div className="bg-blue-800 text-white p-4 flex justify-between items-center"><h3 className="font-bold text-lg flex items-center gap-2"><User size={20}/> 客戶資料設定</h3><button onClick={onClose}><X size={20}/></button></div>
            <div className="p-6 space-y-4">
                <div><label className="block text-sm font-bold text-gray-700 mb-1">客戶名稱</label><input type="text" value={customer.name} onChange={e => setCustomer({...customer, name: e.target.value})} className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 outline-none font-bold text-lg" placeholder="例: 鮮味海產" /></div>
                <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-sm font-bold text-gray-700 mb-1">聯絡人</label><input type="text" value={customer.contact} onChange={e => setCustomer({...customer, contact: e.target.value})} className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500" /></div>
                    <div><label className="block text-sm font-bold text-gray-700 mb-1">統一編號</label><input type="text" value={customer.taxId} onChange={e => setCustomer({...customer, taxId: e.target.value})} className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500" /></div>
                </div>
                <div><label className="block text-sm font-bold text-gray-700 mb-1">電話</label><input type="text" value={customer.phone} onChange={e => setCustomer({...customer, phone: e.target.value})} className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500" /></div>
                <div><label className="block text-sm font-bold text-gray-700 mb-1">地址</label><input type="text" value={customer.address} onChange={e => setCustomer({...customer, address: e.target.value})} className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500" /></div>
                <button onClick={onClose} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-md mt-4">確認儲存</button>
            </div>
        </div>
    </div>
);

const StockButton = ({ totalStock, onClick }) => (
    <button onClick={(e) => { e.stopPropagation(); onClick(); }} className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-black border-2 transition-all active:scale-95 ${totalStock > 20 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : (totalStock > 0 ? 'bg-orange-50 text-orange-700 border-orange-200' : 'bg-red-50 text-red-700 border-red-200')}`}><Warehouse size={14}/> 存 {totalStock}</button>
);

const StockDetailModal = ({ item, onClose, stocks, getTotalStock }) => {
    const total = getTotalStock(item);
    const activeGroups = Object.keys(WAREHOUSE_GROUPS).filter(groupName => {
        const groupStock = stocks[item.id]?.[groupName];
        return groupStock && Object.values(groupStock).some(val => val > 0);
    });
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in" onClick={onClose}>
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-scale-up" onClick={e => e.stopPropagation()}>
          <div className="bg-white border-b border-gray-100 p-4 flex justify-between items-start">
            <div><h3 className="font-bold text-lg text-gray-800">{item.name}</h3><p className="text-gray-500 text-xs mt-1">{item.spec}</p></div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full p-1"><X size={20}/></button>
          </div>
          <div className="p-5 max-h-[60vh] overflow-y-auto bg-gray-50">
            <div className="flex justify-between items-center mb-4 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
               <span className="font-medium text-gray-600">總庫存量</span><span className={`text-2xl font-bold ${total > 0 ? 'text-blue-700' : 'text-red-600'}`}>{total} <span className="text-sm text-gray-400 font-normal">{item.bigUnit}</span></span>
            </div>
            {activeGroups.length > 0 ? (
                <div className={`grid gap-3 ${activeGroups.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                  {activeGroups.map(groupName => (
                    <div key={groupName} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm h-fit">
                      <div className={`p-2 font-bold text-center text-sm ${groupName === '崇文' ? 'bg-blue-50 text-blue-800 border-b border-blue-100' : 'bg-orange-50 text-orange-800 border-b border-orange-100'}`}>{groupName}倉</div>
                      <div className="divide-y divide-gray-100">
                        {WAREHOUSE_GROUPS[groupName].map(sub => {
                          const count = stocks[item.id]?.[groupName]?.[sub] || 0;
                          if (count <= 0) return null;
                          return (<div key={sub} className="flex justify-between p-2 text-xs text-gray-800 font-bold bg-white"><span>{sub}</span><span>{count}</span></div>);
                        })}
                      </div>
                    </div>
                  ))}
                </div>
            ) : (<div className="text-center text-gray-400 py-8">無庫存資料</div>)}
          </div>
        </div>
      </div>
    );
};

const PriceSelectorModal = ({ modalData, onClose, getPrice, handlePriceSelect, globalTier }) => {
    const { item, mode } = modalData;
    const isGlobal = mode === 'global';
    return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-slide-up" onClick={e => e.stopPropagation()}>
        <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center"><h3 className="font-bold text-gray-700">{isGlobal ? "設定預設價格" : "選擇價格"}</h3><button onClick={onClose}><X size={20}/></button></div>
        <div className="p-4 space-y-3">
          {!isGlobal && <div className="text-center mb-4"><div className="text-lg font-black text-gray-800">{item.name}</div><div className="text-sm font-bold text-gray-500">{item.spec}</div></div>}
          {CUSTOMER_TIERS.map(tier => {
              const price = isGlobal ? null : getPrice(item, tier.id);
              const isActive = isGlobal ? globalTier === tier.id : (mode === 'cart' && item.itemTier === tier.id);
              return (
                  <button key={tier.id} onClick={(e) => { e.stopPropagation(); handlePriceSelect(tier.id, modalData); }} className={`w-full p-4 rounded-xl border-2 flex justify-between items-center transition-all ${isActive ? 'border-blue-600 bg-blue-50 text-blue-800 shadow-md ring-2 ring-blue-200' : 'border-gray-200 hover:bg-gray-50 text-gray-600'}`}>
                      <div className="flex flex-col items-start"><span className="font-bold text-lg">{tier.name}</span>{tier.id === 'priceBase' && <span className="text-[10px] text-red-500 font-bold">⚠ 注意利潤</span>}</div>
                      <div className="flex items-center gap-2">{!isGlobal && <span className="text-2xl font-mono font-black">${price}</span>}{isGlobal && isActive && <CheckCircle size={24} className="text-blue-600"/>}</div>
                  </button>
              )
          })}
        </div>
      </div>
    </div>
)};

const ColumnMappingModal = ({ onClose, uploadType, showToast }) => {
      const isStock = uploadType === 'stock';
      return (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className={`${isStock?'bg-blue-700':'bg-emerald-600'} text-white p-4 flex justify-between items-center`}>
                    <h3 className="font-bold text-lg flex items-center gap-2"><Settings size={20}/> {isStock?'庫存':'報價'}欄位對應</h3>
                    <button onClick={onClose}><X size={20}/></button>
                </div>
                <div className="p-6 overflow-y-auto flex-1 space-y-4">
                    <div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-lg text-sm">
                        <p className="font-bold">Excel 格式確認</p>
                        <p className="text-xs mt-1 opacity-80">{isStock ? '請確保 Excel 含有各倉庫數量的欄位' : '請確保 Excel 含有「品名」、「規格」與各級價格欄位'}</p>
                    </div>
                    {!isStock && (
                        <div className="border-b border-gray-100 pb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">規格欄位 (單一描述)</label>
                            <p className="text-xs text-gray-400 mb-2">例：30/40 1.1k*8盒（傳鮮）</p>
                            <select className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-700"><option>C欄: 規格敘述</option></select>
                        </div>
                    )}
                </div>
                <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3"><button onClick={onClose} className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-200 rounded-md">取消</button><button onClick={() => {showToast("資料已成功更新 (模擬)"); onClose();}} className={`px-6 py-2 text-white rounded-md font-bold shadow-sm transition-all active:scale-95 ${isStock?'bg-blue-600 hover:bg-blue-700':'bg-emerald-600 hover:bg-emerald-700'}`}>確認匯入</button></div>
            </div>
        </div>
      );
  };

// --- Main Content ---
const AppContent = () => {
  const [products, setProducts] = useState([]);
  const [stocks, setStocks] = useState({});
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState({ name: '', taxId: '', address: '', contact: '', phone: '' });
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const init = () => {
      const savedVersion = localStorage.getItem('sys_ver');
      if (savedVersion !== SYSTEM_VERSION) {
        performHardReset();
      } else {
        const p = safeJsonParse('sys_products', []);
        const s = safeJsonParse('sys_stocks', {});
        const c = safeJsonParse('sys_cart', []);
        const cust = safeJsonParse('sys_customer', { name: '', taxId: '', address: '', contact: '', phone: '' });
        if (!p || p.length === 0) { performHardReset(); } else { setProducts(p); setStocks(s); setCart(c); setCustomer(cust); }
      }
      setIsInitialized(true);
    };
    init();
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem('sys_products', JSON.stringify(products));
    localStorage.setItem('sys_stocks', JSON.stringify(stocks));
    localStorage.setItem('sys_cart', JSON.stringify(cart));
    localStorage.setItem('sys_customer', JSON.stringify(customer));
  }, [products, stocks, cart, customer, isInitialized]);

  const [activeTab, setActiveTab] = useState('quote'); 
  const [globalTier, setGlobalTier] = useState('priceCase'); 
  const [quoteMode, setQuoteMode] = useState('order'); 
  const [viewMode, setViewMode] = useState('group'); 
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showZeroStock, setShowZeroStock] = useState(false);

  const [expandedGroups, setExpandedGroups] = useState({});
  const [toast, setToast] = useState(null);
  const [activeStockModal, setActiveStockModal] = useState(null);
  const [activePriceModal, setActivePriceModal] = useState(null);
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [showMappingModal, setShowMappingModal] = useState(false);
  const [uploadType, setUploadType] = useState(null);

  const performHardReset = () => {
    const newProducts = generateBulkData();
    const newStocks = {};
    newProducts.forEach(p => newStocks[p.id] = generateStock());
    setProducts(newProducts); setStocks(newStocks); setCart([]);
    setCustomer({ name: '', taxId: '', address: '', contact: '', phone: '' });
    localStorage.setItem('sys_ver', SYSTEM_VERSION);
    showToast("系統已初始化");
  };

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(null), 2500); };
  const getPrice = (item, tierId) => item?.prices?.[tierId] || 0;
  const getTotalStock = (item) => {
    if (!item || !stocks[item.id]) return 0;
    let total = 0;
    try { Object.values(stocks[item.id]).forEach(g => Object.values(g).forEach(v => total += (v || 0))); } catch(e) { return 0; }
    return total;
  };

  const addToCart = (item, tierId = globalTier) => {
    if (cart.find(c => c.id === item.id)) { showToast(`已在清單中`); return; }
    setCart([...cart, { ...item, qty: 1, itemTier: tierId }]);
    showToast(`已加入`);
  };
  const updateQty = (id, delta) => { setCart(cart.map(item => item.id === id ? { ...item, qty: Math.max(0.5, item.qty + delta) } : item)); };
  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  const updateCartItemTier = (itemId, newTier) => { setCart(cart.map(item => item.id === itemId ? { ...item, itemTier: newTier } : item)); setActivePriceModal(null); };
  const handlePriceSelect = (tierId, modalData) => {
      if (modalData.mode === 'global') { setGlobalTier(tierId); showToast(`預設價格已更新`); setActivePriceModal(null); }
      else if (modalData.mode === 'cart') { updateCartItemTier(modalData.item.id, tierId); }
      else if (modalData.mode === 'quote') { addToCart(modalData.item, tierId); setActivePriceModal(null); }
  };
  const calculateTotal = () => cart.reduce((sum, item) => sum + (item.qty * item.ratio * getPrice(item, item.itemTier)), 0);
  const toggleGroup = (groupName) => setExpandedGroups(prev => ({ ...prev, [groupName]: !prev[groupName] }));

  // Line text gen
  const generateLineText = () => {
      let text = `🐟【${customer.name || '客戶'} ${quoteMode === 'order' ? '報價單' : '產品價目表'}】\n` + `📅 ${new Date().toLocaleDateString()}\n` + (customer.contact ? `👤 ${customer.contact}\n` : '') + `----------------\n`;
      text += cart.map(i => `🔹${i.name}\n   ${i.spec}\n   $${getPrice(i, i.itemTier)}/${i.smallUnit}` + (quoteMode === 'order' ? ` | 數量:${i.qty}${i.bigUnit}` : '')).join('\n') + `\n----------------\n`;
      if (quoteMode === 'order') text += `💰 總計: $${calculateTotal().toLocaleString()}\n`;
      return text;
  };
  const shareToLine = () => window.open(`https://line.me/R/msg/text/?${encodeURIComponent(generateLineText())}`, '_blank');
  const copyToClipboard = () => { navigator.clipboard.writeText(generateLineText()); showToast('已複製'); };

  const filteredProducts = useMemo(() => products.filter(item => {
    const s = searchTerm.toLowerCase();
    if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;
    if (!showZeroStock && getTotalStock(item) <= 0) return false;
    return !s || item.name.toLowerCase().includes(s) || item.spec.toLowerCase().includes(s);
  }), [products, searchTerm, selectedCategory, showZeroStock, stocks]);

  const groupedProducts = useMemo(() => {
      if (viewMode !== 'group') return [];
      const groups = {};
      filteredProducts.forEach(item => {
          if (!groups[item.name]) groups[item.name] = { name: item.name, totalStock: 0, items: [] };
          groups[item.name].items.push(item);
          groups[item.name].totalStock += getTotalStock(item);
      });
      return Object.values(groups);
  }, [filteredProducts, viewMode, stocks]);

  if (!isInitialized) return <div className="min-h-screen flex items-center justify-center font-bold text-gray-400">載入中...</div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <StickyHeader activeTab={activeTab} quoteMode={quoteMode} setQuoteMode={setQuoteMode} searchTerm={searchTerm} setSearchTerm={setSearchTerm} viewMode={viewMode} setViewMode={setViewMode} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} globalTier={globalTier} setActivePriceModal={setActivePriceModal} cartCount={cart.length} setShowZeroStock={setShowZeroStock} showZeroStock={showZeroStock} onOpenCustomerModal={() => setShowCustomerModal(true)} customerName={customer.name} />
      <main className="max-w-5xl mx-auto">
        {activeTab === 'quote' && (
            <div className="px-4 pb-24 space-y-3 mt-4">
                {showZeroStock && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2"><Eye size={14}/> 顯示 0 庫存</div>}
                {viewMode === 'group' ? groupedProducts.map(group => (
                    <div key={group.name} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                        <div onClick={() => toggleGroup(group.name)} className="p-3 bg-white flex justify-between items-center cursor-pointer active:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-3"><div className={`p-1.5 rounded-full border ${expandedGroups[group.name] ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-gray-50 border-gray-200 text-gray-400'}`}>{expandedGroups[group.name] ? <ChevronUp size={16}/> : <ChevronRight size={16}/>}</div><div><div className="font-bold text-gray-800">{group.name}</div><div className="text-xs text-gray-400 font-normal">({group.items.length} 規格)</div></div></div><span className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">總存: {group.totalStock}</span>
                        </div>
                        {expandedGroups[group.name] && <div className="divide-y divide-gray-100 border-t border-gray-100">{group.items.map(item => 
                            <div key={item.id} className="p-4 border-b border-gray-50 last:border-b-0"><div className="flex justify-between items-baseline mb-3"><div className="font-black text-slate-800 text-lg leading-snug mr-2 flex-1">{item.spec}</div><div onClick={(e) => { e.stopPropagation(); setActivePriceModal({ item, mode: 'quote' }); }} className="text-right whitespace-nowrap cursor-pointer active:scale-95 transition-transform bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-lg border border-blue-100"><span className="font-black text-xl text-blue-700">${getPrice(item, globalTier)}</span><span className="text-xs font-bold text-slate-400 ml-0.5">/{item.smallUnit}</span><span className="text-[10px] text-blue-400 ml-1">👆</span></div></div><div className="flex justify-between items-center gap-3"><div className="flex-shrink-0"><StockButton totalStock={getTotalStock(item)} onClick={() => setActiveStockModal(item)} /></div><button onClick={() => addToCart(item)} disabled={cart.some(c=>c.id===item.id) || getTotalStock(item)<=0} className={`flex-1 py-2 rounded-xl font-black text-sm flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all ${cart.some(c=>c.id===item.id) ? 'bg-gray-100 text-gray-400 border border-gray-200' : (getTotalStock(item)<=0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700')}`}>{cart.some(c=>c.id===item.id) ? <CheckCircle size={16}/> : <Plus size={16}/>} {cart.some(c=>c.id===item.id) ? '已選' : (getTotalStock(item)<=0 ? '缺貨' : '加入清單')}</button></div></div>
                        )}</div>}
                    </div>
                )) : filteredProducts.map(item => 
                    <div key={item.id} className="bg-white rounded-xl border border-gray-200 shadow-sm mb-2 overflow-hidden"><div className="p-4 border-b border-gray-50 last:border-b-0"><div className="text-xs font-bold text-slate-500 mb-1">{item.name}</div><div className="flex justify-between items-baseline mb-3"><div className="font-black text-slate-800 text-lg leading-snug mr-2 flex-1">{item.spec}</div><div onClick={(e) => { e.stopPropagation(); setActivePriceModal({ item, mode: 'quote' }); }} className="text-right whitespace-nowrap cursor-pointer active:scale-95 transition-transform bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-lg border border-blue-100"><span className="font-black text-xl text-blue-700">${getPrice(item, globalTier)}</span><span className="text-xs font-bold text-slate-400 ml-0.5">/{item.smallUnit}</span><span className="text-[10px] text-blue-400 ml-1">👆</span></div></div><div className="flex justify-between items-center gap-3"><div className="flex-shrink-0"><StockButton totalStock={getTotalStock(item)} onClick={() => setActiveStockModal(item)} /></div><button onClick={() => addToCart(item)} disabled={cart.some(c=>c.id===item.id) || getTotalStock(item)<=0} className={`flex-1 py-2 rounded-xl font-black text-sm flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all ${cart.some(c=>c.id===item.id) ? 'bg-gray-100 text-gray-400 border border-gray-200' : (getTotalStock(item)<=0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700')}`}>{cart.some(c=>c.id===item.id) ? <CheckCircle size={16}/> : <Plus size={16}/>} {cart.some(c=>c.id===item.id) ? '已選' : (getTotalStock(item)<=0 ? '缺貨' : '加入清單')}</button></div></div></div>
                )}
            </div>
        )}
        {activeTab === 'cart' && (
            <div className="px-4 pb-24 mt-4">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden min-h-[60vh] flex flex-col">
                    <div className="p-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center"><h2 className="font-bold text-gray-800 flex items-center gap-2"><ShoppingCart size={18}/> 購物車</h2><span className="text-xs font-medium bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{cart.length} 品項</span></div>
                    {cart.length === 0 ? <div className="flex-1 flex flex-col items-center justify-center text-gray-300 p-10"><ShoppingCart size={48} className="mb-2"/><p>尚無商品</p></div> : 
                    <div className="divide-y divide-gray-100">
                        {cart.map(item => {
                            const tierInfo = CUSTOMER_TIERS.find(t => t.id === item.itemTier) || CUSTOMER_TIERS[1];
                            return (
                                <div key={item.id} className="p-4 bg-white">
                                    <div className="flex justify-between items-start mb-3"><div><div className="font-black text-xl text-slate-900 leading-tight">{item.name}</div><div className="font-bold text-base text-slate-600 mt-1">{item.spec}</div></div><button onClick={() => removeFromCart(item.id)} className="text-slate-300 hover:text-red-500 p-2"><Trash2 size={20}/></button></div>
                                    <div className="flex items-center justify-between gap-3 mt-2">
                                        {quoteMode === 'order' ? (<div className="flex items-center bg-white rounded-xl h-12 border-2 border-slate-200 shadow-sm shrink-0"><button onClick={() => updateQty(item.id, -1)} className="px-3 h-full hover:text-blue-600 text-slate-500 flex items-center justify-center"><Minus size={18}/></button><div className="w-10 text-center font-black text-slate-800 text-lg">{item.qty}</div><button onClick={() => updateQty(item.id, 1)} className="px-3 h-full hover:text-blue-600 text-slate-500 flex items-center justify-center"><Plus size={18}/></button></div>) : <div className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">純報價</div>}
                                        <div className="flex flex-col items-end flex-grow px-1"><div className="flex items-baseline gap-1"><span className="font-black text-2xl text-blue-700 leading-none">${getPrice(item, item.itemTier)}</span><span className="text-xs text-slate-400 font-bold">/{item.smallUnit}</span></div>{quoteMode === 'order' && <span className="text-[10px] text-slate-400 font-bold mt-1">小計 ${(item.qty * item.ratio * getPrice(item, item.itemTier)).toLocaleString()}</span>}</div>
                                        <button onClick={() => setActivePriceModal({ item, mode: 'cart' })} className={`h-12 px-4 rounded-xl font-black text-sm border-2 shadow-sm flex items-center justify-center transition-all active:scale-95 shrink-0 ${tierInfo.color.replace('text-', 'text-').replace('bg-', 'bg-').replace('border-', 'border-')}`}>{tierInfo.short}<ChevronDown size={16} className="ml-1 opacity-60" /></button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>}
                    {quoteMode === 'order' && cart.length > 0 && <div className="p-5 bg-slate-900 text-white mt-auto font-black text-2xl flex justify-between items-center shadow-inner"><span>總計</span><span>${calculateTotal().toLocaleString()}</span></div>}
                </div>
            </div>
        )}

        {activeTab === 'preview' && <PreviewTab cart={cart} customerName={customer.name} total={calculateTotal()} getPrice={getPrice} quoteMode={quoteMode} customer={customer} />}

        {activeTab === 'data' && (
            <div className="px-4 pb-24 mt-4 space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center"><Database size={48} className="mx-auto text-blue-200 mb-4"/><h2 className="font-bold text-lg text-slate-800 mb-2">資料庫管理</h2><button className="w-full p-4 mb-2 border-2 border-dashed border-blue-300 bg-blue-50 rounded-xl text-blue-900 font-bold">上傳庫存表</button><button className="w-full p-4 border-2 border-dashed border-emerald-300 bg-emerald-50 rounded-xl text-emerald-900 font-bold">上傳報價單</button><div className="mt-8 border-t border-gray-100 pt-6"><button onClick={performHardReset} className="w-full py-3 bg-white border border-red-200 text-red-600 font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-red-50 transition-colors text-sm"><RotateCcw size={16}/> ⚠️ 重置系統</button></div></div>
            </div>
        )}
      </main>

      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg z-40 print:hidden safe-area-bottom">
        <div className="flex justify-around">
          {['quote', 'cart', 'preview', 'data'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 flex flex-col items-center py-3 border-t-2 ${activeTab === tab ? 'border-blue-600 text-blue-700' : 'border-transparent text-gray-400 hover:text-gray-600'}`}>
                {tab === 'quote' ? <Search size={22}/> : tab === 'cart' ? <div className="relative"><ShoppingCart size={22}/>{cart.length > 0 && <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] w-4 h-4 font-bold flex items-center justify-center rounded-full shadow-sm">{cart.length}</span>}</div> : tab === 'preview' ? <Share2 size={22}/> : <Database size={22}/>}
                <span className="text-[10px] font-bold mt-1 capitalize">{tab === 'quote' ? '選購' : tab === 'cart' ? '清單' : tab === 'preview' ? '輸出' : '設定'}</span>
            </button>
          ))}
        </div>
      </nav>

      {activeStockModal && <StockDetailModal item={activeStockModal} onClose={() => setActiveStockModal(null)} stocks={stocks} getTotalStock={getTotalStock} />}
      {activePriceModal && <PriceSelectorModal modalData={activePriceModal} onClose={() => setActivePriceModal(null)} getPrice={getPrice} handlePriceSelect={handlePriceSelect} globalTier={globalTier} />}
      {showCustomerModal && <CustomerModal customer={customer} setCustomer={setCustomer} onClose={() => setShowCustomerModal(false)} />}
      {showMappingModal && <ColumnMappingModal onClose={() => setShowMappingModal(false)} />}
      {toast && <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-lg shadow-xl z-[80] animate-fade-in-up font-medium text-sm flex items-center gap-2"><CheckCircle size={16}/>{toast}</div>}
    </div>
  );
};

const App = () => <ErrorBoundary><AppContent /></ErrorBoundary>;
export default App;