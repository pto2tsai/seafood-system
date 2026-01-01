    const { useState, useEffect } = React;

    // SVG 圖示
    const Icons = {
      Star: ({filled, className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      Camera: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
      ),
      Copy: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
      ),
      Trash: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        </svg>
      ),
      Plus: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      ),
      Eye: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      Send: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      ),
      Clock: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      Save: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
          <polyline points="17 21 17 13 7 13 7 21"/>
          <polyline points="7 3 7 8 15 8"/>
        </svg>
      ),
      Sparkles: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
        </svg>
      ),
      DollarSign: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      Package: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      User: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      Upload: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
      ),
      Settings: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2"/>
        </svg>
      ),
      Search: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      ),
      FileText: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      // 🆕 底部導航專用圖示
      Home: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      ShoppingCart: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
      ),
      History: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      Settings: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6m-9-9h6m6 0h6"/>
        </svg>
      ),
      // 🆕 鈴鐺圖示
      Bell: ({className=""}) => (
        <svg className={`icon-svg ${className}`} viewBox="0 0 24 24">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
      ),
    };

    // CONFIG
    const CONFIG = {
        firebase: {
            apiKey: "AIzaSyD59OwEnbcLZShhTTJJMu1VjJxrvzIcG_g",
            authDomain: "seafoodq-11b9d.firebaseapp.com",
            databaseURL: "https://seafoodq-11b9d-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "seafoodq-11b9d",
            storageBucket: "seafoodq-11b9d.firebasestorage.app",
            messagingSenderId: "454420146806",
            appId: "1:454420146806:web:802e6bd5e8e90aab21cd57"
        },
        // 🔐 Firebase Auth 帳號（需先在 Firebase Console 建立）
        accounts: {
            ADMIN: { email: "admin@seafood.erp", password: "admin8888" },
            SALES: { email: "sales@seafood.erp", password: "sales1688" }
        },
        // 本地密碼驗證
        pwd: { ADMIN: "8888", SALES: "1688" }
    };
    
    let auth = null;

    // 工具函式
    const cleanStr = (s) => s ? String(s).trim() : '';
    const sanitizeKey = (s) => s ? String(s).replace(/[.#$/\[\]]/g, '_').trim() : '';
    const parseNum = (v) => {
        if (!v) return 0;
        if (typeof v === 'number') return v;
        const n = String(v).replace(/,/g, '').match(/-?\d+(\.\d+)?/);
        return n ? parseFloat(n[0]) : 0;
    };

    let db = null;

    // 主應用
    const App = () => {
      const [page, setPage] = useState('login');
      const [currentTab, setCurrentTab] = useState('home'); // 🆕 底部導航分頁
      const [role, setRole] = useState('');
      const [status, setStatus] = useState('未連線');
      const [data, setData] = useState({ 
        products: {}, 
        inventory: {}, 
        tiers: ['門市售價', '會員95%', '餐廳90%', '生意價', '整件價', 'VIP價', '業務底價'], 
        meta: {} 
      });
      const [inputPwd, setInputPwd] = useState('');
      
      // 報價狀態
      const [cart, setCart] = useState([
        {
          cartId: Date.now(),
          id: 'DEMO001',
          name: '生白蝦',
          specDetail: '40/50*850G*12盒*南美',
          qty: 1,
          price: 280,
          selectedTier: 'VIP價',  // 記錄該產品當前使用的價格等級
          note: '點擊產品名稱可重新選擇，點擊規格可搜尋同品名',
          smallUnit: '件',
          bigUnit: '件',
          pack: 1,
          prices: {
            '門市售價': 450, 
            '會員95%': 428, 
            '餐廳90%': 405, 
            '生意價': 350, 
            '整件價': 320, 
            'VIP價': 280, 
            '業務底價': 250
          },
          image: ''
        }
      ]);
      const [custInfo, setCustInfo] = useState({ 
        name: '', phone: '', mobile: '', address: '', 
        date: new Date().toISOString().split('T')[0], 
        tier: '整件價',
        paymentMethod: '月結30天'
      });
      
      // 彈窗狀態
      const [showProductSearch, setShowProductSearch] = useState(false);
      const [showPriceModal, setShowPriceModal] = useState(false);
      const [showHistory, setShowHistory] = useState(false);
      const [showCustomerDetail, setShowCustomerDetail] = useState(false);
      const [showLowStockAlert, setShowLowStockAlert] = useState(false); // 低庫存提醒彈窗
      const [lowStockItems, setLowStockItems] = useState([]); // 低庫存產品清單
      const [showSafetyStockModal, setShowSafetyStockModal] = useState(false); // 安全庫存設定彈窗
      const [safetyStockSearch, setSafetyStockSearch] = useState(''); // 安全庫存搜尋
      const [search, setSearch] = useState('');
      const [currentPriceItem, setCurrentPriceItem] = useState(null);
      const [reSelectCartId, setReSelectCartId] = useState(null); // 重新選擇產品的 cartId
      
      // 🆕 V14.0 設定頁狀態
      const [settingsTab, setSettingsTab] = useState('import'); // 設定頁 Tab: import, safety, price, account
      const [priceSubTab, setPriceSubTab] = useState('edit'); // 改價子 Tab: edit, publish
      const [priceSearch, setPriceSearch] = useState(''); // 改價搜尋
      const [expandedPriceProducts, setExpandedPriceProducts] = useState({}); // 展開的產品
      const [editedPrices, setEditedPrices] = useState({}); // 編輯中的價格
      const [productStatusEdits, setProductStatusEdits] = useState({}); // 產品狀態編輯（新品、促銷）
      const [publishCategory, setPublishCategory] = useState('all'); // 發布分類篩選
      const [editingProduct, setEditingProduct] = useState(null); // 正在編輯的產品
      const [editingPrices, setEditingPrices] = useState({}); // 編輯中的價格（彈窗用）
      const [editingStatus, setEditingStatus] = useState({ isNew: false, isPromo: false }); // 編輯中的狀態
      
      // 安全庫存設定（預設 40 件）
      const DEFAULT_SAFETY_STOCK = 40;
      
      // 主要出貨倉庫列表
      const MAIN_WAREHOUSES = ['崇文_白蝦', '八方_白蝦', '崇文_成品', '八方_成品', '崇文_原料', '八方_原料', '崇文_半成品庫'];
      
      // 本地儲存
      const [quotes, setQuotes] = useState([]);

      // 載入本地資料
      useEffect(() => {
        const saved = localStorage.getItem('erpQuotesV11');
        if (saved) {
          try {
            setQuotes(JSON.parse(saved));
          } catch (e) {}
        }
      }, []);

      const saveLocal = () => {
        localStorage.setItem('erpQuotesV11', JSON.stringify(quotes));
      };

      // Firebase 初始化
      const initDB = () => {
        if (db) return true;
        if (!window.firebaseModules) return false;
        try {
            const { initializeApp, getDatabase, getAuth } = window.firebaseModules;
            const app = initializeApp(CONFIG.firebase);
            db = getDatabase(app);
            auth = getAuth(app);
            return true;
        } catch (e) {
            alert("Firebase 初始化失敗: " + e.message);
            return false;
        }
      };

      // 監聯資料
      const listenDB = () => {
          if (!initDB()) return;
          const { ref, onValue } = window.firebaseModules;
          setStatus('連線中...');
          onValue(ref(db, 'seafoodData'), (snap) => {
              const val = snap.val();
              if (val) {
                  setData({
                      products: val.productDB || {},
                      inventory: val.inventoryDB || {},
                      tiers: val.priceTiers || ['生意價'],
                      meta: val.dbMeta || {},
                      safetyStock: val.safetyStock || {} // 個別產品安全庫存設定
                  });
                  setStatus('● 已連線');
              } else {
                  setStatus('● 資料庫為空');
              }
          }, (err) => {
              console.error('Firebase 錯誤:', err.code, err.message);
              if (err.code === 'PERMISSION_DENIED') {
                  setStatus('⚠️ 權限不足，請重新登入');
              } else {
                  setStatus('連線錯誤: ' + (err.code || err.message));
              }
          });
      };
      
      // 檢查低庫存（以產品為主，加總所有倉庫庫存）
      const checkLowStock = (debug = false) => {
        const lowItems = [];
        const inventory = data.inventory || {};
        const products = data.products || {};
        const safetyStock = data.safetyStock || {};
        
        // 除錯：收集所有倉庫名稱
        const allWarehouses = new Set();
        
        // 建立品號到產品資訊的對照表（包含類型）
        const pidToInfo = {};
        Object.entries(products).forEach(([name, specs]) => {
          if (Array.isArray(specs)) {
            specs.forEach(spec => {
              if (spec.id) {
                pidToInfo[spec.id] = { 
                  name, 
                  specDetail: spec.specDetail || '',
                  prodType: spec.prodType || '自製品' // 預設為自製品
                };
              }
            });
          }
        });
        
        // 檢查每個品號的庫存（以產品為主，加總所有主要倉庫）
        Object.entries(inventory).forEach(([pid, stocks]) => {
          if (!Array.isArray(stocks)) return;
          
          // 收集所有倉庫名稱
          stocks.forEach(s => {
            if (s.warehouse) allWarehouses.add(s.warehouse);
          });
          
          // 取得該產品的安全庫存量（個別設定 > 預設值）
          // 注意：0 也是有效值，表示不需要警報
          const safeLine = safetyStock[pid] !== undefined ? safetyStock[pid] : DEFAULT_SAFETY_STOCK;
          const productInfo = pidToInfo[pid] || { name: '未知產品', specDetail: '', prodType: '自製品' };
          
          // 如果安全庫存設為 0，表示不需要警報，跳過此品項
          if (safeLine === 0) return;
          
          // 篩選主要出貨倉庫的庫存並加總
          const mainStocks = stocks.filter(s => MAIN_WAREHOUSES.includes(s.warehouse));
          const totalStock = mainStocks.reduce((sum, s) => sum + Math.floor(s.stock || 0), 0);
          
          // 🆕 計算其他倉庫的庫存（非主要倉庫）
          const otherStocks = stocks.filter(s => !MAIN_WAREHOUSES.includes(s.warehouse) && s.stock > 0);
          const otherTotalStock = otherStocks.reduce((sum, s) => sum + Math.floor(s.stock || 0), 0);
          
          // 除錯：如果有庫存但 mainStocks 為空
          if (debug && stocks.length > 0 && mainStocks.length === 0) {
            console.log(`⚠️ 品號 ${pid} 有 ${stocks.length} 筆庫存，但沒有匹配到主要倉庫:`, stocks.map(s => s.warehouse));
          }
          
          // 如果總庫存低於安全水位，加入警報清單
          if (totalStock < safeLine) {
            // 🆕 判斷處理方式
            let action = '';
            if (otherTotalStock > 0) {
              action = '需調撥';
            } else {
              action = productInfo.prodType === '採購品' ? '需採購' : '需生產';
            }
            
            lowItems.push({
              pid,
              name: productInfo.name,
              specDetail: productInfo.specDetail,
              prodType: productInfo.prodType, // 🆕 產品類型
              totalStock,
              safetyStock: safeLine,
              shortage: safeLine - totalStock,
              otherTotalStock, // 🆕 其他倉庫庫存
              action, // 🆕 處理方式
              // 各倉庫明細（顯示所有有庫存的倉庫，不只主要倉庫）
              warehouseDetails: stocks.filter(s => s.stock > 0).map(s => ({
                warehouse: s.warehouse,
                stock: Math.floor(s.stock || 0),
                isMain: MAIN_WAREHOUSES.includes(s.warehouse)
              })).sort((a, b) => a.warehouse.localeCompare(b.warehouse)),
              // 🆕 其他倉庫明細
              otherWarehouseDetails: otherStocks.map(s => ({
                warehouse: s.warehouse,
                stock: Math.floor(s.stock || 0)
              })).sort((a, b) => b.stock - a.stock)
            });
          }
        });
        
        // 除錯：顯示所有倉庫名稱
        if (debug) {
          console.log('📦 資料庫中的所有倉庫:', Array.from(allWarehouses).sort());
          console.log('📍 設定的主要倉庫:', MAIN_WAREHOUSES);
        }
        
        // 按缺貨量排序（缺貨量大的排前面）
        lowItems.sort((a, b) => b.shortage - a.shortage);
        
        return lowItems;
      };
      
      // 登入後檢查庫存（延遲執行，等資料載入）
      useEffect(() => {
        if (page === 'main' && Object.keys(data.inventory).length > 0) {
          // 🆕 每次進入都檢查低庫存（讓紅點鈴鐺能顯示）
          const items = checkLowStock();
          setLowStockItems(items);
          // 不自動彈窗，使用者需要時自己點鈴鐺
        }
      }, [page, data.inventory]);

      // 登入狀態
      const [loginEmail, setLoginEmail] = useState('');
      const [loginLoading, setLoginLoading] = useState(false);

      // 🔐 Firebase Auth 登入
      const handleLogin = async () => {
          if (!initDB()) {
            alert('系統初始化中，請稍候再試');
            return;
          }
          
          setLoginLoading(true);
          
          // 判斷是管理員還是業務
          let email = '';
          let firebasePassword = '';
          let userRole = '';
          
          if (inputPwd === CONFIG.pwd.ADMIN) {
            email = CONFIG.accounts.ADMIN.email;
            firebasePassword = CONFIG.accounts.ADMIN.password;
            userRole = 'admin';
          } else if (inputPwd === CONFIG.pwd.SALES) {
            email = CONFIG.accounts.SALES.email;
            firebasePassword = CONFIG.accounts.SALES.password;
            userRole = 'sales';
          } else {
            setLoginLoading(false);
            alert("密碼錯誤");
            return;
          }
          
          try {
            const { signInWithEmailAndPassword } = window.firebaseModules;
            // 使用 Firebase Auth 密碼登入
            await signInWithEmailAndPassword(auth, email, firebasePassword);
            
            setRole(userRole);
            setPage('main');
            setCurrentTab('quote');
            localStorage.setItem('erpRole', userRole);
            localStorage.setItem('erpLoginTime', Date.now().toString());
            listenDB();
          } catch (error) {
            console.error('Firebase Auth 錯誤:', error.code, error.message);
            
            // 如果 Firebase Auth 失敗，使用本地驗證（備用方案）
            if (inputPwd === CONFIG.pwd.ADMIN || inputPwd === CONFIG.pwd.SALES) {
              console.log('使用本地驗證（Firebase Auth 未設定）');
              setRole(userRole);
              setPage('main');
              setCurrentTab('quote');
              localStorage.setItem('erpRole', userRole);
              localStorage.setItem('erpLoginTime', Date.now().toString());
              listenDB();
            } else {
              alert("登入失敗：" + error.message);
            }
          }
          
          setLoginLoading(false);
      };

      // 🔐 登出
      const handleLogout = async () => {
        try {
          if (auth) {
            const { signOut } = window.firebaseModules;
            await signOut(auth);
          }
        } catch (e) {
          console.log('登出錯誤:', e);
        }
        localStorage.removeItem('erpRole');
        localStorage.removeItem('erpLoginTime');
        setRole('');
        setPage('login');
        setCart([]);
      };

      // 自動登入：頁面載入時檢查
      useEffect(() => {
        const savedRole = localStorage.getItem('erpRole');
        const loginTime = localStorage.getItem('erpLoginTime');
        
        if (savedRole && loginTime) {
          // 檢查登入是否過期（7天）
          const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
          const isExpired = Date.now() - parseInt(loginTime) > sevenDaysInMs;
          
          if (!isExpired) {
            // 自動登入，直接進入報價頁
            setRole(savedRole);
            setPage('main');
            setCurrentTab('quote');
            listenDB();
          } else {
            // 登入已過期，清除記錄
            localStorage.removeItem('erpRole');
            localStorage.removeItem('erpLoginTime');
          }
        }
      }, []);


      // Excel 上傳
      const handleUpload = (e, type) => {
          const file = e.target.files[0];
          if (!file) return;
          
          const fileName = file.name.toLowerCase();
          const reader = new FileReader();
          
          reader.onload = (evt) => {
              try {
                  let wb;
                  
                  // CSV 檔案需要 Big5 解碼
                  if (fileName.endsWith('.csv')) {
                      const decoder = new TextDecoder("big5");
                      const csvText = decoder.decode(new Uint8Array(evt.target.result));
                      wb = XLSX.read(csvText, { type: 'string' });
                  } 
                  // Excel 檔案直接讀取二進位
                  else {
                      const data = new Uint8Array(evt.target.result);
                      wb = XLSX.read(data, { type: 'array' });
                  }
                  
                  const ws = wb.Sheets[wb.SheetNames[0]];
                  const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });
                  
                  console.log('讀取到', rows.length, '行資料');
                  
                  if (type === 'stock') processStock(rows);
                  else if (type === 'quote') processQuote(rows);

              } catch (err) {
                  console.error('讀取錯誤:', err);
                  alert("讀取失敗：" + err.message + "\n\n請確認檔案格式正確");
              }
          };
          
          reader.onerror = () => {
              alert("檔案讀取失敗，請重試");
          };
          
          reader.readAsArrayBuffer(file);
          e.target.value = null;
      };

      const processStock = (rows) => {
          console.log('開始處理庫存資料，總行數:', rows.length);
          
          let headerIdx = -1;
          for(let i=0; i<Math.min(rows.length, 20); i++) {
              const str = rows[i].join('');
              if (str.includes('品號') && (str.includes('庫別') || str.includes('倉庫'))) {
                  headerIdx = i; 
                  console.log('找到標題列於第', i+1, '行:', rows[i]);
                  break;
              }
          }
          if (headerIdx === -1) { 
              alert("❌ 找不到標題列\n\n請確認 Excel 檔案包含「品號」和「庫別」欄位");
              console.error('前20行內容:', rows.slice(0, 20));
              return; 
          }

          const headers = rows[headerIdx].map(h => cleanStr(h || ''));
          const rawData = rows.slice(headerIdx + 1);
          const idxPid = headers.findIndex(h => h && h.includes('品號'));
          const idxName = headers.findIndex(h => h && h.includes('品名'));
          const idxSpec = headers.findIndex(h => h && h.includes('規格'));
          const idxWh = headers.findIndex(h => h && (h.includes('庫別') || h.includes('倉庫')));
          const idxQty = headers.findIndex(h => h && (h.includes('庫存') || h.includes('數量')));

          console.log('欄位索引 - 品號:', idxPid, '品名:', idxName, '規格:', idxSpec, '庫別:', idxWh, '數量:', idxQty);

          if (idxPid === -1 || idxWh === -1 || idxQty === -1) {
              alert("❌ 缺少必要欄位\n\n需要：品號、庫別、庫存數量");
              return;
          }

          const newInv = {};
          const newProds = { ...data.products };
          let lastPid = null;
          let count = 0, newProdCount = 0;

          rawData.forEach((row, index) => {
              if (!row || !Array.isArray(row)) return;
              
              let pid = sanitizeKey(cleanStr(row[idxPid] || ''));
              const wh = cleanStr(row[idxWh] || '');
              const qty = parseNum(row[idxQty]);
              if (!wh) return;
              if (!pid && lastPid) pid = lastPid;
              else if (pid) lastPid = pid;
              if (!pid) return;

              if (qty !== 0) {
                  if (!newInv[pid]) newInv[pid] = [];
                  if (!newInv[pid].some(x => x.warehouse === wh)) {
                      newInv[pid].push({ warehouse: wh, stock: qty });
                      count++;
                  }
              }

              const name = cleanStr(row[idxName] || '');
              if (name && newInv[pid]) {
                  const safeName = sanitizeKey(name);
                  if (!newProds[safeName]) newProds[safeName] = [];
                  if (!newProds[safeName].find(s => s.id === pid)) {
                      newProds[safeName].push({
                          id: pid, name: name, specDetail: cleanStr(row[idxSpec] || ''),
                          prices: {"門市售價":0, "會員95%":0, "餐廳90%":0, "生意價":0, "整件價":0, "VIP價":0, "業務底價":0}, 
                          note: '(庫存補入)', pack: 1, smallUnit:'件', bigUnit:'件'
                      });
                      newProdCount++;
                  }
              }
          });

          console.log('處理完成 - 庫存筆數:', count, '新產品:', newProdCount);

          if (count === 0) {
              alert("❌ 無有效資料\n\n請檢查檔案內容是否正確");
              return;
          }

          // 使用 setTimeout 確保彈窗在主執行緒
          setTimeout(() => {
              const confirmed = window.confirm(`✅ 解析成功！\n\n庫存資料：${count} 筆\n新增產品：${newProdCount} 筆\n\n確認上傳到 Firebase？`);
              if (confirmed) {
                  uploadDB({ 
                      inventoryDB: newInv, 
                      productDB: newProds, 
                      dbMeta: { 
                          ...(data.meta || {}), 
                          stockDate: new Date().toLocaleString('zh-TW'),
                          lastUpdate: new Date().toISOString()
                      } 
                  });
              }
          }, 100);
      };

      const processQuote = (rows) => {
          console.log('開始處理報價資料，總行數:', rows.length);
          
          let headerIdx = -1;
          // 尋找真正的標題列：必須同時包含「品號」和「品名」
          for(let i=0; i<Math.min(rows.length, 20); i++) {
              const row = rows[i];
              if (!row || row.length === 0) continue;
              
              // 將整行轉成字串檢查
              const rowStr = row.join('|');
              
              // 必須同時包含「品號」和「品名」才算是真正的標題列
              if (rowStr.includes('品號') && rowStr.includes('品名')) {
                  headerIdx = i; 
                  console.log('找到標題列於第', i+1, '行:', row);
                  break;
              }
          }
          
          if (headerIdx === -1) { 
              alert("❌ 找不到標題列\n\n請確認 Excel 檔案包含「品號」和「品名」欄位\n\n標題行應該同時包含這兩個欄位");
              console.error('前20行內容:', rows.slice(0, 20));
              return; 
          }
          
          const headers = rows[headerIdx].map(cleanStr);
          const rawData = rows.slice(headerIdx + 1);
          const idxPid = headers.findIndex(h => h && h.includes('品號'));
          const idxName = headers.findIndex(h => h && h.includes('品名'));
          const idxSpec = headers.findIndex(h => h && h.includes('規格'));
          // 🆕 產品類型欄位：採購品 / 自製品
          const idxType = headers.findIndex(h => h && (h.includes('類型') || h.includes('來源') || h.includes('採購') || h.includes('自製')));

          console.log('欄位索引 - 品號:', idxPid, '品名:', idxName, '規格:', idxSpec, '類型:', idxType);
          console.log('所有標題:', headers);

          if (idxPid === -1 || idxName === -1) {
              alert("❌ 缺少必要欄位\n\n需要：品號、品名");
              return;
          }

          const newProds = {};
          const tiers = new Set();
          let count = 0;

          rawData.forEach((row, index) => {
              if (!row || !Array.isArray(row)) return;
              
              const pid = sanitizeKey(cleanStr(row[idxPid] || ''));
              const name = cleanStr(row[idxName] || '');
              if (!pid || !name) return;

              const prices = {};
              headers.forEach((h, i) => {
                  if (!h || typeof h !== 'string') return;
                  // 價格欄位：包含「價」字，但不包含「號」「名」「資料」「建立」「作業」
                  if ((h.includes('價') || h.includes('+')) && 
                      !h.includes('號') && 
                      !h.includes('名') &&
                      !h.includes('資料') &&
                      !h.includes('建立') &&
                      !h.includes('作業')) {
                      const cellValue = row[i];
                      // 如果儲存格是空白、undefined、null，就跳過
                      if (cellValue === undefined || cellValue === null || cellValue === '') return;
                      
                      const v = parseNum(cellValue);
                      // 只要能解析成數字（包括 0），就加入
                      if (!isNaN(v)) {
                          // 清理價格等級名稱
                          let tierName = h.replace('價格','').replace('_','').replace(/\(.*\)/g, '').trim();
                          // 特殊處理：「整件價(10件以下)」→「整件價」
                          if (tierName.includes('整件')) tierName = '整件價';
                          prices[tierName] = v;
                          tiers.add(tierName);
                      }
                  }
              });

              // 只有當有價格資料時才加入
              if (Object.keys(prices).length > 0) {
                  const safeName = sanitizeKey(name);
                  if (!newProds[safeName]) newProds[safeName] = [];
                  
                  // 🆕 判斷產品類型：採購品 / 自製品
                  let prodType = '自製品'; // 預設為自製品
                  if (idxType !== -1) {
                      const typeVal = cleanStr(row[idxType] || '').toLowerCase();
                      if (typeVal.includes('採購') || typeVal.includes('purchase') || typeVal === '採購品') {
                          prodType = '採購品';
                      } else if (typeVal.includes('自製') || typeVal.includes('製造') || typeVal === '自製品') {
                          prodType = '自製品';
                      }
                  }
                  
                  newProds[safeName].push({
                      id: pid, 
                      name, 
                      specDetail: cleanStr(row[idxSpec] || '') || '', 
                      prices,
                      prodType, // 🆕 產品類型
                      pack: 1, 
                      smallUnit: '件', 
                      bigUnit: '件' 
                  });
                  count++;
              }
          });

          console.log('處理完成 - 產品筆數:', count, '價格等級:', Array.from(tiers));

          if (count === 0) {
              alert("❌ 無有效資料\n\n可能原因：\n1. 所有產品的價格都是 0 或空白\n2. 價格欄位名稱無法識別\n3. 品號或品名為空\n\n請檢查檔案內容");
              console.log('價格欄位檢查:', headers.filter(h => h && h.includes('價')));
              return;
          }

          // 使用 setTimeout 確保彈窗在主執行緒
          setTimeout(() => {
              const confirmed = window.confirm(`✅ 解析成功！\n\n產品數量：${count} 筆\n價格等級：${Array.from(tiers).join(', ')}\n\n確認上傳到 Firebase？`);
              if (confirmed) {
                  uploadDB({ 
                      productDB: newProds, 
                      priceTiers: Array.from(tiers), 
                      dbMeta: { 
                          ...(data.meta || {}), 
                          quoteDate: new Date().toLocaleString('zh-TW'),
                          lastUpdate: new Date().toISOString()
                      } 
                  });
              }
          }, 100);
      };

      const uploadDB = (updates) => {
          if (!initDB()) {
              alert("❌ Firebase 未連線\n\n請確認網路連線正常");
              return;
          }
          
          const { ref, set } = window.firebaseModules;
          
          // 重要：從當前 Firebase 資料讀取，而非從 state
          // 這樣可以避免覆蓋其他資料
          const finalData = { 
              productDB: updates.productDB !== undefined ? updates.productDB : data.products,
              inventoryDB: updates.inventoryDB !== undefined ? updates.inventoryDB : data.inventory,
              priceTiers: updates.priceTiers !== undefined ? updates.priceTiers : data.tiers,
              dbMeta: updates.dbMeta !== undefined ? updates.dbMeta : data.meta,
              safetyStock: updates.safetyStock !== undefined ? updates.safetyStock : (data.safetyStock || {})
          };
          
          console.log('=== uploadDB 開始 ===');
          console.log('更新項目:', Object.keys(updates));
          console.log('updates.safetyStock:', updates.safetyStock);
          console.log('finalData.safetyStock:', finalData.safetyStock);
          console.log('產品數:', Object.keys(finalData.productDB).length);
          console.log('庫存品項:', Object.keys(finalData.inventoryDB).length);
          
          // 顯示上傳中提示
          const originalStatus = status;
          setStatus('📤 上傳中...');
          
          set(ref(db, 'seafoodData'), finalData)
            .then(() => {
                setStatus('● 已連線');
                console.log('✅ uploadDB 成功');
                console.log('已上傳的 safetyStock:', finalData.safetyStock);
                alert("✅ 上傳成功！\n\n安全庫存設定: " + Object.keys(finalData.safetyStock).length + " 項");
            })
            .catch(e => {
                setStatus(originalStatus);
                console.error('上傳錯誤:', e);
                alert("❌ 上傳失敗\n\n錯誤訊息：" + e.message + "\n\n請檢查網路連線或重試");
            });
      };

      // 購物車操作
      const addProductFromDB = (spec) => {
        if (reSelectCartId) {
          // 重新選擇產品 - 更新現有產品
          setCart(cart.map(item => {
            if (item.cartId === reSelectCartId) {
              return {
                ...spec,
                cartId: item.cartId, // 保持原有的 cartId
                qty: item.qty, // 保持原有的數量
                price: spec.prices[custInfo.tier] || 0,
                selectedTier: custInfo.tier, // 記錄選擇的價格等級
                note: item.note, // 保持原有的備註
                image: item.image // 保持原有的圖片
              };
            }
            return item;
          }));
          setReSelectCartId(null);
          setShowProductSearch(false);
          setSearch('');
        } else {
          // 新增產品 - 不關閉彈窗，保持在同一頁
          const newItem = {
            ...spec,
            cartId: Date.now(),
            qty: 1,
            price: spec.prices[custInfo.tier] || 0,
            selectedTier: custInfo.tier, // 記錄選擇的價格等級
            note: '',
            image: ''
          };
          setCart([...cart, newItem]);
          // 不關閉彈窗，不清除搜尋
        }
      };

      const reSelectProduct = (cartId) => {
        setReSelectCartId(cartId);
        setShowProductSearch(true);
      };

      const updateCart = (cartId, field, value) => {
        setCart(cart.map(item => item.cartId === cartId ? {...item, [field]: value} : item));
      };

      const deleteFromCart = (cartId) => {
        setCart(cart.filter(item => item.cartId !== cartId));
      };

      const copyCartItem = (cartId) => {
        const item = cart.find(i => i.cartId === cartId);
        if (item) {
          setCart([...cart, {...item, cartId: Date.now()}]);
        }
      };

      const showPriceSelector = (cartId) => {
        setCurrentPriceItem(cartId);
        setShowPriceModal(true);
      };

      const selectPrice = (tier, price) => {
        if (currentPriceItem) {
          // 同時更新價格和選擇的價格等級
          setCart(cart.map(item => 
            item.cartId === currentPriceItem 
              ? {...item, price: price, selectedTier: tier}
              : item
          ));
          setShowPriceModal(false);
          setCurrentPriceItem(null);
        }
      };

      const uploadImage = (cartId) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              updateCart(cartId, 'image', event.target.result);
            };
            reader.readAsDataURL(file);
          }
        };
        input.click();
      };

      // 計算小計：如果有箱容，則 件數 × 箱容 × 單價；否則 數量 × 單價
      const calculateSubtotal = (item) => {
        const packInfo = extractPackInfo(item.specDetail);
        if (packInfo) {
          // 有箱容：件數（箱數） × 箱容 × 單價
          return item.qty * packInfo.qty * item.price;
        }
        // 無箱容：數量 × 單價
        return item.qty * item.price;
      };
      
      const calculateTotal = () => cart.reduce((sum, item) => sum + calculateSubtotal(item), 0);

      // 從規格中提取箱容資訊
      const extractPackInfo = (specDetail) => {
        if (!specDetail) return null;
        
        // 匹配模式：數字 + 單位
        // 例如: 12盒、24片、6包、10KG、48塊、12K等
        const patterns = [
          /(\d+)\s*(盒|箱|包|片|塊|支|尾|條|罐|瓶|袋|打|K|KG|kg|公斤)/i,
          /x\s*(\d+)/i, // 匹配 x12, X24 等格式
          /\*\s*(\d+)/i  // 匹配 *12, *24 等格式
        ];
        
        for (const pattern of patterns) {
          const match = specDetail.match(pattern);
          if (match) {
            const qty = parseInt(match[1]);
            const unit = match[2] || match[0].replace(/[x*\s]/gi, '') + '入';
            return { qty, unit };
          }
        }
        
        return null;
      };

      // 顯示箱容資訊（用於界面顯示）
      const getPackDisplayInfo = (item) => {
        const packInfo = extractPackInfo(item.specDetail);
        if (!packInfo) return null;
        
        return {
          packQty: packInfo.qty,
          packUnit: packInfo.unit,
          caseCount: item.qty, // 件數就是箱數
          totalUnits: item.qty * packInfo.qty // 總小單位數
        };
      };

      const saveQuote = () => {
        if (cart.length === 0) {
          alert('請先新增產品');
          return;
        }
        const quote = {
          id: Date.now(),
          date: new Date().toISOString(),
          customer: {...custInfo},
          products: cart.map(p => ({...p})),
          total: calculateTotal()
        };
        const newQuotes = [...quotes, quote];
        setQuotes(newQuotes);
        setTimeout(() => {
          localStorage.setItem('erpQuotesV11', JSON.stringify(newQuotes));
        }, 100);
        alert('報價已儲存！');
      };

      const loadQuote = (quoteId) => {
        const quote = quotes.find(q => q.id === quoteId);
        if (quote) {
          setCustInfo({...quote.customer});
          setCart(quote.products.map(p => ({...p, cartId: Date.now() + Math.random()})));
          setCurrentTab('quote'); // 切換到報價頁
          setShowHistory(false);
        }
      };

      const deleteQuote = (quoteId) => {
        if (confirm('確定刪除此報價？')) {
          const newQuotes = quotes.filter(q => q.id !== quoteId);
          setQuotes(newQuotes);
          localStorage.setItem('erpQuotesV11', JSON.stringify(newQuotes));
        }
      };

      const printQuote = () => {
        if (cart.length === 0) {
          alert('請先新增產品');
          return;
        }
        
        let html = `
          <html>
          <head>
            <meta charset="UTF-8">
            <title>報價單</title>
            <style>
              @media print {
                @page { margin: 1.5cm; }
              }
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { 
                font-family: 'Microsoft JhengHei', Arial, sans-serif;
                padding: 40px;
                background: #fff;
                color: #333;
              }
              .header {
                text-align: center;
                margin-bottom: 40px;
                border-bottom: 3px solid #2563eb;
                padding-bottom: 20px;
              }
              h1 { 
                font-size: 32px;
                color: #1e40af;
                margin-bottom: 10px;
                font-weight: bold;
              }
              .company-info {
                font-size: 14px;
                color: #6b7280;
              }
              .info-section {
                background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
                padding: 20px;
                border-radius: 12px;
                margin-bottom: 30px;
                border-left: 4px solid #2563eb;
              }
              .info-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
              }
              .info-item {
                display: flex;
                align-items: center;
              }
              .info-label {
                font-weight: bold;
                color: #374151;
                min-width: 90px;
              }
              .info-value {
                color: #1f2937;
              }
              table { 
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 30px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
              }
              thead {
                background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
                color: white;
              }
              th { 
                padding: 15px 12px;
                text-align: left;
                font-weight: bold;
                font-size: 14px;
                border: none;
              }
              th:first-child { border-radius: 8px 0 0 0; }
              th:last-child { border-radius: 0 8px 0 0; }
              tbody tr {
                border-bottom: 1px solid #e5e7eb;
                transition: background 0.2s;
              }
              tbody tr:hover {
                background: #f9fafb;
              }
              tbody tr:last-child {
                border-bottom: 2px solid #2563eb;
              }
              td { 
                padding: 12px;
                font-size: 14px;
              }
              td:first-child {
                font-weight: bold;
                color: #2563eb;
                text-align: center;
                width: 50px;
              }
              .product-name {
                font-weight: bold;
                color: #1f2937;
              }
              .spec-detail {
                color: #6b7280;
                font-size: 13px;
              }
              .price-cell {
                text-align: right;
                font-weight: bold;
                color: #059669;
              }
              .note-cell {
                color: #6b7280;
                font-style: italic;
                font-size: 13px;
              }
              .total-section {
                background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
                padding: 25px;
                border-radius: 12px;
                border: 2px solid #2563eb;
                margin-top: 30px;
              }
              .total-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
              .total-label {
                font-size: 20px;
                font-weight: bold;
                color: #1e40af;
              }
              .total-amount {
                font-size: 36px;
                font-weight: bold;
                color: #2563eb;
              }
              .footer {
                margin-top: 50px;
                padding-top: 20px;
                border-top: 2px solid #e5e7eb;
                text-align: center;
                color: #6b7280;
                font-size: 12px;
              }
              .back-button {
                position: fixed;
                top: 20px;
                left: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 12px 24px;
                border-radius: 12px;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
                z-index: 1000;
                transition: all 0.3s ease;
                border: none;
                font-size: 14px;
              }
              .back-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
              }
              .print-button {
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                padding: 12px 24px;
                border-radius: 12px;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
                z-index: 1000;
                transition: all 0.3s ease;
                border: none;
                font-size: 14px;
              }
              .print-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(16, 185, 129, 0.5);
              }
              @media print {
                body { padding: 20px; }
                .info-section { break-inside: avoid; }
                table { break-inside: avoid; }
                tbody tr { break-inside: avoid; }
                .back-button, .print-button { display: none !important; }
              }
            </style>
          </head>
          <body>
            <button class="back-button" onclick="window.close()">← 返回</button>
            <button class="print-button" onclick="window.print()">🖨️ 列印</button>
            
            <div class="header">
              <h1>報價單</h1>
              <div class="company-info">Quotation</div>
            </div>

            <div class="info-section">
              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">客戶名稱：</span>
                  <span class="info-value">${custInfo.name}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">價格等級：</span>
                  <span class="info-value">${custInfo.tier}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">結帳方式：</span>
                  <span class="info-value">${custInfo.paymentMethod}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">日期：</span>
                  <span class="info-value">${custInfo.date}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">電話：</span>
                  <span class="info-value">${custInfo.phone}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">手機：</span>
                  <span class="info-value">${custInfo.mobile}</span>
                </div>
              </div>
              <div style="margin-top: 15px;">
                <span class="info-label">地址：</span>
                <span class="info-value">${custInfo.address}</span>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>項次</th>
                  <th>產品名稱</th>
                  <th>規格</th>
                  <th style="text-align: center;">數量</th>
                  <th style="text-align: right;">單價</th>
                  <th style="text-align: right;">小計</th>
                  <th>備註</th>
                </tr>
              </thead>
              <tbody>
                ${cart.map((p, i) => `
                  <tr>
                    <td>${i + 1}</td>
                    <td class="product-name">${p.name}</td>
                    <td class="spec-detail">${p.specDetail}</td>
                    <td style="text-align: center;">${p.qty} ${p.smallUnit}</td>
                    <td class="price-cell">$${p.price.toLocaleString()}</td>
                    <td class="price-cell">$${calculateSubtotal(p).toLocaleString()}</td>
                    <td class="note-cell">${p.note || '-'}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>

            <div class="total-section">
              <div class="total-row">
                <span class="total-label">總金額</span>
                <span class="total-amount">NT$ ${calculateTotal().toLocaleString()}</span>
              </div>
            </div>

            <div class="footer">
              列印時間：${new Date().toLocaleString('zh-TW')} | 感謝您的支持
            </div>
          </body>
          </html>
        `;
        
        const win = window.open('', '_blank');
        win.document.write(html);
        win.document.close();
      };

      const printQuoteNoPrice = () => {
        if (cart.length === 0) {
          alert('請先新增產品');
          return;
        }
        
        let html = `
          <html>
          <head>
            <meta charset="UTF-8">
            <title>產品清單</title>
            <style>
              @media print {
                @page { margin: 1.5cm; }
              }
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { 
                font-family: 'Microsoft JhengHei', Arial, sans-serif;
                padding: 40px;
                background: #fff;
                color: #333;
              }
              .header {
                text-align: center;
                margin-bottom: 40px;
                border-bottom: 3px solid #10b981;
                padding-bottom: 20px;
              }
              h1 { 
                font-size: 32px;
                color: #059669;
                margin-bottom: 10px;
                font-weight: bold;
              }
              .subtitle {
                font-size: 14px;
                color: #6b7280;
              }
              .info-section {
                background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
                padding: 20px;
                border-radius: 12px;
                margin-bottom: 30px;
                border-left: 4px solid #10b981;
              }
              .info-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
              }
              .info-item {
                display: flex;
                align-items: center;
              }
              .info-label {
                font-weight: bold;
                color: #374151;
                min-width: 90px;
              }
              .info-value {
                color: #1f2937;
              }
              table { 
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 30px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
              }
              thead {
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
              }
              th { 
                padding: 15px 12px;
                text-align: left;
                font-weight: bold;
                font-size: 14px;
                border: none;
              }
              th:first-child { border-radius: 8px 0 0 0; }
              th:last-child { border-radius: 0 8px 0 0; }
              tbody tr {
                border-bottom: 1px solid #e5e7eb;
                transition: background 0.2s;
              }
              tbody tr:hover {
                background: #f9fafb;
              }
              tbody tr:last-child {
                border-bottom: 2px solid #10b981;
              }
              td { 
                padding: 12px;
                font-size: 14px;
              }
              td:first-child {
                font-weight: bold;
                color: #10b981;
                text-align: center;
                width: 50px;
              }
              .product-name {
                font-weight: bold;
                color: #1f2937;
              }
              .spec-detail {
                color: #6b7280;
                font-size: 13px;
              }
              .note-cell {
                color: #6b7280;
                font-style: italic;
                font-size: 13px;
              }
              .footer {
                margin-top: 50px;
                padding-top: 20px;
                border-top: 2px solid #e5e7eb;
                text-align: center;
                color: #6b7280;
                font-size: 12px;
              }
              .watermark {
                text-align: center;
                color: #10b981;
                font-weight: bold;
                font-size: 16px;
                margin-top: 20px;
                padding: 15px;
                background: #f0fdf4;
                border-radius: 8px;
              }
              .back-button {
                position: fixed;
                top: 20px;
                left: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 12px 24px;
                border-radius: 12px;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
                z-index: 1000;
                transition: all 0.3s ease;
                border: none;
                font-size: 14px;
              }
              .back-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
              }
              .print-button {
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                padding: 12px 24px;
                border-radius: 12px;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
                z-index: 1000;
                transition: all 0.3s ease;
                border: none;
                font-size: 14px;
              }
              .print-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(16, 185, 129, 0.5);
              }
              @media print {
                body { padding: 20px; }
                .info-section { break-inside: avoid; }
                table { break-inside: avoid; }
                tbody tr { break-inside: avoid; }
                .back-button, .print-button { display: none !important; }
              }
            </style>
          </head>
          <body>
            <button class="back-button" onclick="window.close()">← 返回</button>
            <button class="print-button" onclick="window.print()">🖨️ 列印</button>
            
            <div class="header">
              <h1>產品清單</h1>
              <div class="subtitle">Product List (含單價不含總額)</div>
            </div>

            <div class="info-section">
              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">客戶名稱：</span>
                  <span class="info-value">${custInfo.name}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">日期：</span>
                  <span class="info-value">${custInfo.date}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">電話：</span>
                  <span class="info-value">${custInfo.phone}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">手機：</span>
                  <span class="info-value">${custInfo.mobile}</span>
                </div>
              </div>
              <div style="margin-top: 15px;">
                <span class="info-label">地址：</span>
                <span class="info-value">${custInfo.address}</span>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>項次</th>
                  <th>產品名稱</th>
                  <th>規格</th>
                  <th style="text-align: center;">數量</th>
                  <th style="text-align: right;">單價</th>
                  <th>備註</th>
                </tr>
              </thead>
              <tbody>
                ${cart.map((p, i) => `
                  <tr>
                    <td>${i + 1}</td>
                    <td class="product-name">${p.name}</td>
                    <td class="spec-detail">${p.specDetail}</td>
                    <td style="text-align: center;">${p.qty} ${p.smallUnit}</td>
                    <td class="price-cell">$${p.price.toLocaleString()}</td>
                    <td class="note-cell">${p.note || '-'}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>

            <div class="watermark">
              ✓ 本清單含單價資訊，不含小計與總金額
            </div>

            <div class="footer">
              列印時間：${new Date().toLocaleString('zh-TW')}
            </div>
          </body>
          </html>
        `;
        
        const win = window.open('', '_blank');
        win.document.write(html);
        win.document.close();
      };

      const shareToLine = () => {
        if (cart.length === 0) {
          alert('請先新增產品');
          return;
        }
        
        let message = `【${custInfo.date} 報價單】\n${custInfo.name}｜${custInfo.paymentMethod}\n\n`;
        cart.forEach((p, i) => {
          message += `${i + 1}. ${p.name}\n   ${p.specDetail}\n   $${p.price}/${p.smallUnit}\n`;
          if (p.note) message += `   備註：${p.note}\n`;
          message += `\n`;
        });
        
        window.open(`https://line.me/R/msg/text/?${encodeURIComponent(message.trim())}`, '_blank');
      };

      // 搜尋結果 - 同時搜尋產品名稱和規格
      const filteredProds = Object.keys(data.products || {}).filter(key => {
        if (!key) return false;
        // 搜尋產品名稱
        if (key.includes(search || '')) return true;
        // 搜尋規格內容
        const group = data.products[key];
        if (!group || !Array.isArray(group)) return false;
        return group.some(spec => {
          if (!spec || !spec.specDetail) return false;
          return spec.specDetail.includes(search || '');
        });
      });

      // ==================== 底部導航組件 ====================
      const BottomNav = () => {
        const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
        
        // 電腦版不顯示底部導航
        if (!isMobile) return null;
        
        return (
          <div className="no-print fixed bottom-0 left-0 right-0 glass border-t border-white/30 z-50 card-shadow">
            <div className="flex justify-around items-center h-16 max-w-2xl mx-auto">
              {/* 首頁 */}
              <button 
                onClick={() => setCurrentTab('home')}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  currentTab === 'home' ? 'text-indigo-600 relative' : 'text-gray-500 hover:text-indigo-600'
                }`}>
                {currentTab === 'home' && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-b-full"></div>
                )}
                <div className="relative">
                  <Icons.Home className="w-6 h-6" />
                </div>
                <span className={`text-xs mt-1 ${currentTab === 'home' ? 'font-bold' : ''}`}>首頁</span>
              </button>
              
              {/* 預覽 */}
              <button 
                onClick={printQuote}
                className="flex flex-col items-center justify-center flex-1 h-full transition-colors text-gray-500 hover:text-indigo-600 active:text-indigo-700"
              >
                <div className="relative">
                  <Icons.Eye className="w-6 h-6" />
                </div>
                <span className="text-xs mt-1">預覽</span>
              </button>
              
              {/* 儲存 */}
              <button 
                onClick={saveQuote}
                className="flex flex-col items-center justify-center flex-1 h-full transition-colors text-gray-500 hover:text-indigo-600 active:text-indigo-700"
              >
                <div className="relative">
                  <Icons.Save className="w-6 h-6" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </div>
                <span className="text-xs mt-1">儲存</span>
              </button>
              
              {/* 歷史 */}
              <button 
                onClick={() => setCurrentTab('history')}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  currentTab === 'history' ? 'text-indigo-600 relative' : 'text-gray-500 hover:text-indigo-600'
                }`}>
                {currentTab === 'history' && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-b-full"></div>
                )}
                <div className="relative">
                  <Icons.History className="w-6 h-6" />
                  {quotes.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center" style={{fontSize: '10px'}}>
                      {quotes.length}
                    </span>
                  )}
                </div>
                <span className={`text-xs mt-1 ${currentTab === 'history' ? 'font-bold' : ''}`}>歷史</span>
              </button>
              
              {/* LINE */}
              <button 
                onClick={shareToLine}
                className="flex flex-col items-center justify-center flex-1 h-full text-gray-500 hover:text-green-600 active:text-green-700 transition-colors"
              >
                <div className="relative">
                  <Icons.Send className="w-6 h-6" />
                </div>
                <span className="text-xs mt-1">LINE</span>
              </button>
              
              {/* 總金額 - 僅電腦版 */}
              {!isMobile && (
                <div className="flex flex-col items-center justify-center px-4 h-full border-l border-gray-200">
                  <span className="text-xs text-gray-500">總金額</span>
                  <span className="text-lg font-black text-indigo-600">${cart.reduce((sum, item) => sum + calculateSubtotal(item), 0).toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>
        );
      };

      // ==================== 全局彈窗組件 ====================
      const GlobalModals = () => {
        // 🆕 折疊狀態管理
        const [expandedItems, setExpandedItems] = useState({});
        const toggleExpand = (idx) => {
          setExpandedItems(prev => ({ ...prev, [idx]: !prev[idx] }));
        };
        
        const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
        
        return (
          <>
            {/* 低庫存提醒彈窗 - 響應式卡片設計 */}
            {showLowStockAlert && (
              <div className="fixed inset-0 bg-black/60 z-[100] flex items-end md:items-center justify-center">
                <div className="bg-gray-100 w-full md:max-w-2xl md:rounded-2xl flex flex-col overflow-hidden shadow-2xl" style={{maxHeight: isMobile ? '90vh' : '85vh', borderRadius: isMobile ? '24px 24px 0 0' : ''}}>
                  
                  {/* 標題列 */}
                  <div className="px-5 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white flex-shrink-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
                          ⚠️
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">低庫存警報</h3>
                          <p className="text-sm opacity-90">{lowStockItems.length} 項產品需要補貨</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => setShowLowStockAlert(false)} 
                        className="bg-white/20 hover:bg-white/30 active:bg-white/40 w-10 h-10 rounded-xl font-bold text-xl flex items-center justify-center transition-colors"
                      >✕</button>
                    </div>
                  </div>

                  {/* 產品卡片列表 */}
                  <div className="flex-1 overflow-auto p-3 md:p-4 space-y-3">
                    {lowStockItems.map((item, idx) => {
                      const isExpanded = expandedItems[idx];
                      const isCritical = item.totalStock <= 10;
                      
                      return (
                        <div 
                          key={idx} 
                          className={`bg-white rounded-xl shadow-sm overflow-hidden border-l-4 transition-all ${
                            isCritical ? 'border-l-red-500' : 'border-l-orange-400'
                          }`}
                        >
                          {/* 卡片主體 */}
                          <div className="p-4">
                            {/* 第一行：產品名稱 + 類型標籤 + 處理建議 */}
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <div className="flex-1 min-w-0">
                                <h4 className="text-lg font-bold text-gray-900 leading-tight truncate">{item.name}</h4>
                                <p className="text-lg text-gray-500 mt-0.5 truncate">{item.specDetail || '—'}</p>
                              </div>
                              {/* 處理建議標籤 */}
                              <div className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold ${
                                item.action === '需調撥' 
                                  ? 'bg-blue-500 text-white' 
                                  : item.action === '需採購'
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-purple-500 text-white'
                              }`}>
                                {item.action}
                              </div>
                            </div>
                            
                            {/* 第二行：品號 + 類型 */}
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-xs text-gray-400 font-mono">{item.pid}</span>
                              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                item.prodType === '採購品' 
                                  ? 'bg-blue-100 text-blue-600' 
                                  : 'bg-purple-100 text-purple-600'
                              }`}>
                                {item.prodType || '自製品'}
                              </span>
                            </div>
                            
                            {/* 🆕 儀表板數字區 - 三欄並排 */}
                            <div className="grid grid-cols-3 gap-2 mb-3">
                              {/* 缺貨數 - 最重要 */}
                              <div className={`rounded-xl p-3 text-center ${isCritical ? 'bg-red-500' : 'bg-red-100'}`}>
                                <div className={`text-2xl font-black ${isCritical ? 'text-white' : 'text-red-600'}`}>
                                  {item.shortage}
                                </div>
                                <div className={`text-xs font-medium ${isCritical ? 'text-red-100' : 'text-red-500'}`}>
                                  缺貨數
                                </div>
                              </div>
                              
                              {/* 安全庫存 */}
                              <div className="bg-gray-100 rounded-xl p-3 text-center">
                                <div className="text-2xl font-black text-gray-600">
                                  {item.safetyStock}
                                </div>
                                <div className="text-xs font-medium text-gray-400">
                                  安全庫存
                                </div>
                              </div>
                              
                              {/* 目前總量 */}
                              <div className="bg-gray-100 rounded-xl p-3 text-center">
                                <div className={`text-2xl font-black ${item.totalStock === 0 ? 'text-red-500' : 'text-gray-800'}`}>
                                  {item.totalStock}
                                </div>
                                <div className="text-xs font-medium text-gray-400">
                                  目前總量
                                </div>
                              </div>
                            </div>
                            
                            {/* 🆕 其他倉庫提示（如果有可調撥庫存）*/}
                            {item.otherTotalStock > 0 && (
                              <div className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 mb-3 flex items-center gap-2">
                                <span className="text-blue-500">📦</span>
                                <span className="text-sm text-blue-700 font-medium">
                                  其他倉庫有 <span className="font-bold">{item.otherTotalStock}</span> 件可調撥
                                </span>
                              </div>
                            )}
                            
                            {/* 🆕 折疊按鈕 - 查看倉庫分佈 */}
                            <button
                              onClick={() => toggleExpand(idx)}
                              className="w-full flex items-center justify-center gap-2 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              <span>{isExpanded ? '收起倉庫分佈' : '查看倉庫分佈'}</span>
                              <svg 
                                className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          </div>
                          
                          {/* 🆕 折疊內容 - 倉庫分佈明細 */}
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-0 border-t border-gray-100">
                              {/* 主要倉庫 */}
                              <div className="pt-3">
                                <div className="text-xs font-medium text-gray-500 mb-2">主要出貨倉庫</div>
                                <div className="grid grid-cols-2 gap-2">
                                  {item.warehouseDetails && item.warehouseDetails.filter(wh => wh.isMain).map((wh, i) => (
                                    <div 
                                      key={i}
                                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                                        wh.stock === 0 
                                          ? 'bg-red-50 text-red-600' 
                                          : wh.stock < 20 
                                            ? 'bg-orange-50 text-orange-600'
                                            : 'bg-green-50 text-green-600'
                                      }`}
                                    >
                                      <span className="truncate text-xs">{wh.warehouse.replace('_', ' ')}</span>
                                      <span className="font-bold">{wh.stock}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* 其他倉庫（如果有）*/}
                              {item.otherWarehouseDetails && item.otherWarehouseDetails.length > 0 && (
                                <div className="pt-3 mt-3 border-t border-gray-100">
                                  <div className="text-xs font-medium text-blue-500 mb-2">其他倉庫（可調撥）</div>
                                  <div className="grid grid-cols-2 gap-2">
                                    {item.otherWarehouseDetails.map((wh, i) => (
                                      <div 
                                        key={i}
                                        className="flex items-center justify-between px-3 py-2 rounded-lg text-sm bg-blue-50 text-blue-600"
                                      >
                                        <span className="truncate text-xs">{wh.warehouse}</span>
                                        <span className="font-bold">{wh.stock}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* 底部操作列 */}
                  <div className="px-4 py-3 border-t bg-white flex-shrink-0">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => {
                          // 匯出 Excel
                          if (lowStockItems.length === 0) {
                            alert('沒有資料可匯出');
                            return;
                          }
                          
                          const exportData = lowStockItems.map(item => {
                            const whStocks = {};
                            MAIN_WAREHOUSES.forEach(wh => {
                              const found = item.warehouseDetails ? item.warehouseDetails.find(d => d.warehouse === wh) : null;
                              whStocks[wh] = found ? found.stock : 0;
                            });
                            
                            const otherWhStr = item.otherWarehouseDetails 
                              ? item.otherWarehouseDetails.map(w => `${w.warehouse}:${w.stock}`).join(', ')
                              : '';
                            
                            return {
                              '品號': item.pid,
                              '產品名稱': item.name,
                              '規格': item.specDetail,
                              '類型': item.prodType || '自製品',
                              ...whStocks,
                              '總庫存': item.totalStock,
                              '安全庫存': item.safetyStock,
                              '缺貨量': item.shortage,
                              '其他倉庫': otherWhStr,
                              '處理建議': item.action
                            };
                          });
                          
                          const ws = XLSX.utils.json_to_sheet(exportData);
                          ws['!cols'] = [
                            { wch: 15 }, { wch: 20 }, { wch: 25 }, { wch: 8 },
                            { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 12 },
                            { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 25 }, { wch: 10 }
                          ];
                          
                          const wb = XLSX.utils.book_new();
                          XLSX.utils.book_append_sheet(wb, ws, '低庫存報表');
                          
                          const today = new Date();
                          const dateStr = `${today.getFullYear()}${(today.getMonth()+1).toString().padStart(2,'0')}${today.getDate().toString().padStart(2,'0')}`;
                          XLSX.writeFile(wb, `低庫存報表_${dateStr}.xlsx`);
                        }}
                        className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                      >
                        <span>📊</span>
                        <span>匯出 Excel</span>
                      </button>
                      <button 
                        onClick={() => setShowLowStockAlert(false)} 
                        className="flex-1 py-3 bg-gray-800 hover:bg-gray-900 active:bg-black text-white rounded-xl font-bold transition-colors"
                      >
                        我知道了
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 安全庫存設定彈窗 */}
            {showSafetyStockModal && (
              <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
                <div className="bg-white w-full max-w-4xl rounded-2xl flex flex-col overflow-hidden shadow-2xl" style={{maxHeight: '90vh'}}>
                  <div className="px-6 py-4 border-b bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
                          ⚙️
                        </div>
                        <div>
                          <h3 className="font-bold text-xl">安全庫存設定</h3>
                          <p className="text-sm opacity-90">設定各產品的最低庫存警戒線（預設 {DEFAULT_SAFETY_STOCK} 件）</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          setShowSafetyStockModal(false);
                          setSafetyStockSearch('');
                        }} 
                        className="bg-white/20 hover:bg-white/30 w-10 h-10 rounded-lg font-bold text-xl flex items-center justify-center"
                      >✕</button>
                    </div>
                  </div>
                  
                  {/* 搜尋欄 */}
                  <div className="px-6 py-4 border-b bg-gray-50">
                    <div className="relative">
                      <input
                        type="text"
                        value={safetyStockSearch}
                        onChange={e => setSafetyStockSearch(e.target.value)}
                        placeholder="搜尋產品名稱或品號..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none"
                      />
                      <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  <div className="flex-1 overflow-auto">
                    {(() => {
                      // 建立產品清單（包含庫存資訊）
                      const productList = [];
                      const products = data.products || {};
                      const inventory = data.inventory || {};
                      const safetyStock = data.safetyStock || {};
                      
                      Object.entries(products).forEach(([name, specs]) => {
                        if (!Array.isArray(specs)) return;
                        specs.forEach(spec => {
                          if (!spec.id) return;
                          
                          // 搜尋過濾
                          const searchLower = safetyStockSearch.toLowerCase();
                          if (searchLower && 
                              !name.toLowerCase().includes(searchLower) && 
                              !spec.id.toLowerCase().includes(searchLower) &&
                              !(spec.specDetail || '').toLowerCase().includes(searchLower)) {
                            return;
                          }
                          
                          // 取得庫存資訊
                          const stocks = inventory[spec.id] || [];
                          const mainStocks = stocks.filter(s => MAIN_WAREHOUSES.includes(s.warehouse));
                          const totalStock = mainStocks.reduce((sum, s) => sum + Math.floor(s.stock), 0);
                          
                          productList.push({
                            pid: spec.id,
                            name,
                            specDetail: spec.specDetail || '',
                            currentSafety: safetyStock[spec.id] !== undefined ? safetyStock[spec.id] : DEFAULT_SAFETY_STOCK,
                            isCustom: safetyStock[spec.id] !== undefined,
                            stocks: mainStocks,
                            totalStock
                          });
                        });
                      });
                      
                      // 按名稱排序
                      productList.sort((a, b) => a.name.localeCompare(b.name));
                      
                      if (productList.length === 0) {
                        return (
                          <div className="p-8 text-center text-gray-500">
                            <Icons.Package className="w-16 h-16 mx-auto mb-4 opacity-30" />
                            <p>沒有找到符合的產品</p>
                          </div>
                        );
                      }
                      
                      return (
                        <div className="divide-y divide-gray-100">
                          {productList.map((item, idx) => (
                            <div key={idx} className="px-6 py-4 hover:bg-blue-50 transition-colors">
                              <div className="flex items-center gap-4">
                                <div className="flex-1 min-w-0">
                                  <div className="font-bold text-lg text-gray-800 truncate">{item.name}</div>
                                  <div className="text-base text-gray-500 truncate">{item.specDetail}</div>
                                  <div className="text-sm text-gray-400 mt-1">品號: {item.pid}</div>
                                  {/* 顯示各倉庫庫存 */}
                                  {item.stocks.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-2">
                                      {item.stocks.map((s, i) => (
                                        <span 
                                          key={i} 
                                          className={`text-sm px-2 py-1 rounded-full ${
                                            s.stock < item.currentSafety 
                                              ? 'bg-red-100 text-red-600' 
                                              : 'bg-green-100 text-green-600'
                                          }`}
                                        >
                                          {s.warehouse}: {Math.floor(s.stock)}
                                        </span>
                                      ))}
                                      <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-600 font-bold">
                                        總計: {item.totalStock}
                                      </span>
                                    </div>
                                  )}
                                </div>
                                
                                <div className="flex items-center gap-3 flex-shrink-0">
                                  <div className="text-center">
                                    <div className="text-xs text-gray-500 mb-1">安全庫存</div>
                                    <input
                                      type="text"
                                      inputMode="numeric"
                                      pattern="[0-9]*"
                                      defaultValue={item.currentSafety}
                                      data-pid={item.pid}
                                      data-original={item.currentSafety}
                                      onFocus={e => e.target.select()}
                                      onChange={e => {
                                        // 只過濾非數字，不觸發狀態更新
                                        e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                        // 更新樣式
                                        const isChanged = e.target.value !== String(e.target.dataset.original);
                                        if (isChanged) {
                                          e.target.className = 'w-20 h-10 text-center font-bold text-lg border-2 rounded-lg outline-none border-orange-500 bg-orange-50 text-orange-600';
                                        }
                                      }}
                                      className={`w-20 h-10 text-center font-bold text-lg border-2 rounded-lg outline-none ${
                                        item.isCustom
                                          ? 'border-blue-500 bg-blue-50 text-blue-600' 
                                          : 'border-gray-200 text-gray-600'
                                      }`}
                                    />
                                  </div>
                                  {item.isCustom && (
                                    <span className="text-xs text-blue-500">已自訂</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                  </div>

                  <div className="px-6 py-4 border-t bg-gray-50 flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="inline-block w-3 h-3 bg-blue-500 rounded mr-1"></span>
                      藍色框 = 已自訂　
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded mr-1 ml-3"></span>
                      橘色框 = 已修改
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => {
                          setShowSafetyStockModal(false);
                          setSafetyStockSearch('');
                        }} 
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-bold transition-colors"
                      >
                        取消
                      </button>
                      <button 
                        onClick={() => {
                          // 從 DOM 讀取所有輸入框的值
                          const inputs = document.querySelectorAll('input[data-pid]');
                          const newSafetyStock = { ...(data.safetyStock || {}) };
                          let changeCount = 0;
                          
                          inputs.forEach(input => {
                            const pid = input.dataset.pid;
                            const originalStr = input.dataset.original;
                            const newStr = input.value.trim();
                            
                            if (newStr !== originalStr && newStr !== '') {
                              changeCount++;
                              // 修復：正確處理 0 值
                              const parsed = parseInt(newStr);
                              const newVal = isNaN(parsed) ? DEFAULT_SAFETY_STOCK : parsed;
                              
                              if (newVal === DEFAULT_SAFETY_STOCK) {
                                delete newSafetyStock[pid];
                              } else {
                                newSafetyStock[pid] = newVal;
                              }
                            }
                          });
                          
                          if (changeCount > 0) {
                            // 使用現有的 uploadDB 函數
                            uploadDB({ safetyStock: newSafetyStock });
                          } else {
                            alert('沒有偵測到變更');
                          }
                          
                          setShowSafetyStockModal(false);
                          setSafetyStockSearch('');
                        }} 
                        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg font-bold transition-colors"
                      >
                        儲存
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      };

      // ==================== 🏠 首頁元件 ====================

      const HomePage = () => {
        // 計算低庫存數量
        const lowStockCount = lowStockItems.length;
        
        return (
          <div className="p-4 pb-24 animate-fade-in max-w-2xl mx-auto">
            {/* 歡迎橫幅 */}
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-3xl p-6 mb-6 card-shadow-lg animate-slide-up">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">👋 歡迎回來！</h1>
                  <p className="text-purple-100 text-sm">
                    {role === 'admin' ? '管理員' : '業務員'} • {new Date().toLocaleDateString('zh-TW')}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {/* 🆕 低庫存鈴鐺按鈕 */}
                  <button
                    onClick={() => {
                      const items = checkLowStock();
                      setLowStockItems(items);
                      if (items.length > 0) {
                        setShowLowStockAlert(true);
                      } else {
                        alert('✅ 目前沒有低庫存產品！');
                      }
                    }}
                    className="relative w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors"
                    title="低庫存提醒"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                    </svg>
                    {lowStockCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1 animate-pulse">
                        {lowStockCount > 99 ? '99+' : lowStockCount}
                      </span>
                    )}
                  </button>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icons.Sparkles className="w-8 h-8" />
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => {
                  setCart([]);
                  setCustInfo({
                    ...custInfo,
                    name: '',
                    date: new Date().toISOString().split('T')[0]
                  });
                  setCurrentTab('quote');
                  setShowProductSearch(true);
                }}
                className="w-full bg-white text-purple-600 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Icons.Plus className="w-6 h-6" />
                新建報價單
              </button>
            </div>
            
            {/* 快速操作 */}
            <div className="glass card-shadow rounded-3xl p-5 mb-6 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
                <Icons.Sparkles className="w-5 h-5 text-purple-600" />
                快速操作
              </h2>
              
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setCurrentTab('quote');
                    setShowProductSearch(true);
                  }}
                  className="btn-gradient text-white py-4 rounded-xl font-bold flex flex-col items-center gap-2 active:scale-95 transition-transform"
                >
                  <Icons.Search className="w-6 h-6" />
                  <span>搜尋產品</span>
                </button>
                
                <button
                  onClick={() => setCurrentTab('history')}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-bold flex flex-col items-center gap-2 active:scale-95 transition-transform"
                >
                  <Icons.History className="w-6 h-6" />
                  <span>歷史記錄</span>
                </button>
                
                <button
                  onClick={() => {
                    const items = checkLowStock();
                    setLowStockItems(items);
                    if (items.length > 0) {
                      setShowLowStockAlert(true);
                    } else {
                      alert('✅ 太棒了！目前沒有低庫存的產品');
                    }
                  }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-bold flex flex-col items-center gap-2 active:scale-95 transition-transform relative"
                >
                  <Icons.Package className="w-6 h-6" />
                  <span>庫存檢查</span>
                  {(() => {
                    const count = checkLowStock().length;
                    if (count > 0) {
                      return (
                        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
                          {count > 99 ? '99+' : count}
                        </span>
                      );
                    }
                    return null;
                  })()}
                </button>
                
                <button
                  onClick={() => setCurrentTab('quote')}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-bold flex flex-col items-center gap-2 active:scale-95 transition-transform"
                >
                  <Icons.ShoppingCart className="w-6 h-6" />
                  <span>編輯報價</span>
                </button>
                
                {role === 'admin' && (
                  <button
                    onClick={() => setPage('admin')}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-bold flex flex-col items-center gap-2 active:scale-95 transition-transform"
                  >
                    <Icons.Settings className="w-6 h-6" />
                    <span>系統管理</span>
                  </button>
                )}
              </div>
            </div>
            
            {/* 最近報價 */}
            {quotes.length > 0 && (
              <div className="glass card-shadow rounded-3xl p-5 animate-slide-up" style={{animationDelay: '0.4s'}}>
                <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
                  <Icons.History className="w-5 h-5 text-purple-600" />
                  最近報價
                </h2>
                
                <div className="space-y-3">
                  {quotes.slice(-3).reverse().map(quote => {
                    const date = new Date(quote.date);
                    const dateStr = `${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2,'0')}`;
                    
                    return (
                      <div 
                        key={quote.id}
                        onClick={() => {
                          loadQuote(quote.id);
                          setCurrentTab('quote');
                        }}
                        className="p-4 border-2 border-gray-200 rounded-xl hover:border-purple-400 hover:shadow-lg transition-all cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-bold text-gray-800">{quote.customer.name || '未命名客戶'}</div>
                            <div className="text-xs text-gray-500">{dateStr} • {quote.customer.tier}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-purple-600">${quote.total.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">{quote.products.length} 項</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {quotes.length > 3 && (
                  <button 
                    onClick={() => setCurrentTab('history')}
                    className="w-full mt-3 py-2 text-purple-600 font-bold hover:bg-purple-50 rounded-lg transition-colors"
                  >
                    查看全部 ({quotes.length})
                  </button>
                )}
              </div>
            )}
          </div>
        );
      };

      // ==================== 🔍 產品頁元件 ====================
      const ProductsPage = () => {
        const [searchLocal, setSearchLocal] = useState('');
        
        const localFilteredSpecs = filteredSpecs.filter(spec => {
          if (!searchLocal) return true;
          const s = searchLocal.toLowerCase();
          return (
            spec.name?.toLowerCase().includes(s) ||
            spec.id?.toLowerCase().includes(s) ||
            spec.specDetail?.toLowerCase().includes(s)
          );
        });
        
        return (
          <div className="pb-24 animate-fade-in">
            {/* 搜尋欄 */}
            <div className="glass border-b border-white/30 p-4 sticky top-0 z-40">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={searchLocal}
                      onChange={(e) => setSearchLocal(e.target.value)}
                      placeholder="搜尋產品名稱、品號、規格..."
                      className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-purple-500 outline-none transition-all"
                    />
                    <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    {searchLocal && (
                      <button 
                        onClick={() => setSearchLocal('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => setCurrentTab('quote')}
                    className="relative p-3 bg-purple-100 rounded-2xl text-purple-600"
                  >
                    <Icons.ShoppingCart className="w-6 h-6" />
                    {cart.length > 0 && (
                      <span className="absolute -top-1 -right-1 cart-badge text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {cart.length}
                      </span>
                    )}
                  </button>
                </div>
                
                <div className="text-sm text-gray-600 mt-2 flex items-center justify-between">
                  <span>找到 {localFilteredSpecs.length} 項產品</span>
                  {cart.length > 0 && (
                    <span className="text-purple-600 font-bold">購物車: {cart.length} 項</span>
                  )}
                </div>
              </div>
            </div>
            
            {/* 產品列表 */}
            <div className="max-w-2xl mx-auto p-4 space-y-4">
              {localFilteredSpecs.length === 0 ? (
                <div className="text-center py-20">
                  <Icons.Package className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <div className="text-gray-400 text-lg font-bold">找不到產品</div>
                  <div className="text-sm text-gray-400 mt-2">試試其他關鍵字</div>
                </div>
              ) : (
                localFilteredSpecs.map(spec => {
                  const stocks = data.inventory[spec.id] || [];
                  const total = stocks.reduce((s, x) => s + (x.stock || 0), 0);
                  const price = (spec.prices && spec.prices[custInfo.tier]) || 0;
                  
                  return (
                    <div 
                      key={spec.id}
                      className="glass card-shadow rounded-3xl p-5 animate-slide-up hover:shadow-lg transition-all"
                    >
                      {/* 產品信息 */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{spec.name}</h3>
                          <div className="text-sm text-gray-500 mb-1">品號：{spec.id}</div>
                          <div className="text-sm text-gray-600">{spec.specDetail}</div>
                        </div>
                      </div>
                      
                      {/* 價格區域 */}
                      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-4 mb-3">
                        <div className="grid grid-cols-2 gap-3">
                          {spec.prices && Object.entries(spec.prices).slice(0, 4).map(([tier, p]) => (
                            <div key={tier} className={`${tier === custInfo.tier ? 'bg-white shadow-sm rounded-xl p-2' : ''}`}>
                              <div className="text-xs text-gray-500">{tier}</div>
                              <div className={`text-lg font-bold ${tier === custInfo.tier ? 'text-purple-600' : 'text-gray-700'}`}>
                                ${p.toLocaleString()}
                              </div>
                            </div>
                          ))}
                        </div>
                        {spec.prices && Object.keys(spec.prices).length > 4 && (
                          <div className="text-xs text-gray-500 mt-2 text-center">
                            還有 {Object.keys(spec.prices).length - 4} 個價格等級
                          </div>
                        )}
                      </div>
                      
                      {/* 庫存信息 */}
                      {stocks.length > 0 && (
                        <div className="mb-3">
                          <div className="text-xs text-gray-500 mb-2">庫存狀況</div>
                          <div className="flex gap-2 flex-wrap">
                            {stocks.map((s, k) => (
                              <span key={k} className={`text-xs px-3 py-1.5 rounded-lg font-bold ${
                                s.stock > 20 ? 'badge-green' : s.stock > 0 ? 'badge-yellow' : 'badge-red'
                              }`}>
                                {s.warehouse}: {Math.floor(s.stock)}
                              </span>
                            ))}
                          </div>
                          <div className="text-sm text-gray-600 mt-2">
                            總庫存: <span className="font-bold text-purple-600">{Math.floor(total)}</span> 件
                          </div>
                        </div>
                      )}
                      
                      {/* 加入按鈕 */}
                      <button 
                        onClick={() => {
                          addProductFromDB(spec);
                          // 加入後提示
                          const btn = event.target.closest('button');
                          const originalText = btn.innerHTML;
                          btn.innerHTML = '✓ 已加入';
                          btn.classList.add('bg-green-500');
                          setTimeout(() => {
                            btn.innerHTML = originalText;
                            btn.classList.remove('bg-green-500');
                          }, 1000);
                        }}
                        className="w-full btn-gradient text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-all"
                      >
                        <Icons.ShoppingCart className="w-5 h-5" />
                        加入報價 (${price.toLocaleString()})
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        );
      };

      // ==================== 📚 歷史頁元件 ====================
      const HistoryPage = () => {
        const [searchQuery, setSearchQuery] = useState('');
        const [sortBy, setSortBy] = useState('date'); // 'date' | 'amount' | 'customer'
        
        let filteredQuotes = quotes.filter(q => {
          if (!searchQuery) return true;
          const s = searchQuery.toLowerCase();
          return (
            q.customer.name?.toLowerCase().includes(s) ||
            q.customer.phone?.includes(s) ||
            q.customer.mobile?.includes(s) ||
            q.customer.tier?.toLowerCase().includes(s)
          );
        });
        
        // 排序
        if (sortBy === 'date') {
          filteredQuotes = [...filteredQuotes].sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortBy === 'amount') {
          filteredQuotes = [...filteredQuotes].sort((a, b) => b.total - a.total);
        } else if (sortBy === 'customer') {
          filteredQuotes = [...filteredQuotes].sort((a, b) => (a.customer.name || '').localeCompare(b.customer.name || ''));
        }
        
        // 按日期分組
        const groupedByDate = {};
        filteredQuotes.forEach(quote => {
          const date = new Date(quote.date);
          const dateKey = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
          if (!groupedByDate[dateKey]) {
            groupedByDate[dateKey] = [];
          }
          groupedByDate[dateKey].push(quote);
        });
        
        return (
          <div className="pb-24 animate-fade-in">
            {/* 搜尋和排序欄 */}
            <div className="glass border-b border-white/30 p-4 sticky top-0 md:top-24 z-40">
              <div className="max-w-2xl mx-auto">
                <div className="relative mb-3">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="搜尋客戶、電話、價格等級..."
                    className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-purple-500 outline-none transition-all"
                  />
                  <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    共 <span className="font-bold text-purple-600">{filteredQuotes.length}</span> 筆報價
                  </div>
                  
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm px-3 py-1.5 rounded-lg border-2 border-gray-200 focus:border-purple-500 outline-none"
                  >
                    <option value="date">依日期</option>
                    <option value="amount">依金額</option>
                    <option value="customer">依客戶</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* 報價列表 */}
            <div className="max-w-2xl mx-auto p-4">
              {filteredQuotes.length === 0 ? (
                <div className="text-center py-20">
                  <Icons.History className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <div className="text-gray-400 text-lg font-bold">
                    {searchQuery ? '找不到符合的記錄' : '尚無歷史報價'}
                  </div>
                  {!searchQuery && (
                    <button
                      onClick={() => setCurrentTab('quote')}
                      className="mt-4 btn-gradient text-white px-6 py-3 rounded-xl font-bold"
                    >
                      立即建立報價
                    </button>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {Object.entries(groupedByDate).map(([dateKey, dayQuotes]) => {
                    const [year, month, day] = dateKey.split('-');
                    const isToday = dateKey === `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
                    const isYesterday = (() => {
                      const yesterday = new Date();
                      yesterday.setDate(yesterday.getDate() - 1);
                      return dateKey === `${yesterday.getFullYear()}-${yesterday.getMonth()+1}-${yesterday.getDate()}`;
                    })();
                    
                    return (
                      <div key={dateKey} className="animate-slide-up">
                        {/* 日期標題 */}
                        <div className="sticky top-20 md:top-44 glass rounded-2xl px-4 py-2 mb-3 text-sm font-bold text-gray-700 flex items-center gap-2">
                          <Icons.History className="w-4 h-4" />
                          {isToday ? '今天' : isYesterday ? '昨天' : `${month}月${day}日`}
                          <span className="text-gray-400 ml-auto">{dayQuotes.length} 筆</span>
                        </div>
                        
                        {/* 該日期的報價 */}
                        <div className="space-y-3">
                          {dayQuotes.map(quote => {
                            const date = new Date(quote.date);
                            const timeStr = `${date.getHours()}:${String(date.getMinutes()).padStart(2,'0')}`;
                            
                            return (
                              <div 
                                key={quote.id}
                                className="glass card-shadow rounded-3xl p-4"
                              >
                                <div className="flex justify-between items-start mb-3">
                                  <div className="flex-1">
                                    <div className="font-bold text-lg text-gray-800">{quote.customer.name || '未命名客戶'}</div>
                                    <div className="text-xs text-gray-500 mt-1">{timeStr} • {quote.customer.tier}</div>
                                    {quote.customer.phone && (
                                      <div className="text-xs text-gray-500 mt-1">📞 {quote.customer.phone}</div>
                                    )}
                                    {quote.customer.paymentMethod && (
                                      <div className="text-xs text-gray-500 mt-1">💳 {quote.customer.paymentMethod}</div>
                                    )}
                                  </div>
                                  <div className="text-right">
                                    <div className="text-2xl font-bold text-purple-600">${quote.total.toLocaleString()}</div>
                                    <div className="text-xs text-gray-500 mt-1">{quote.products.length} 項產品</div>
                                  </div>
                                </div>
                                
                                {/* 產品預覽（顯示前2項）*/}
                                {quote.products && quote.products.length > 0 && (
                                  <div className="bg-gray-50 rounded-xl p-3 mb-3 text-xs text-gray-600 space-y-1">
                                    {quote.products.slice(0, 2).map((p, i) => (
                                      <div key={i} className="flex justify-between">
                                        <span>{p.name}</span>
                                        <span className="font-bold">${(p.price * p.qty).toLocaleString()}</span>
                                      </div>
                                    ))}
                                    {quote.products.length > 2 && (
                                      <div className="text-center text-gray-400 pt-1">
                                        還有 {quote.products.length - 2} 項...
                                      </div>
                                    )}
                                  </div>
                                )}
                                
                                <div className="flex gap-2">
                                  <button 
                                    onClick={() => {
                                      loadQuote(quote.id);
                                      setCurrentTab('quote');
                                    }}
                                    className="flex-1 bg-purple-500 text-white py-2.5 rounded-xl font-bold hover:bg-purple-600 transition-colors flex items-center justify-center gap-2"
                                  >
                                    <Icons.FileText className="w-4 h-4" />
                                    載入編輯
                                  </button>
                                  <button 
                                    onClick={() => {
                                      if (confirm(`確定要刪除「${quote.customer.name || '未命名客戶'}」的報價嗎？`)) {
                                        deleteQuote(quote.id);
                                      }
                                    }}
                                    className="px-4 bg-red-100 text-red-600 py-2.5 rounded-xl font-bold hover:bg-red-200 transition-colors"
                                  >
                                    <Icons.Trash className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        );
      };

      // 登入頁
      if (page === 'login') {
        return (
          <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="glass card-shadow-lg p-8 rounded-3xl w-full max-w-sm animate-slide-up">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Icons.Package className="icon-svg-lg text-white" />
                </div>
                <h1 className="text-3xl font-black text-gray-800">八方環球</h1>
                <p className="text-sm text-gray-500 mt-2">ERP 報價系統 V14.0 🔐</p>
              </div>
              
              <input 
                type="password" 
                placeholder="請輸入密碼" 
                className="w-full p-4 border-2 border-gray-200 rounded-xl mb-4 text-center text-xl focus:border-purple-500 focus:outline-none transition-colors" 
                value={inputPwd} 
                onChange={e => setInputPwd(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && !loginLoading && handleLogin()}
                disabled={loginLoading}
              />
              
              <button 
                onClick={handleLogin} 
                disabled={loginLoading}
                className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all ${
                  loginLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:shadow-xl hover:scale-[1.02]'
                }`}
              >
                {loginLoading ? '登入中...' : '登入系統'}
              </button>
              
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-xs text-gray-400 mb-2">🔐 系統已啟用 Firebase 安全驗證</p>
                <p className="text-xs text-gray-400">測試密碼：Admin(8888) / Sales(1688)</p>
              </div>
            </div>
          </div>
        );
      }

      // 管理員頁 - V14.0 Tab 式設計
      if (page === 'admin') {
        // 取得設定頁 Tab（依角色）- 移除帳戶 Tab
        const getSettingsTabs = () => {
          if (role === 'admin') {
            return [
              { key: 'import', icon: '📦', label: '匯入' },
              { key: 'safety', icon: '⚠️', label: '安全庫存' },
              { key: 'price', icon: '💰', label: '改價' },
            ];
          }
          // Sales 只看到匯入和安全庫存
          return [
            { key: 'import', icon: '📦', label: '匯入' },
            { key: 'safety', icon: '⚠️', label: '安全庫存' },
          ];
        };
        
        // 取得所有產品列表（用於改價）- 從 Firebase 讀取
        const getAllProducts = () => {
          const products = [];
          Object.entries(data.products).forEach(([name, specs]) => {
            if (Array.isArray(specs)) {
              specs.forEach(spec => {
                const stocks = data.inventory[spec.id] || [];
                const totalStock = stocks.reduce((s, x) => s + (x.stock || 0), 0);
                products.push({
                  ...spec,
                  name: name,
                  displayName: spec.name || name,
                  totalStock: totalStock
                });
              });
            }
          });
          return products;
        };
        
        // 過濾改價產品
        const filteredPriceProducts = getAllProducts().filter(p => {
          if (!priceSearch) return true;
          const s = priceSearch.toLowerCase();
          return (
            (p.name && p.name.toLowerCase().includes(s)) ||
            (p.id && p.id.toLowerCase().includes(s)) ||
            (p.specDetail && p.specDetail.toLowerCase().includes(s))
          );
        });
        
        // 按分類過濾（用於對內發布）
        const getProductsByCategory = () => {
          const products = getAllProducts();
          if (publishCategory === 'all') return products;
          return products.filter(p => {
            const name = (p.name || '').toLowerCase();
            if (publishCategory === '蝦類') return name.includes('蝦');
            if (publishCategory === '魚類') return name.includes('魚') || name.includes('鮭') || name.includes('鯖') || name.includes('土魠');
            if (publishCategory === '螺類') return name.includes('螺');
            return true;
          });
        };
        
        // 價格等級順序：由低到高（可編輯的在上面）
        const priceTiersOrder = [
          { key: '業務底價', editable: true },
          { key: 'VIP價', editable: true },
          { key: '整件價', editable: true },
          { key: '生意價', editable: true },
          { key: '餐廳90%', editable: false },
          { key: '會員95%', editable: false },
          { key: '門市售價', editable: false },
        ];
        
        const categories = ['all', '蝦類', '魚類', '螺類'];
        const tabBtnStyle = (active) => `py-3 px-5 rounded-xl text-l4 font-bold transition-all ${active ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`;
        const subTabStyle = (active) => `py-2.5 px-4 rounded-lg text-l4 font-bold transition-all ${active ? 'bg-purple-100 text-purple-700' : 'text-gray-500 hover:bg-gray-50'}`;
        
        // 開啟價格編輯彈窗
        const openPriceEditor = (product, index) => {
          setEditingProduct({ ...product, _index: index });
          setEditingPrices({ ...(product.prices || {}) });
          setEditingStatus({
            isNew: product.isNew || productStatusEdits[product.id]?.isNew || false,
            isPromo: product.isPromo || productStatusEdits[product.id]?.isPromo || false
          });
        };
        
        const closePriceEditor = () => {
          setEditingProduct(null);
          setEditingPrices({});
          setEditingStatus({ isNew: false, isPromo: false });
        };
        
        // 儲存並切換到指定產品
        const saveAndGoToProduct = (nextIndex) => {
          if (!editingProduct) return;
          
          // 先儲存當前修改
          setEditedPrices(prev => ({
            ...prev,
            [editingProduct.id]: editingPrices
          }));
          setProductStatusEdits(prev => ({
            ...prev,
            [editingProduct.id]: editingStatus
          }));
          
          // 切換到下一個產品
          const products = filteredPriceProducts;
          if (nextIndex >= 0 && nextIndex < products.length) {
            const nextProduct = products[nextIndex];
            setEditingProduct({ ...nextProduct, _index: nextIndex });
            setEditingPrices({ ...(nextProduct.prices || {}) });
            setEditingStatus({
              isNew: nextProduct.isNew || productStatusEdits[nextProduct.id]?.isNew || false,
              isPromo: nextProduct.isPromo || productStatusEdits[nextProduct.id]?.isPromo || false
            });
          }
        };
        
        const savePriceEdit = () => {
          if (!editingProduct) return;
          
          // 儲存到編輯狀態
          setEditedPrices(prev => ({
            ...prev,
            [editingProduct.id]: editingPrices
          }));
          setProductStatusEdits(prev => ({
            ...prev,
            [editingProduct.id]: editingStatus
          }));
          
          // 顯示已儲存提示
          const btn = document.getElementById('savePriceBtn');
          if (btn) {
            btn.innerText = '✓ 已暫存';
            btn.classList.add('bg-green-500');
            setTimeout(() => {
              closePriceEditor();
            }, 300);
          } else {
            closePriceEditor();
          }
        };
        
        return (
          <>
          <div className="min-h-screen bg-gray-50">
            {/* 頂部導航 */}
            <div className="glass px-4 py-3 border-b border-white/30 flex items-center sticky top-0 z-20 card-shadow">
              <div className="flex-1">
                <h1 className="text-l1">{role === 'admin' ? '管理員設定' : '設定'}</h1>
                <span className={`text-l6 ${status.includes('已連線')?'text-green-600':''}`}>{status}</span>
              </div>
              <button onClick={() => { setPage('main'); setCurrentTab('quote'); }} className="bg-purple-500 text-white px-5 py-2.5 rounded-xl font-bold text-l3">返回報價</button>
            </div>
            
            {/* Tab 導航 */}
            <div className="glass border-b border-white/30 px-4 py-3 sticky top-14 z-10">
              <div className="flex gap-2 overflow-x-auto hide-scrollbar max-w-4xl mx-auto">
                {getSettingsTabs().map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setSettingsTab(tab.key)}
                    className={tabBtnStyle(settingsTab === tab.key)}
                  >
                    {tab.icon} {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 max-w-4xl mx-auto pb-8">
              
              {/* ==================== 匯入 Tab ==================== */}
              {settingsTab === 'import' && (
                <div className="animate-slide-up grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* 左欄：上傳區 */}
                  <div className="glass card-shadow p-5 rounded-2xl">
                    <h2 className="text-l2 mb-4 flex items-center gap-2">
                      <Icons.Upload />
                      資料匯入
                    </h2>
                    <div className="space-y-3">
                      <label className="block w-full p-4 border-2 border-dashed border-purple-300 bg-purple-50 text-center rounded-xl cursor-pointer hover:bg-purple-100 transition-colors">
                        <Icons.Package className="icon-svg mx-auto mb-1 text-purple-600" />
                        <span className="text-purple-700 font-bold block text-l3">📦 上傳庫存表</span>
                        <span className="text-l6 block mt-1">XLSX / XLS / CSV</span>
                        <input type="file" className="hidden" accept=".xlsx,.xls,.csv" onChange={e => handleUpload(e, 'stock')} />
                      </label>
                      
                      <label className="block w-full p-4 border-2 border-dashed border-green-300 bg-green-50 text-center rounded-xl cursor-pointer hover:bg-green-100 transition-colors">
                        <Icons.DollarSign className="icon-svg mx-auto mb-1 text-green-600" />
                        <span className="text-green-700 font-bold block text-l3">💰 上傳報價表</span>
                        <span className="text-l6 block mt-1">XLSX / XLS / CSV</span>
                        <input type="file" className="hidden" accept=".xlsx,.xls,.csv" onChange={e => handleUpload(e, 'quote')} />
                      </label>
                    </div>
                  </div>
                  
                  {/* 右欄：說明 */}
                  <div className="space-y-4">
                    <div className="glass card-shadow p-4 rounded-2xl">
                      <p className="text-l3 mb-2 flex items-center gap-2">⚠️ 檔案格式要求</p>
                      <div className="space-y-2 text-l5">
                        <div>
                          <strong className="text-purple-600">庫存表：</strong>
                          <span>品號、品名、規格、庫別、庫存數量</span>
                        </div>
                        <div>
                          <strong className="text-green-600">報價表：</strong>
                          <span>品號、品名、規格、各價格等級</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass card-shadow p-4 rounded-2xl">
                      <p className="text-l3 mb-2 flex items-center gap-2">💡 上傳提示</p>
                      <ul className="space-y-1 text-l5">
                        <li>• 選擇檔案後自動開始處理</li>
                        <li>• 成功後會彈出確認對話框</li>
                        <li>• 確認後才會上傳到 Firebase</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {/* ==================== 安全庫存 Tab ==================== */}
              {settingsTab === 'safety' && (
                <div className="animate-slide-up grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* 左欄：設定與操作 */}
                  <div className="glass card-shadow p-5 rounded-2xl">
                    <h2 className="text-l2 mb-4 flex items-center gap-2">
                      📦 安全庫存設定
                    </h2>
                    
                    <div className="mb-4 p-3 bg-orange-50 border-2 border-orange-200 rounded-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-l3">預設安全庫存量</p>
                          <p className="text-l6">未個別設定使用此值</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-3xl font-bold text-orange-600">{DEFAULT_SAFETY_STOCK}</span>
                          <span className="text-l6">件</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <button 
                        onClick={() => {
                          localStorage.removeItem('lastLowStockAlert');
                          const items = checkLowStock(true);
                          if (items.length > 0) {
                            setLowStockItems(items);
                            setShowLowStockAlert(true);
                          } else {
                            alert('✅ 太棒了！目前沒有低庫存的產品');
                          }
                        }}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 rounded-xl text-l3 flex items-center justify-center gap-2"
                      >
                        ⚠️ 立即檢查低庫存
                      </button>
                      <button 
                        onClick={() => setShowSafetyStockModal(true)}
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-3 rounded-xl text-l3 flex items-center justify-center gap-2"
                      >
                        ⚙️ 個別產品設定
                      </button>
                    </div>
                    
                    <div className="mt-4 text-l6">
                      <p>📍 監控：{MAIN_WAREHOUSES.slice(0, 3).join('、')}...</p>
                      <p>📊 已設定：{Object.keys(data.safetyStock || {}).length} 項</p>
                    </div>
                  </div>
                  
                  {/* 右欄：系統資訊 */}
                  <div className="glass card-shadow p-5 rounded-2xl">
                    <h2 className="text-l2 mb-4">系統資訊</h2>
                    <div className="space-y-2 text-l4">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-l5">資料庫狀態</span>
                        <span className={status.includes('已連線') ? 'text-green-600 font-bold' : ''}>{status}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-l5">產品分類數</span>
                        <span className="font-bold">{Object.keys(data.products).length} 項</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-l5">價格等級</span>
                        <span>{data.tiers.length} 個</span>
                      </div>
                      {data.meta.stockDate && (
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-l5">庫存更新</span>
                          <span className="text-l6">{data.meta.stockDate}</span>
                        </div>
                      )}
                      {data.meta.quoteDate && (
                        <div className="flex justify-between py-2">
                          <span className="text-l5">報價更新</span>
                          <span className="text-l6">{data.meta.quoteDate}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {/* ==================== 改價 Tab (Admin Only) ==================== */}
              {settingsTab === 'price' && role === 'admin' && (
                <div className="animate-slide-up">
                  {/* 子 Tab：編輯價格 / 對內發布 */}
                  <div className="glass card-shadow p-2 rounded-2xl flex gap-1 mb-4">
                    <button onClick={() => setPriceSubTab('edit')} className={`flex-1 ${subTabStyle(priceSubTab === 'edit')}`}>
                      ✏️ 編輯價格
                    </button>
                    <button onClick={() => setPriceSubTab('publish')} className={`flex-1 ${subTabStyle(priceSubTab === 'publish')}`}>
                      📢 對內發布
                    </button>
                  </div>
                  
                  {/* 編輯價格 - 兩欄式 */}
                  {priceSubTab === 'edit' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 左欄：搜尋與統計 */}
                      <div className="space-y-4">
                        <div className="glass card-shadow p-4 rounded-2xl">
                          <div className="relative mb-3">
                            <input 
                              type="text" 
                              placeholder="🔍 搜尋產品名稱、品號..." 
                              value={priceSearch}
                              onChange={e => setPriceSearch(e.target.value)}
                              className="w-full pl-4 pr-10 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none text-l4"
                            />
                            {priceSearch && (
                              <button onClick={() => setPriceSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">✕</button>
                            )}
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="bg-gray-100 rounded-lg p-3">
                              <div className="text-l3 text-gray-700">{getAllProducts().length}</div>
                              <div className="text-l6">總產品</div>
                            </div>
                            <div className="bg-purple-50 rounded-lg p-3">
                              <div className="text-l3 text-purple-600">{Object.keys(editedPrices).length}</div>
                              <div className="text-l6">已修改</div>
                            </div>
                            <div className="bg-amber-50 rounded-lg p-3">
                              <div className="text-l3 text-amber-600">{Object.keys(productStatusEdits).length}</div>
                              <div className="text-l6">狀態</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* 儲存按鈕 */}
                        {Object.keys(editedPrices).length > 0 && (
                          <button 
                            onClick={() => {
                              if (!confirm(`確定要儲存 ${Object.keys(editedPrices).length} 項價格修改嗎？`)) return;
                              
                              const newProducts = { ...data.products };
                              Object.entries(editedPrices).forEach(([pid, prices]) => {
                                Object.entries(newProducts).forEach(([name, specs]) => {
                                  if (Array.isArray(specs)) {
                                    specs.forEach((spec, idx) => {
                                      if (spec.id === pid) {
                                        newProducts[name][idx].prices = { ...spec.prices, ...prices };
                                        if (productStatusEdits[pid]) {
                                          if (productStatusEdits[pid].isNew) newProducts[name][idx].isNew = true;
                                          if (productStatusEdits[pid].isPromo) newProducts[name][idx].isPromo = true;
                                        }
                                      }
                                    });
                                  }
                                });
                              });
                              
                              uploadDB({ 
                                productDB: newProducts,
                                dbMeta: { 
                                  ...(data.meta || {}), 
                                  quoteDate: new Date().toLocaleString('zh-TW'),
                                  lastPriceUpdate: new Date().toISOString()
                                }
                              });
                              
                              setEditedPrices({});
                              setProductStatusEdits({});
                            }}
                            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-l3 shadow-lg"
                          >
                            💾 儲存 {Object.keys(editedPrices).length} 項變更到 Firebase
                          </button>
                        )}
                      </div>
                      
                      {/* 右欄：產品列表 */}
                      <div className="glass card-shadow rounded-2xl divide-y divide-gray-100 max-h-[65vh] overflow-y-auto">
                        {filteredPriceProducts.length === 0 ? (
                          <div className="p-8 text-center">
                            <div className="text-5xl mb-2">📦</div>
                            {Object.keys(data.products).length === 0 ? (
                              <>
                                <div className="text-l3 text-gray-600 mb-2">尚無產品資料</div>
                                <div className="text-l6">請上傳報價表</div>
                              </>
                            ) : (
                              <div className="text-l4 text-gray-500">找不到「{priceSearch}」</div>
                            )}
                          </div>
                        ) : filteredPriceProducts.slice(0, 100).map((product, index) => {
                          const hasEdit = editedPrices[product.id] || productStatusEdits[product.id];
                          const statusEdit = productStatusEdits[product.id] || {};
                          
                          return (
                            <div 
                              key={product.id}
                              onClick={() => openPriceEditor(product, index)}
                              className={`px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-purple-50 transition-colors active:bg-purple-100 ${
                                hasEdit ? 'bg-purple-50/50 border-l-4 border-purple-500' : ''
                              }`}
                            >
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-l4 font-bold text-gray-800">{product.displayName}</span>
                                  {(product.isNew || statusEdit.isNew) && <span className="px-2 py-0.5 bg-amber-500 text-white text-sm rounded">新</span>}
                                  {(product.isPromo || statusEdit.isPromo) && <span className="px-2 py-0.5 bg-green-500 text-white text-sm rounded">促</span>}
                                  {hasEdit && <span className="px-2 py-0.5 bg-purple-500 text-white text-sm rounded">改</span>}
                                </div>
                                <div className="text-l5">{product.specDetail}</div>
                                <div className="text-l6 flex items-center gap-2">
                                  <span>庫存:{Math.floor(product.totalStock)}</span>
                                  <span className="text-purple-600 font-bold">整件:${product.prices?.['整件價'] || 0}</span>
                                </div>
                              </div>
                              <div className="text-purple-400 text-xl">›</div>
                            </div>
                          );
                        })}
                        {filteredPriceProducts.length > 100 && (
                          <div className="p-3 text-center text-l6">
                            顯示前 100 筆
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* 對內發布 - 兩欄式 */}
                  {priceSubTab === 'publish' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 左欄：設定選項 */}
                      <div className="space-y-4">
                        <div className="glass card-shadow p-5 rounded-2xl">
                          <h3 className="text-l2 mb-4 flex items-center gap-2">📢 發布設定</h3>
                          
                          {/* 產品分類 */}
                          <div className="mb-4">
                            <label className="text-l5 mb-2 block font-bold">產品分類</label>
                            <div className="flex gap-2 flex-wrap">
                              {categories.map(cat => (
                                <button 
                                  key={cat}
                                  onClick={() => setPublishCategory(cat)}
                                  className={`px-4 py-2.5 rounded-xl text-l4 font-bold transition-all ${
                                    publishCategory === cat 
                                      ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg' 
                                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                  }`}
                                >
                                  {cat === 'all' ? '全部' : cat}
                                </button>
                              ))}
                            </div>
                          </div>
                          
                          {/* 日期設定 */}
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div>
                              <label className="text-l5 mb-2 block font-bold">生效日</label>
                              <input type="date" defaultValue={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none text-l4" />
                            </div>
                            <div>
                              <label className="text-l5 mb-2 block font-bold">截止日</label>
                              <input type="date" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none text-l4" />
                            </div>
                          </div>
                          
                          {/* 備註 */}
                          <div className="mb-4">
                            <label className="text-l5 mb-2 block font-bold">備註說明</label>
                            <input type="text" placeholder="例如：原物料成本調整、季節限定..." className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none text-l4" />
                          </div>
                          
                          {/* 圖例說明 */}
                          <div className="p-3 bg-gray-50 rounded-xl mb-4">
                            <p className="text-l6 mb-2">狀態標籤說明</p>
                            <div className="flex gap-3 text-l5">
                              <span className="flex items-center gap-1.5">
                                <span className="w-4 h-4 bg-amber-500 rounded flex items-center justify-center text-white text-xs">新</span>
                                <span>新貨到</span>
                              </span>
                              <span className="flex items-center gap-1.5">
                                <span className="w-4 h-4 bg-green-500 rounded flex items-center justify-center text-white text-xs">促</span>
                                <span>促銷中</span>
                              </span>
                            </div>
                          </div>
                          
                          {/* 匯出按鈕 */}
                          <div className="grid grid-cols-2 gap-3">
                            <button 
                              onClick={() => {
                                const element = document.getElementById('priceTableCapture');
                                if (!element) return alert('找不到報價表');
                                const btn = event.target;
                                const originalText = btn.innerText;
                                btn.innerText = '⏳ 產生中...';
                                btn.disabled = true;
                                html2canvas(element, { scale: 2, backgroundColor: '#ffffff', useCORS: true }).then(canvas => {
                                  const link = document.createElement('a');
                                  link.download = `八方環球報價表_${new Date().toLocaleDateString('zh-TW').replace(/\//g, '-')}.png`;
                                  link.href = canvas.toDataURL('image/png');
                                  link.click();
                                  btn.innerText = originalText;
                                  btn.disabled = false;
                                }).catch(err => {
                                  alert('失敗：' + err.message);
                                  btn.innerText = originalText;
                                  btn.disabled = false;
                                });
                              }}
                              className="py-4 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 text-l3 transition-colors"
                            >📥 下載圖片</button>
                            <button 
                              onClick={() => {
                                const products = getProductsByCategory();
                                let text = '📊 八方環球報價表\n';
                                text += '📅 ' + new Date().toLocaleDateString('zh-TW') + '\n';
                                text += '━━━━━━━━━━━━\n\n';
                                products.slice(0, 20).forEach(p => {
                                  const isNew = p.isNew || productStatusEdits[p.id]?.isNew;
                                  const isPromo = p.isPromo || productStatusEdits[p.id]?.isPromo;
                                  text += `${isNew ? '🆕 ' : ''}${isPromo ? '🏷️ ' : ''}${p.displayName}\n`;
                                  text += `📦 ${p.specDetail}\n`;
                                  text += `💰 整件:$${p.prices?.['整件價']||'-'} VIP:$${p.prices?.['VIP價']||'-'}\n\n`;
                                });
                                if (products.length > 20) text += `⋯ 還有 ${products.length - 20} 項\n`;
                                window.open('https://line.me/R/msg/text/?' + encodeURIComponent(text), '_blank');
                              }}
                              className="py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-l3 shadow-lg transition-colors"
                            >💬 LINE 分享</button>
                          </div>
                        </div>
                      </div>
                      
                      {/* 右欄：報價表預覽 */}
                      <div className="glass card-shadow p-4 rounded-2xl overflow-x-auto">
                        <div id="priceTableCapture" className="bg-white rounded-xl overflow-hidden shadow-lg min-w-[520px]">
                          {/* 報價表頭部 */}
                          <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h2 className="text-2xl font-black tracking-wide">八方環球</h2>
                                <p className="text-purple-200 text-sm mt-1">內部報價表 · 業務專用</p>
                              </div>
                              <div className="text-right">
                                <div className="bg-white/20 rounded-lg px-3 py-1.5 inline-block">
                                  <span className="text-xs text-purple-200">發布日期</span>
                                  <div className="font-bold">{new Date().toLocaleDateString('zh-TW')}</div>
                                </div>
                              </div>
                            </div>
                            {/* 分類標籤 */}
                            <div className="mt-3 flex items-center gap-2">
                              <span className="bg-white/20 text-white text-xs px-2 py-1 rounded">
                                📦 {publishCategory === 'all' ? '全部產品' : publishCategory}
                              </span>
                              <span className="bg-amber-400/80 text-white text-xs px-2 py-1 rounded">
                                共 {getProductsByCategory().length} 項
                              </span>
                            </div>
                          </div>
                          
                          {/* 表格區域 */}
                          <div className="p-3">
                            <table className="w-full">
                              <thead>
                                <tr className="bg-gray-100 text-gray-600">
                                  <th className="p-2.5 text-left font-bold rounded-l-lg" style={{fontSize: '14px'}}>品名</th>
                                  <th className="p-2.5 text-left font-bold" style={{fontSize: '14px'}}>規格</th>
                                  <th className="p-2.5 text-center font-bold" style={{fontSize: '14px'}}>整件價</th>
                                  <th className="p-2.5 text-center font-bold" style={{fontSize: '14px'}}>VIP價</th>
                                  <th className="p-2.5 text-center font-bold" style={{fontSize: '14px'}}>底價</th>
                                  <th className="p-2.5 text-center font-bold rounded-r-lg" style={{fontSize: '14px'}}>狀態</th>
                                </tr>
                              </thead>
                              <tbody>
                                {getProductsByCategory().length === 0 ? (
                                  <tr><td colSpan="6" className="p-8 text-center text-gray-400">
                                    <div className="text-3xl mb-2">📦</div>
                                    <div>此分類沒有產品</div>
                                  </td></tr>
                                ) : getProductsByCategory().slice(0, 12).map((p, i) => {
                                  const statusEdit = productStatusEdits[p.id] || {};
                                  const isNew = p.isNew || statusEdit.isNew;
                                  const isPromo = p.isPromo || statusEdit.isPromo;
                                  return (
                                    <tr key={p.id} className={`border-b border-gray-100 hover:bg-purple-50/50 ${
                                      isNew ? 'bg-amber-50' : isPromo ? 'bg-green-50' : ''
                                    }`}>
                                      <td className="p-2.5" style={{fontSize: '14px'}}>
                                        <div className="font-bold text-gray-800 truncate max-w-[120px]">{p.displayName}</div>
                                      </td>
                                      <td className="p-2.5" style={{fontSize: '13px'}}>
                                        <div className="text-gray-500 truncate max-w-[100px]">{p.specDetail}</div>
                                      </td>
                                      <td className="p-2.5 text-center">
                                        <span className="font-bold text-purple-600" style={{fontSize: '15px'}}>${p.prices?.['整件價'] || '-'}</span>
                                      </td>
                                      <td className="p-2.5 text-center" style={{fontSize: '14px'}}>
                                        <span className="text-gray-700">${p.prices?.['VIP價'] || '-'}</span>
                                      </td>
                                      <td className="p-2.5 text-center" style={{fontSize: '14px'}}>
                                        <span className="text-gray-500">${p.prices?.['業務底價'] || '-'}</span>
                                      </td>
                                      <td className="p-2.5 text-center">
                                        {isNew && <span className="inline-block bg-amber-500 text-white text-xs px-1.5 py-0.5 rounded mr-1">新</span>}
                                        {isPromo && <span className="inline-block bg-green-500 text-white text-xs px-1.5 py-0.5 rounded">促</span>}
                                        {!isNew && !isPromo && <span className="text-gray-300">-</span>}
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                            
                            {/* 更多項目提示 */}
                            {getProductsByCategory().length > 12 && (
                              <div className="text-center text-gray-400 text-sm py-2 border-t border-gray-100 mt-2">
                                ⋯ 還有 {getProductsByCategory().length - 12} 項產品
                              </div>
                            )}
                          </div>
                          
                          {/* 報價表底部 */}
                          <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                            <div className="flex justify-between items-center text-xs text-gray-500">
                              <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1">
                                  <span className="w-3 h-3 bg-amber-500 rounded"></span> 新品
                                </span>
                                <span className="flex items-center gap-1">
                                  <span className="w-3 h-3 bg-green-500 rounded"></span> 促銷
                                </span>
                              </div>
                              <div className="text-right">
                                <span>八方環球水產 · 業務專線</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
            </div>
          </div>
          
          {/* 價格編輯彈窗 - 一頁內完整顯示 */}
          {editingProduct && (
            <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-2" onClick={closePriceEditor}>
              <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                
                {/* 標題列 */}
                <div className="px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white flex justify-between items-center">
                  <div className="flex-1 min-w-0">
                    <div className="text-l3 truncate">{editingProduct.displayName}</div>
                    <div className="text-l6 text-white/70 truncate">{editingProduct.specDetail} · 庫存:{Math.floor(editingProduct.totalStock)}</div>
                  </div>
                  <div className="text-l6 text-white/80 ml-2">{editingProduct._index + 1}/{filteredPriceProducts.length}</div>
                </div>
                
                {/* 內容區 */}
                <div className="p-4">
                  {/* 狀態切換 */}
                  <div className="flex gap-2 mb-3">
                    <button 
                      onClick={() => setEditingStatus(prev => ({...prev, isNew: !prev.isNew}))}
                      className={`flex-1 py-2.5 rounded-lg text-l4 font-bold transition-all ${
                        editingStatus.isNew ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-500'
                      }`}
                    >🆕 新貨到</button>
                    <button 
                      onClick={() => setEditingStatus(prev => ({...prev, isPromo: !prev.isPromo}))}
                      className={`flex-1 py-2.5 rounded-lg text-l4 font-bold transition-all ${
                        editingStatus.isPromo ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500'
                      }`}
                    >🏷️ 促銷</button>
                  </div>
                  
                  {/* 價格編輯 - 1x4 垂直排列 */}
                  <div className="space-y-2 mb-3">
                    {[
                      { key: '業務底價', label: '底價', id: 'price-0' },
                      { key: 'VIP價', label: 'VIP', id: 'price-1' },
                      { key: '整件價', label: '整件', id: 'price-2' },
                      { key: '生意價', label: '生意', id: 'price-3' },
                    ].map((tier, idx, arr) => {
                      const currentPrice = editingPrices[tier.key] ?? (editingProduct.prices?.[tier.key] || 0);
                      return (
                        <div key={tier.key} className="flex items-center gap-3 bg-gray-50 rounded-xl px-3 py-2">
                          <label className="text-l4 text-gray-500 w-14 shrink-0 font-bold">{tier.label}</label>
                          <div className="flex-1 relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-l4">$</span>
                            <input 
                              id={tier.id}
                              type="number"
                              inputMode="numeric"
                              value={currentPrice}
                              onFocus={e => e.target.select()}
                              onChange={e => {
                                const val = parseFloat(e.target.value) || 0;
                                setEditingPrices(prev => ({...prev, [tier.key]: val}));
                              }}
                              onKeyDown={e => {
                                if (e.key === 'Enter') {
                                  e.preventDefault();
                                  if (idx < arr.length - 1) {
                                    const nextInput = document.getElementById(`price-${idx + 1}`);
                                    if (nextInput) {
                                      nextInput.focus();
                                      nextInput.select();
                                    }
                                  } else {
                                    if (editingProduct._index < filteredPriceProducts.length - 1) {
                                      saveAndGoToProduct(editingProduct._index + 1);
                                      setTimeout(() => {
                                        const firstInput = document.getElementById('price-0');
                                        if (firstInput) {
                                          firstInput.focus();
                                          firstInput.select();
                                        }
                                      }, 100);
                                    }
                                  }
                                }
                              }}
                              className="w-full pl-8 pr-3 py-3 rounded-lg bg-white border-2 border-gray-200 focus:border-purple-500 text-right text-l3 outline-none"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* 唯讀價格 */}
                  <div className="flex justify-between text-l6 px-1 mb-2">
                    <span>門市: ${editingProduct.prices?.['門市售價'] || 0}</span>
                    <span>會員: ${editingProduct.prices?.['會員95%'] || 0}</span>
                    <span>餐廳: ${editingProduct.prices?.['餐廳90%'] || 0}</span>
                  </div>
                </div>
                
                {/* 底部導航 */}
                <div className="px-4 pb-4 space-y-2">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => {
                        saveAndGoToProduct(editingProduct._index - 1);
                        setTimeout(() => {
                          const firstInput = document.getElementById('price-0');
                          if (firstInput) {
                            firstInput.focus();
                            firstInput.select();
                          }
                        }, 100);
                      }}
                      disabled={editingProduct._index <= 0}
                      className={`flex-1 py-4 rounded-xl text-l3 transition-colors ${
                        editingProduct._index <= 0 
                          ? 'bg-gray-100 text-gray-300' 
                          : 'bg-gray-200 text-gray-600 active:bg-gray-300'
                      }`}
                    >← 上一個</button>
                    <button 
                      onClick={() => {
                        saveAndGoToProduct(editingProduct._index + 1);
                        setTimeout(() => {
                          const firstInput = document.getElementById('price-0');
                          if (firstInput) {
                            firstInput.focus();
                            firstInput.select();
                          }
                        }, 100);
                      }}
                      disabled={editingProduct._index >= filteredPriceProducts.length - 1}
                      className={`flex-1 py-4 rounded-xl text-l3 transition-colors ${
                        editingProduct._index >= filteredPriceProducts.length - 1 
                          ? 'bg-gray-100 text-gray-300' 
                          : 'bg-blue-500 text-white active:bg-blue-600'
                      }`}
                    >下一個 →</button>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={closePriceEditor}
                      className="flex-1 py-3 rounded-xl bg-gray-100 text-gray-500 text-l3 active:bg-gray-200"
                    >✕ 關閉</button>
                    <button 
                      id="savePriceBtn"
                      onClick={savePriceEdit}
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-l3 active:opacity-90"
                    >✓ 儲存</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* 全局彈窗 */}
          <GlobalModals />
          </>
        );
      }

      // 🏠 首頁顯示
      if (page === 'main' && currentTab === 'home') {
        const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
        return (
          <>
            {/* 電腦版頂部導航 */}
            {!isMobile && (
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-4 shadow-lg fixed top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Icons.Package className="icon-svg-lg" />
                    <div>
                      <h1 className="text-xl font-black">八方環球 ERP</h1>
                      <p className="text-xs opacity-90">{status}</p>
                    </div>
                  </div>
                  
                  {/* 功能按鈕區 */}
                  <div className="flex items-center gap-2">
                    {/* 首頁 */}
                    <button 
                      onClick={() => setCurrentTab('home')}
                      className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors ${
                        currentTab === 'home' 
                          ? 'bg-white text-indigo-600' 
                          : 'bg-white/20 hover:bg-white/30'
                      }`}>
                      <Icons.Home className="w-5 h-5" />
                      首頁
                    </button>
                    
                    {/* 預覽 */}
                    <button 
                      onClick={printQuote}
                      className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors"
                    >
                      <Icons.Eye className="w-5 h-5" />
                      預覽
                    </button>
                    
                    {/* 儲存 */}
                    <button 
                      onClick={saveQuote}
                      className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors relative"
                    >
                      <Icons.Save className="w-5 h-5" />
                      儲存
                      {cart.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                          {cart.length}
                        </span>
                      )}
                    </button>
                    
                    {/* 歷史報價 */}
                    <button 
                      onClick={() => setCurrentTab('history')}
                      className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors relative ${
                        currentTab === 'history' 
                          ? 'bg-white text-indigo-600' 
                          : 'bg-white/20 hover:bg-white/30'
                      }`}
                    >
                      <Icons.History className="w-5 h-5" />
                      歷史
                      {quotes.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                          {quotes.length}
                        </span>
                      )}
                    </button>
                    
                    {/* LINE */}
                    <button 
                      onClick={shareToLine}
                      className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors"
                    >
                      <Icons.Send className="w-5 h-5" />
                      LINE
                    </button>
                    
                    {/* 總金額 */}
                    <div className="bg-white/20 px-4 py-2 rounded-lg border-2 border-white/30">
                      <div className="text-xs opacity-90">總金額</div>
                      <div className="text-lg font-black">${cart.reduce((sum, item) => sum + calculateSubtotal(item), 0).toLocaleString()}</div>
                    </div>
                    
                    {/* 分隔線 */}
                    <div className="w-px h-8 bg-white/30 mx-2"></div>
                    
                    
                    {/* 🆕 低庫存警報鈴鐺 */}
                    <button 
                      onClick={() => {
                        const items = checkLowStock();
                        setLowStockItems(items);
                        setShowLowStockAlert(true);
                      }}
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-lg relative transition-colors"
                      title="低庫存警報"
                    >
                      <Icons.Bell className="w-5 h-5" />
                      {lowStockItems.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 animate-pulse">
                          {lowStockItems.length > 99 ? '99+' : lowStockItems.length}
                        </span>
                      )}
                    </button>
                    {/* 管理 */}
                    {role === 'admin' && (
                      <button onClick={() => setPage('admin')} className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                        <Icons.Settings className="icon-svg-sm" />
                        管理
                      </button>
                    )}
                    
                    {/* 登出 */}
                    <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-bold">
                      登出
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* 手機版頂部導航 */}
            {isMobile && (
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-3 shadow-lg sticky top-0 z-50">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Icons.Package className="icon-svg" />
                    <div>
                      <h1 className="text-base font-black">八方環球 ERP V14.0</h1>
                      <p className="text-xs opacity-90">{status}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {/* 🆕 低庫存警報鈴鐺（手機版） */}
                    <button 
                      onClick={() => {
                        const items = checkLowStock();
                        setLowStockItems(items);
                        setShowLowStockAlert(true);
                      }}
                      className="bg-white/20 p-2 rounded-lg hover:bg-white/30 active:bg-white/40 transition-colors relative"
                    >
                      <Icons.Bell className="icon-svg-sm" />
                      {lowStockItems.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full min-w-[16px] h-[16px] flex items-center justify-center px-0.5 animate-pulse" style={{fontSize: '10px'}}>
                          {lowStockItems.length > 99 ? '99+' : lowStockItems.length}
                        </span>
                      )}
                    </button>
                    {role === 'admin' && (
                      <button onClick={() => setPage('admin')} className="bg-white/20 p-2 rounded-lg hover:bg-white/30 active:bg-white/40 transition-colors">
                        <Icons.Settings className="icon-svg-sm" />
                      </button>
                    )}
                    <button onClick={handleLogout} className="bg-red-500 px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-red-600 active:bg-red-700 transition-colors">
                      登出
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            <div className={!isMobile ? 'pt-24' : ''}>
              <HomePage />
            </div>
            {/* 底部導航 */}
            <BottomNav />
            {/* 全局彈窗 */}
            <GlobalModals />
          </>
        );
      }

      // 📚 歷史頁顯示
      if (page === 'main' && currentTab === 'history') {
        const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
        return (
          <>
            {/* 電腦版頂部導航 */}
            {!isMobile && (
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-4 shadow-lg fixed top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Icons.Package className="icon-svg-lg" />
                    <div>
                      <h1 className="text-xl font-black">八方環球 ERP</h1>
                      <p className="text-xs opacity-90">{status}</p>
                    </div>
                  </div>
                  
                  {/* 功能按鈕區 */}
                  <div className="flex items-center gap-2">
                    {/* 首頁 */}
                    <button 
                      onClick={() => setCurrentTab('home')}
                      className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors ${
                        currentTab === 'home' 
                          ? 'bg-white text-indigo-600' 
                          : 'bg-white/20 hover:bg-white/30'
                      }`}>
                      <Icons.Home className="w-5 h-5" />
                      首頁
                    </button>
                    
                    {/* 預覽 */}
                    <button 
                      onClick={printQuote}
                      className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors"
                    >
                      <Icons.Eye className="w-5 h-5" />
                      預覽
                    </button>
                    
                    {/* 儲存 */}
                    <button 
                      onClick={saveQuote}
                      className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors relative"
                    >
                      <Icons.Save className="w-5 h-5" />
                      儲存
                      {cart.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                          {cart.length}
                        </span>
                      )}
                    </button>
                    
                    {/* 歷史報價 */}
                    <button 
                      onClick={() => setCurrentTab('history')}
                      className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors relative ${
                        currentTab === 'history' 
                          ? 'bg-white text-indigo-600' 
                          : 'bg-white/20 hover:bg-white/30'
                      }`}
                    >
                      <Icons.History className="w-5 h-5" />
                      歷史
                      {quotes.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                          {quotes.length}
                        </span>
                      )}
                    </button>
                    
                    {/* LINE */}
                    <button 
                      onClick={shareToLine}
                      className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors"
                    >
                      <Icons.Send className="w-5 h-5" />
                      LINE
                    </button>
                    
                    {/* 總金額 */}
                    <div className="bg-white/20 px-4 py-2 rounded-lg border-2 border-white/30">
                      <div className="text-xs opacity-90">總金額</div>
                      <div className="text-lg font-black">${cart.reduce((sum, item) => sum + calculateSubtotal(item), 0).toLocaleString()}</div>
                    </div>
                    
                    {/* 分隔線 */}
                    <div className="w-px h-8 bg-white/30 mx-2"></div>
                    
                    {/* 🆕 低庫存警報鈴鐺 */}
                    <button 
                      onClick={() => {
                        const items = checkLowStock();
                        setLowStockItems(items);
                        setShowLowStockAlert(true);
                      }}
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-lg relative transition-colors"
                      title="低庫存警報"
                    >
                      <Icons.Bell className="w-5 h-5" />
                      {lowStockItems.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 animate-pulse">
                          {lowStockItems.length > 99 ? '99+' : lowStockItems.length}
                        </span>
                      )}
                    </button>
                    
                    {/* 管理 */}
                    {role === 'admin' && (
                      <button onClick={() => setPage('admin')} className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                        <Icons.Settings className="icon-svg-sm" />
                        管理
                      </button>
                    )}
                    
                    {/* 登出 */}
                    <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-bold">
                      登出
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* 手機版頂部導航 */}
            {isMobile && (
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-3 shadow-lg sticky top-0 z-50">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Icons.Package className="icon-svg" />
                    <div>
                      <h1 className="text-base font-black">八方環球 ERP V14.0</h1>
                      <p className="text-xs opacity-90">{status}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {/* 🆕 低庫存警報鈴鐺（手機版） */}
                    <button 
                      onClick={() => {
                        const items = checkLowStock();
                        setLowStockItems(items);
                        setShowLowStockAlert(true);
                      }}
                      className="bg-white/20 p-2 rounded-lg hover:bg-white/30 active:bg-white/40 transition-colors relative"
                    >
                      <Icons.Bell className="icon-svg-sm" />
                      {lowStockItems.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full min-w-[16px] h-[16px] flex items-center justify-center px-0.5 animate-pulse" style={{fontSize: '10px'}}>
                          {lowStockItems.length > 99 ? '99+' : lowStockItems.length}
                        </span>
                      )}
                    </button>
                    {role === 'admin' && (
                      <button onClick={() => setPage('admin')} className="bg-white/20 p-2 rounded-lg hover:bg-white/30 active:bg-white/40 transition-colors">
                        <Icons.Settings className="icon-svg-sm" />
                      </button>
                    )}
                    <button onClick={handleLogout} className="bg-red-500 px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-red-600 active:bg-red-700 transition-colors">
                      登出
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            <div className={!isMobile ? 'pt-24' : ''}>
              <HistoryPage />
            </div>
            {/* 底部導航 */}
            <BottomNav />
            {/* 全局彈窗 */}
            <GlobalModals />
          </>
        );
      }

      // 報價頁 - 只在 main 頁面且 currentTab 是 quote 時顯示
      if (page !== 'main') {
        return null; // 其他頁面（admin, login）已在上面處理
      }
      
      // 如果到這裡，表示 page === 'main' 且 currentTab === 'quote'
      const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
      const total = calculateTotal();

      return (
        <div className={`min-h-screen bg-gray-50 ${isMobile ? 'pb-24' : ''}`}>{/* 手機版加上 pb-24 避免被底部導航遮擋 */}
          {/* Header */}
          {!isMobile && (
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-4 shadow-lg fixed top-0 left-0 right-0 z-50">
              <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Icons.Package className="icon-svg-lg" />
                  <div>
                    <h1 className="text-xl font-black">八方環球 ERP</h1>
                    <p className="text-xs opacity-90">{status}</p>
                  </div>
                </div>
                
                {/* 功能按鈕區 */}
                <div className="flex items-center gap-2">
                  {/* 首頁 */}
                  <button 
                    onClick={() => setCurrentTab('home')}
                    className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors ${
                      currentTab === 'home' 
                        ? 'bg-white text-indigo-600' 
                        : 'bg-white/20 hover:bg-white/30'
                    }`}>
                    <Icons.Home className="w-5 h-5" />
                    首頁
                  </button>
                  
                  {/* 預覽 */}
                  <button 
                    onClick={printQuote}
                    className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors"
                  >
                    <Icons.Eye className="w-5 h-5" />
                    預覽
                  </button>
                  
                  {/* 儲存 */}
                  <button 
                    onClick={saveQuote}
                    className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors relative"
                  >
                    <Icons.Save className="w-5 h-5" />
                    儲存
                    {cart.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {cart.length}
                      </span>
                    )}
                  </button>
                  
                  {/* 歷史報價 */}
                  <button 
                    onClick={() => setCurrentTab('history')}
                    className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors relative ${
                      currentTab === 'history' 
                        ? 'bg-white text-indigo-600' 
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                  >
                    <Icons.History className="w-5 h-5" />
                    歷史
                    {quotes.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {quotes.length}
                      </span>
                    )}
                  </button>
                  
                  {/* LINE */}
                  <button 
                    onClick={shareToLine}
                    className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors"
                  >
                    <Icons.Send className="w-5 h-5" />
                    LINE
                  </button>
                  
                  {/* 總金額 */}
                  <div className="bg-white/20 px-4 py-2 rounded-lg border-2 border-white/30">
                    <div className="text-xs opacity-90">總金額</div>
                    <div className="text-lg font-black">${cart.reduce((sum, item) => sum + calculateSubtotal(item), 0).toLocaleString()}</div>
                  </div>
                  
                  {/* 分隔線 */}
                  <div className="w-px h-8 bg-white/30 mx-2"></div>
                  
                  {/* 🆕 低庫存警報鈴鐺 */}
                  <button 
                    onClick={() => {
                      const items = checkLowStock();
                      setLowStockItems(items);
                      setShowLowStockAlert(true);
                    }}
                    className="bg-white/20 hover:bg-white/30 p-2 rounded-lg relative transition-colors"
                    title="低庫存警報"
                  >
                    <Icons.Bell className="w-5 h-5" />
                    {lowStockItems.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 animate-pulse">
                        {lowStockItems.length > 99 ? '99+' : lowStockItems.length}
                      </span>
                    )}
                  </button>
                  
                  {/* 管理 */}
                  {role === 'admin' && (
                    <button onClick={() => setPage('admin')} className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                      <Icons.Settings className="icon-svg-sm" />
                      管理
                    </button>
                  )}
                  
                  {/* 登出 */}
                  <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-bold">
                    登出
                  </button>
                </div>
              </div>
            </div>
          )}

          {isMobile && (
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-3 shadow-lg sticky top-0 z-50">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Icons.Package className="icon-svg" />
                  <div>
                    <h1 className="text-base font-black">八方環球 ERP V14.0</h1>
                    <p className="text-xs opacity-90">{status}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {/* 🆕 低庫存警報鈴鐺（手機版） */}
                  <button 
                    onClick={() => {
                      const items = checkLowStock();
                      setLowStockItems(items);
                      setShowLowStockAlert(true);
                    }}
                    className="bg-white/20 p-2 rounded-lg hover:bg-white/30 active:bg-white/40 transition-colors relative"
                  >
                    <Icons.Bell className="icon-svg-sm" />
                    {lowStockItems.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full min-w-[16px] h-[16px] flex items-center justify-center px-0.5 animate-pulse" style={{fontSize: '10px'}}>
                        {lowStockItems.length > 99 ? '99+' : lowStockItems.length}
                      </span>
                    )}
                  </button>
                  {role === 'admin' && (
                    <button onClick={() => setPage('admin')} className="bg-white/20 p-2 rounded-lg hover:bg-white/30 active:bg-white/40 transition-colors">
                      <Icons.Settings className="icon-svg-sm" />
                    </button>
                  )}
                  <button onClick={handleLogout} className="bg-red-500 px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-red-600 active:bg-red-700 transition-colors">
                    登出
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 桌面版佈局 - 添加頂部間距 */}
          {!isMobile && (
            <div className="max-w-7xl mx-auto p-6 pt-24">{/* 添加 pt-24 避免被固定頂欄遮擋 */}
              <div className="grid grid-cols-[280px_1fr] gap-6">
                {/* 左側欄 */}
                <div className="bg-gradient-to-b from-purple-500 to-indigo-600 text-white rounded-2xl p-6 shadow-xl h-fit sticky top-24">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Icons.User />
                    客戶資訊
                  </h2>
                  
                  <div className="space-y-3 mb-6">
                    <input type="text" placeholder="客戶名稱" className="w-full p-2.5 rounded-lg text-gray-800 text-sm" 
                      value={custInfo.name} onChange={e => setCustInfo({...custInfo, name: e.target.value})} />
                    <select className="w-full p-2.5 rounded-lg text-gray-800 text-sm font-bold bg-yellow-100"
                      value={custInfo.tier} onChange={e => setCustInfo({...custInfo, tier: e.target.value})}>
                      <option value="門市售價">門市售價</option>
                      <option value="會員95%">會員95%</option>
                      <option value="餐廳90%">餐廳90%</option>
                      <option value="生意價">生意價</option>
                      <option value="整件價">整件價</option>
                      <option value="VIP價">VIP價</option>
                      <option value="業務底價">業務底價</option>
                    </select>
                    <select className="w-full p-2.5 rounded-lg text-gray-800 text-sm font-bold bg-green-100"
                      value={custInfo.paymentMethod} onChange={e => setCustInfo({...custInfo, paymentMethod: e.target.value})}>
                      <option value="月結30天">月結30天</option>
                      <option value="月結60天">月結60天</option>
                      <option value="現金">現金</option>
                      <option value="貨到付款">貨到付款</option>
                      <option value="匯款">匯款</option>
                      <option value="支票">支票</option>
                    </select>
                    <input type="tel" placeholder="電話" className="w-full p-2.5 rounded-lg text-gray-800 text-sm"
                      value={custInfo.phone} onChange={e => setCustInfo({...custInfo, phone: e.target.value})} />
                    <input type="tel" placeholder="手機" className="w-full p-2.5 rounded-lg text-gray-800 text-sm"
                      value={custInfo.mobile} onChange={e => setCustInfo({...custInfo, mobile: e.target.value})} />
                    <input type="text" placeholder="地址" className="w-full p-2.5 rounded-lg text-gray-800 text-sm"
                      value={custInfo.address} onChange={e => setCustInfo({...custInfo, address: e.target.value})} />
                    <input type="date" className="w-full p-2.5 rounded-lg text-gray-800 text-sm"
                      value={custInfo.date} onChange={e => setCustInfo({...custInfo, date: e.target.value})} />
                  </div>

                  <div className="space-y-2 mb-6 pt-6 border-t border-white/20">
                    <button 
                      onClick={() => {
                        const choice = window.confirm('請選擇預覽方式：\n\n確定 = 完整報價單（含金額）\n取消 = 純產品清單（含單價）');
                        if (choice) {
                          printQuote();
                        } else {
                          printQuoteNoPrice();
                        }
                      }}
                      className="w-full bg-white/20 hover:bg-white/30 p-3 rounded-lg font-bold flex items-center gap-2 transition-colors">
                      <Icons.Eye className="icon-svg-sm" />
                      📄 預覽報價單
                    </button>
                  </div>
                </div>

                {/* 右側產品區 */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-black text-gray-800">產品清單</h2>
                    <button onClick={() => setShowProductSearch(true)} className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                      <Icons.Plus />
                      新增產品
                    </button>
                  </div>

                  <div className="space-y-2">
                    {cart.map((item, index) => (
                      <div key={item.cartId} className="bg-white border-2 border-gray-200 rounded-xl p-4 flex items-center gap-4 hover:border-purple-400 hover:shadow-lg transition-all" style={{minHeight: '120px'}}>
                        <div className="w-11 h-11 bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">
                          {index + 1}
                        </div>

                        <div className="w-28 h-28 bg-gray-100 rounded-xl flex items-center justify-center border-2 border-gray-200 cursor-pointer hover:border-purple-400 transition-colors flex-shrink-0 overflow-hidden"
                          onClick={() => uploadImage(item.cartId)}>
                          {item.image ? (
                            <img src={item.image} alt="產品" className="w-full h-full object-cover" />
                          ) : (
                            <Icons.Camera className="icon-svg-lg text-gray-400" />
                          )}
                        </div>

                        <div className="flex-1 flex flex-col gap-2 min-w-0">
                          <div className="font-bold text-lg text-gray-800 cursor-pointer hover:text-purple-600 transition-colors" onClick={() => reSelectProduct(item.cartId)} title="點擊重新選擇產品">{item.name || '未命名產品'}</div>
                          <div className="text-lg text-purple-600 font-semibold cursor-pointer hover:text-blue-800 transition-colors" onClick={() => { setSearch(item.name || ''); setShowProductSearch(true); }} title="點擊搜尋同品名產品">{item.specDetail || '無規格說明'}</div>
                          
                          <div className="flex items-center gap-2 flex-wrap">
                            <div className="flex items-center gap-1">
                              {(() => {
                                const packInfo = extractPackInfo(item.specDetail);
                                if (packInfo) {
                                  return (
                                    <>
                                      <span className="text-xs text-gray-600 font-semibold">件數</span>
                                      <input type="text" inputMode="decimal" pattern="[0-9]*" className="w-20 px-2 py-1.5 border-2 border-gray-200 rounded-lg text-center font-bold focus:border-purple-500 outline-none"
                                        value={item.qty} onChange={e => updateCart(item.cartId, 'qty', parseFloat(e.target.value) || 0)} />
                                      <span className="text-sm font-bold text-gray-600">件</span>
                                    </>
                                  );
                                } else {
                                  return (
                                    <>
                                      <span className="text-xs text-gray-600 font-semibold">數量</span>
                                      <input type="text" inputMode="decimal" pattern="[0-9]*" className="w-20 px-2 py-1.5 border-2 border-gray-200 rounded-lg text-center font-bold focus:border-purple-500 outline-none"
                                        value={item.qty} onChange={e => updateCart(item.cartId, 'qty', parseFloat(e.target.value) || 0)} />
                                      <span className="text-sm font-bold text-gray-600">{item.smallUnit}</span>
                                    </>
                                  );
                                }
                              })()}
                            </div>

                            <div className="flex items-center gap-1">
                              <span className="text-xs text-gray-600 font-semibold">單價 $</span>
                              <input type="text" inputMode="decimal" pattern="[0-9]*" className="w-20 px-2 py-1.5 border-2 border-gray-200 rounded-lg text-center font-bold focus:border-purple-500 outline-none"
                                value={item.price} onChange={e => updateCart(item.cartId, 'price', parseFloat(e.target.value) || 0)} />
                              <button onClick={() => showPriceSelector(item.cartId)} className="bg-purple-500 text-white px-3 py-1.5 rounded-lg font-black text-sm flex items-center justify-center hover:shadow-lg transition-all min-w-[44px]">
                                {(() => {
                                  const tier = item.selectedTier || custInfo.tier;
                                  if (tier.includes('門市')) return '門';
                                  if (tier.includes('會員')) return '會';
                                  if (tier.includes('餐廳')) return '餐';
                                  if (tier.includes('生意')) return '生';
                                  if (tier.includes('整件')) return '整';
                                  if (tier.includes('VIP')) return 'VIP';
                                  if (tier.includes('底價') || tier.includes('業務')) return '底';
                                  return tier.charAt(0);
                                })()}
                              </button>
                            </div>

                            <div className="flex flex-col items-end ml-auto">
                              <div className="text-xs text-gray-500">小計</div>
                              <div className="text-xl font-bold text-indigo-600">
                                ${calculateSubtotal(item).toLocaleString()}
                              </div>
                              {(() => {
                                const displayInfo = getPackDisplayInfo(item);
                                if (displayInfo) {
                                  return (
                                    <div className="text-xs text-gray-600 mt-0.5">
                                      {displayInfo.caseCount}件 × {displayInfo.packQty}{displayInfo.packUnit} = {displayInfo.totalUnits}{displayInfo.packUnit}
                                    </div>
                                  );
                                }
                                return null;
                              })()}
                            </div>

                            <input type="text" placeholder="備註..." className="flex-1 px-3 py-1.5 border-2 border-yellow-300 bg-yellow-50 rounded-lg text-sm focus:border-yellow-500 outline-none min-w-[150px]"
                              value={item.note} onChange={e => updateCart(item.cartId, 'note', e.target.value)} />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5 flex-shrink-0">
                          <button onClick={() => uploadImage(item.cartId)} className="w-10 h-10 bg-gray-100 border-2 border-gray-300 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                            <Icons.Camera className="icon-svg-sm" />
                          </button>
                          <button onClick={() => copyCartItem(item.cartId)} className="w-10 h-10 bg-blue-100 border-2 border-purple-300 rounded-lg hover:bg-blue-200 transition-colors flex items-center justify-center">
                            <Icons.Copy className="icon-svg-sm" />
                          </button>
                          <button onClick={() => deleteFromCart(item.cartId)} className="w-10 h-10 bg-red-100 border-2 border-red-300 rounded-lg hover:bg-red-200 transition-colors flex items-center justify-center">
                            <Icons.Trash className="icon-svg-sm" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 手機版佈局 */}
          {isMobile && (
            <div className="pb-32">
              <div className="bg-white m-4 rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <label className="text-xs text-gray-500 mb-1.5 block">客戶名稱</label>
                    <input 
                      type="text" 
                      placeholder="點擊輸入客戶名稱" 
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-base text-gray-900 font-medium"
                      value={custInfo.name} 
                      onChange={e => setCustInfo({...custInfo, name: e.target.value})} 
                    />
                  </div>
                  <button 
                    onClick={() => setShowCustomerDetail(true)}
                    className="mt-6 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-700 font-medium flex items-center gap-1.5 hover:bg-gray-100 active:bg-gray-200 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                    詳細
                  </button>
                </div>
              </div>

              <div className="px-4">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-base font-bold text-gray-800 flex items-center gap-2">
                    <Icons.Package className="icon-svg-sm" />
                    產品清單
                  </h2>
                </div>

                <div className="space-y-3">
                  {cart.map((item, index) => (
                    <div key={item.cartId} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                      {/* 第一列：序號 + 操作按鈕 */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex gap-1.5">
                          <button onClick={() => uploadImage(item.cartId)} className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-700">
                            <Icons.Camera className="w-4 h-4" />
                          </button>
                          <button onClick={() => copyCartItem(item.cartId)} className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-700">
                            <Icons.Copy className="w-4 h-4" />
                          </button>
                          <button onClick={() => deleteFromCart(item.cartId)} className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-700">
                            <Icons.Trash className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      {/* 第二列：品名 */}
                      <div className="font-bold text-lg text-gray-900 mb-1 cursor-pointer active:text-indigo-600" onClick={() => reSelectProduct(item.cartId)}>{item.name || '未命名產品'}</div>
                      
                      {/* 第三列：規格 */}
                      <div className="text-lg text-gray-500 mb-3 cursor-pointer active:text-indigo-600" onClick={() => { setSearch(item.name || ''); setShowProductSearch(true); }}>{item.specDetail || '無規格說明'}</div>

                      {/* 第四列：件數、單價、等級 */}
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div>
                          <label className="text-xs font-medium text-gray-500 block mb-1.5">
                            {extractPackInfo(item.specDetail) ? '件數' : '數量'}
                          </label>
                          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                            <button 
                              type="button"
                              onMouseDown={e => e.preventDefault()}
                              onClick={() => updateCart(item.cartId, 'qty', Math.max(0, (item.qty || 1) - 1))} 
                              className="w-8 h-10 bg-gray-50 flex items-center justify-center text-gray-500 text-lg border-r border-gray-300 active:bg-gray-200 select-none"
                            >−</button>
                            <input 
                              type="text" 
                              inputMode="decimal"
                              pattern="[0-9]*"
                              className="w-12 h-10 text-center font-bold text-base text-gray-900 outline-none border-none bg-transparent"
                              value={item.qty} 
                              onChange={e => updateCart(item.cartId, 'qty', parseFloat(e.target.value) || 0)}
                              onFocus={e => e.target.select()}
                            />
                            <button 
                              type="button"
                              onMouseDown={e => e.preventDefault()}
                              onClick={() => updateCart(item.cartId, 'qty', (item.qty || 0) + 1)} 
                              className="w-8 h-10 bg-gray-50 flex items-center justify-center text-gray-500 text-lg border-l border-gray-300 active:bg-gray-200 select-none"
                            >+</button>
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-medium text-gray-500 block mb-1.5">單價</label>
                          <div className="relative">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
                            <input 
                              type="text" 
                              inputMode="decimal"
                              pattern="[0-9]*"
                              className="w-full h-10 pl-6 pr-2 border border-gray-300 rounded-lg text-center font-bold text-base text-gray-900 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
                              value={item.price} 
                              onChange={e => updateCart(item.cartId, 'price', parseFloat(e.target.value) || 0)}
                              onFocus={e => e.target.select()}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-medium text-gray-500 block mb-1.5">等級</label>
                          <button onClick={() => showPriceSelector(item.cartId)} className="w-full h-10 px-2 bg-white border border-gray-300 rounded-lg font-semibold text-xs text-gray-700 flex items-center justify-between">
                            <span>{(() => {
                              const tier = item.selectedTier || custInfo.tier;
                              if (tier.includes('門市')) return '門市';
                              if (tier.includes('會員')) return '會員';
                              if (tier.includes('餐廳')) return '餐廳';
                              if (tier.includes('生意')) return '生意';
                              if (tier.includes('整件')) return '整件';
                              if (tier.includes('VIP')) return 'VIP';
                              if (tier.includes('底價') || tier.includes('業務')) return '底價';
                              return tier;
                            })()}</span>
                            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <input type="text" placeholder="備註" className="flex-1 px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 bg-gray-50 focus:bg-white focus:border-gray-300 outline-none min-w-0"
                          value={item.note} onChange={e => updateCart(item.cartId, 'note', e.target.value)} />
                        <div className="text-right flex-shrink-0">
                          <div className="text-xs text-gray-500 mb-0.5">小計</div>
                          <div className="text-xl font-bold text-indigo-600 whitespace-nowrap">${calculateSubtotal(item).toLocaleString()}</div>
                          {(() => {
                            const displayInfo = getPackDisplayInfo(item);
                            if (displayInfo) {
                              return (
                                <div className="text-xs text-gray-600 mt-0.5 whitespace-nowrap">
                                  {displayInfo.caseCount}件×{displayInfo.packQty}={displayInfo.totalUnits}
                                </div>
                              );
                            }
                            return null;
                          })()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button onClick={() => setShowProductSearch(true)} className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-2xl font-bold text-base shadow-lg mt-4 flex items-center justify-center gap-2">
                  <Icons.Plus />
                  新增產品
                </button>
              </div>

              <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
                <div className="px-4 py-3 max-w-2xl mx-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-gray-500">總金額</span>
                      <span className="text-2xl font-bold text-indigo-600">${cart.reduce((sum, item) => sum + calculateSubtotal(item), 0).toLocaleString()}</span>
                    </div>

                    <button onClick={() => setShowProductSearch(true)} className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold active:bg-indigo-700 shadow-md">
                      <Icons.Plus className="w-5 h-5" />
                      新增產品
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 客戶詳細資訊彈窗 */}
          {showCustomerDetail && (
            <div className="fixed inset-0 bg-black/50 z-[100] flex items-end md:items-center justify-center" onClick={() => setShowCustomerDetail(false)}>
              <div className="bg-white w-full md:max-w-lg md:rounded-2xl rounded-t-2xl max-h-[85vh] overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                <div className="px-5 py-4 border-b flex justify-between items-center bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    客戶詳細資料
                  </h3>
                  <button onClick={() => setShowCustomerDetail(false)} className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-xl font-bold">×</button>
                </div>

                <div className="p-5 overflow-y-auto" style={{maxHeight: 'calc(85vh - 120px)'}}>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">客戶名稱</label>
                      <input 
                        type="text" 
                        placeholder="請輸入客戶名稱" 
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-gray-900"
                        value={custInfo.name} 
                        onChange={e => setCustInfo({...custInfo, name: e.target.value})} 
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">價格等級</label>
                      <select 
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-gray-900"
                        value={custInfo.tier} 
                        onChange={e => setCustInfo({...custInfo, tier: e.target.value})}
                      >
                        <option value="門市售價">門市售價</option>
                        <option value="會員95%">會員95%</option>
                        <option value="餐廳90%">餐廳90%</option>
                        <option value="生意價">生意價</option>
                        <option value="整件價">整件價</option>
                        <option value="VIP價">VIP價</option>
                        <option value="業務底價">業務底價</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">付款方式</label>
                      <select 
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-gray-900"
                        value={custInfo.paymentMethod} 
                        onChange={e => setCustInfo({...custInfo, paymentMethod: e.target.value})}
                      >
                        <option value="月結30天">月結30天</option>
                        <option value="月結60天">月結60天</option>
                        <option value="現金">現金</option>
                        <option value="貨到付款">貨到付款</option>
                        <option value="匯款">匯款</option>
                        <option value="支票">支票</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1.5 block">電話</label>
                        <input 
                          type="tel" 
                          placeholder="電話" 
                          className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-gray-900"
                          value={custInfo.phone} 
                          onChange={e => setCustInfo({...custInfo, phone: e.target.value})} 
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1.5 block">手機</label>
                        <input 
                          type="tel" 
                          placeholder="手機" 
                          className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-gray-900"
                          value={custInfo.mobile} 
                          onChange={e => setCustInfo({...custInfo, mobile: e.target.value})} 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">地址</label>
                      <input 
                        type="text" 
                        placeholder="地址" 
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-gray-900"
                        value={custInfo.address} 
                        onChange={e => setCustInfo({...custInfo, address: e.target.value})} 
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">日期</label>
                      <input 
                        type="date" 
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-gray-900"
                        value={custInfo.date} 
                        onChange={e => setCustInfo({...custInfo, date: e.target.value})} 
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t bg-gray-50">
                  <button 
                    onClick={() => setShowCustomerDetail(false)}
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 active:bg-indigo-800 transition-colors"
                  >
                    完成
                  </button>
                </div>
              </div>
            </div>
          )}


          {/* 產品搜尋彈窗 */}
          {showProductSearch && (
            <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
              <div className="bg-white w-full max-w-2xl rounded-2xl flex flex-col overflow-hidden shadow-2xl" style={{maxHeight: '80vh'}}>
                <div className="px-6 py-4 border-b flex gap-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icons.Search className="icon-svg" />
                      <h3 className="font-bold text-lg">
                        {reSelectCartId ? '重新選擇產品' : '新增產品'}
                      </h3>
                    </div>
                    <div className="relative">
                      <input 
                        autoFocus 
                        placeholder="搜尋產品名稱..." 
                        className="w-full px-4 py-2.5 rounded-lg text-gray-800 outline-none" 
                        value={search} 
                        onChange={e => setSearch(e.target.value)} 
                      />
                    </div>
                  </div>
                  <button onClick={() => { setShowProductSearch(false); setSearch(''); setReSelectCartId(null); }} className="bg-white/20 hover:bg-white/30 px-6 rounded-lg font-bold text-lg h-fit">✕</button>
                </div>

                <div className="flex-1 overflow-auto p-4">
                  {!data.products || Object.keys(data.products).length === 0 ? (
                    <div className="text-center text-gray-400 py-20">
                      <Icons.Package className="icon-svg-lg mx-auto mb-4 opacity-50" />
                      <p>尚無產品資料</p>
                      <p className="text-xs mt-2">請先上傳產品資料</p>
                    </div>
                  ) : filteredProds.length === 0 ? (
                    <div className="text-center text-gray-400 py-20">
                      <Icons.Search className="icon-svg-lg mx-auto mb-4 opacity-50" />
                      <p>無符合商品</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredProds.slice(0, 50).map(key => {
                        const group = data.products[key];
                        if (!group || !Array.isArray(group)) return null;
                        return (
                          <div key={key} className="border-2 border-gray-200 rounded-xl overflow-hidden">
                            <div className="bg-gray-100 px-4 py-2 font-bold text-gray-800">{key}</div>
                            {group.map((spec, i) => {
                              if (!spec) return null;
                              const stocks = data.inventory[spec.id] || [];
                              const total = stocks.reduce((s, x) => s + (x.stock || 0), 0);
                              const price = (spec.prices && spec.prices[custInfo.tier]) || 0;
                              
                              // 檢查此產品是否已在購物車中
                              const isInCart = cart.some(item => item.id === spec.id && item.specDetail === spec.specDetail);
                              
                              return (
                                <div 
                                  key={i} 
                                  className="p-4 border-b border-gray-200 last:border-b-0 hover:bg-indigo-50 transition-colors"
                                >
                                  <div className="flex justify-between items-start mb-2">
                                    <div className="flex-1">
                                      <div className="font-bold text-gray-900 text-base">{spec.specDetail || '(無規格說明)'}</div>
                                      <div className="text-xs text-gray-500 mt-1">品號: {spec.id || 'N/A'}</div>
                                    </div>
                                    <div className="text-right flex-shrink-0 ml-4">
                                      <div className="font-black text-2xl text-indigo-600">${price}</div>
                                      <span className={`inline-block text-xs px-2 py-1 rounded mt-1 ${total > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-500'}`}>
                                        庫存: {Math.floor(total)}
                                      </span>
                                    </div>
                                  </div>
                                  
                                  {stocks.length > 0 && (
                                    <div className="flex gap-2 flex-wrap mt-2 mb-3">
                                      {stocks.map((s, k) => (
                                        <span key={k} className="text-xs bg-gray-100 px-2 py-1 rounded border border-gray-300">
                                          {s.warehouse}: {Math.floor(s.stock)}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                  
                                  <button
                                    onClick={() => addProductFromDB(spec)}
                                    className={`w-full mt-2 py-2.5 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2 ${
                                      isInCart 
                                        ? 'bg-green-600 hover:bg-green-700 active:bg-green-800 text-white' 
                                        : 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white'
                                    }`}
                                  >
                                    {isInCart ? (
                                      <>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        已加入
                                      </>
                                    ) : (
                                      <>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"></path>
                                        </svg>
                                        加入清單
                                      </>
                                    )}
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* 價格選擇彈窗 */}
          {showPriceModal && currentPriceItem && (
            <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4" onClick={() => setShowPriceModal(false)}>
              <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                <div className="px-6 py-4 border-b flex justify-between items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Icons.DollarSign />
                    選擇價格
                  </h3>
                  <button onClick={() => setShowPriceModal(false)} className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-xl font-bold">✕</button>
                </div>

                <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)]">
                  {(() => {
                    const item = cart.find(i => i.cartId === currentPriceItem);
                    if (!item || !item.prices) return null;
                    
                    // 固定的7個價格等級順序（由高到低）
                    const priceOrder = [
                      '門市售價',
                      '會員95%',
                      '餐廳90%',
                      '生意價',
                      '整件價',
                      'VIP價',
                      '業務底價'
                    ];
                    
                    return (
                      <div className="space-y-3">
                        {priceOrder.map((tier) => {
                          const price = item.prices[tier];
                          // 只有當價格是 undefined 或 null 時才不顯示，0 要顯示
                          if (price === undefined || price === null) return null;
                          
                          return (
                            <button 
                              key={tier}
                              onClick={() => selectPrice(tier, price)}
                              className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-colors text-left"
                            >
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="text-sm text-gray-500">{tier}</div>
                                  <div className="text-2xl font-bold text-purple-600">${price.toLocaleString()}</div>
                                </div>
                                {(item.selectedTier || custInfo.tier) === tier && (
                                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-bold">目前等級</span>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          )}

          {/* 歷史報價彈窗 */}
          {showHistory && (
            <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4" onClick={() => setShowHistory(false)}>
              <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                <div className="px-6 py-4 border-b flex justify-between items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Icons.Clock />
                    歷史報價
                  </h3>
                  <button onClick={() => setShowHistory(false)} className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-xl font-bold">✕</button>
                </div>

                <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)]">
                  {quotes.length === 0 ? (
                    <p className="text-center text-gray-400 py-10">尚無歷史報價</p>
                  ) : (
                    <div className="space-y-2">
                      {[...quotes].reverse().map(quote => {
                        const date = new Date(quote.date);
                        const dateStr = `${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2,'0')}`;
                        return (
                          <div key={quote.id} className="p-4 border-2 border-gray-200 rounded-xl">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <div className="font-bold">{quote.customer.name || '未命名客戶'}</div>
                                <div className="text-xs text-gray-500">{dateStr} • {quote.customer.tier}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-xl font-bold text-purple-600">${quote.total.toLocaleString()}</div>
                                <div className="text-xs text-gray-500">{quote.products.length} 項</div>
                              </div>
                            </div>
                            <div className="flex gap-2 mt-3">
                              <button onClick={() => loadQuote(quote.id)} className="flex-1 bg-purple-500 text-white py-2 rounded-lg font-bold">載入</button>
                              <button onClick={() => deleteQuote(quote.id)} className="px-4 bg-red-100 text-red-600 py-2 rounded-lg font-bold">刪除</button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* 底部導航 */}
          <BottomNav />
          {/* 全局彈窗 */}
          <GlobalModals />
        </div>
      );
    };

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
