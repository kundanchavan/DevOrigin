/// <reference types="vite/client" />
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  ShoppingBag, 
  CreditCard, 
  BarChart3, 
  Settings, 
  Image as ImageIcon,
  Type,
  Plus,
  Trash2,
  Edit2,
  ExternalLink,
  Droplets,
  Lock,
  Loader2,
  Check,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  getProducts, 
  createProduct, 
  updateProduct, 
  deleteProduct,
  uploadImage
} from '@/services/sanityService';
import { Product } from '@/types';
import { isSanityConfigured } from '@/lib/sanity';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Edit Form State
  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(null);
  const [featuresText, setFeaturesText] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      loadProducts();
    }
  }, [isAuthenticated]);

  const loadProducts = async () => {
    setIsRefreshing(true);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err: any) {
      console.error(err);
      if (!isSanityConfigured) {
        // Already handled by local fallback in service
      }
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, use a proper Auth system. For this demo, we'll use a simple password check.
    // Ideally, VITE_ADMIN_PASSWORD would be in .env
    if (password === (import.meta.env.VITE_ADMIN_PASSWORD || 'admin123')) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    
    setIsLoading(true);
    try {
      const isMockId = editingProduct.id?.startsWith('p') && editingProduct.id.length <= 3;
      
      if (editingProduct.id && !isMockId) {
        await updateProduct(editingProduct.id, editingProduct);
      } else {
        // If it was a mock product, we create a new one in Sanity instead of updating the mock id
        const { id, ...productToCreate } = editingProduct;
        await createProduct(productToCreate);
      }
      setIsEditing(false);
      setEditingProduct(null);
      await loadProducts();
    } catch (err: any) {
      console.error('Error saving product:', err);
      const errorMessage = err.message || 'Unknown error';
      alert(`Failed to save product: ${errorMessage}\n\nCheck if VITE_SANITY_PROJECT_ID and VITE_SANITY_WRITE_TOKEN are correctly added in Settings.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    try {
      await deleteProduct(id);
      await loadProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-900 p-8 rounded-[2.5rem] border border-white/5 w-full max-w-md shadow-2xl"
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-600/20">
              <Lock size={32} />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white text-center mb-2">Admin Portal</h1>
          <p className="text-slate-400 text-center mb-8 text-sm">Enter password to access the CMS</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Secret Key</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="••••••••"
              />
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
            >
              Access Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const stats = [
    { label: 'Total Revenue', value: '$124,500', icon: CreditCard, trend: '+12.5%' },
    { label: 'Active Catalog', value: products.length.toString(), icon: ShoppingBag, trend: 'Dynamic' },
    { label: 'Customers', value: '1,840', icon: Users, trend: '+240' },
    { label: 'Purification Rate', value: '98.2%', icon: BarChart3, trend: '+0.4%' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-[1600px] mx-auto px-6 pb-24">
        <div className="flex gap-12">
          {/* Sidebar Nav */}
          <aside className="w-64 shrink-0 hidden lg:block">
            <div className="bg-white rounded-[2rem] border border-slate-100 p-6 sticky top-32">
              <div className="flex items-center gap-3 mb-10 px-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <Droplets size={20} />
                </div>
                <span className="font-bold tracking-tighter">Dew Origin CRM</span>
              </div>

              <nav className="space-y-2">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
                  { id: 'products', label: 'Products', icon: ShoppingBag },
                  { id: 'content', label: 'Content Editor', icon: Type },
                  { id: 'media', label: 'Media Library', icon: ImageIcon },
                  { id: 'settings', label: 'Settings', icon: Settings },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left",
                      activeTab === item.id 
                        ? "bg-slate-900 text-white shadow-lg" 
                        : "text-slate-500 hover:bg-slate-100"
                    )}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-grow">
            <header className="flex justify-between items-end mb-12">
              <div>
                <h1 className="text-4xl font-bold capitalize">{activeTab}</h1>
                <p className="text-slate-500">Welcome back, Administrator.</p>
              </div>
              <div className="flex gap-4">
                {!isSanityConfigured && (
                  <div className="bg-amber-50 text-amber-600 px-4 py-2 rounded-xl text-xs font-bold border border-amber-100 flex items-center gap-2">
                    <Settings className="animate-spin" size={14} />
                    SANITY.IO NOT CONFIGURED
                  </div>
                )}
                {isRefreshing && <Loader2 className="animate-spin text-slate-400 self-center" size={20} />}
                  <button 
                    disabled={isRefreshing}
                    onClick={() => {
                      setEditingProduct({
                        name: '',
                        price: undefined,
                        description: '',
                        category: '',
                        label: '',
                        tagline: '',
                        bgColor: 'bg-[#eef5ff]',
                        isNewLaunch: false,
                        image: '',
                        features: [],
                        specs: { stages: 0, precision: '-', flowRate: '-' }
                      });
                      setFeaturesText('');
                      setIsEditing(true);
                    }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all disabled:opacity-50"
                  >
                    <Plus size={20} /> Add Product
                  </button>
                </div>
              </header>

              {/* Product Editing Modal */}
              <AnimatePresence>
                {isEditing && (
                  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
                    <motion.div 
                      key="modal"
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 20 }}
                      className="bg-white rounded-[2.5rem] w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
                    >
                    <div className="p-8 border-b border-slate-100 flex justify-between items-center shrink-0">
                      <h2 className="text-2xl font-bold">{editingProduct?.id ? 'Edit Product' : 'New Product'}</h2>
                      <button onClick={() => {
                        setIsEditing(false);
                        setFeaturesText('');
                      }} className="p-2 hover:bg-slate-100 rounded-full">
                        <X size={20} />
                      </button>
                    </div>
                    
                    <div className="flex-grow overflow-y-auto p-8 custom-scrollbar">
                      <form onSubmit={handleSave} className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Product Name</label>
                          <input 
                            required
                            type="text" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 outline-none focus:ring-1 focus:ring-blue-500"
                            value={editingProduct?.name || ''}
                            onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Price ($)</label>
                          <input 
                            required
                            type="number" 
                            step="0.01"
                            className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Enter price"
                            value={editingProduct?.price ?? ''}
                            onChange={(e) => setEditingProduct({...editingProduct, price: e.target.value === '' ? undefined : parseFloat(e.target.value)})}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Category</label>
                          <select 
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                            value={editingProduct?.category || ''}
                            onChange={(e) => setEditingProduct({...editingProduct, category: e.target.value})}
                          >
                            <option value="" disabled>Select Category</option>
                            <option value="UV">UV</option>
                            <option value="RO">RO</option>
                            <option value="UV+RO">UV+RO</option>
                            <option value="Copper">Copper</option>
                            <option value="Mineral">Mineral</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Product Tag (Badge)</label>
                          <input 
                            type="text" 
                            placeholder="e.g. Best Seller, New"
                            className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 outline-none focus:ring-1 focus:ring-blue-500"
                            value={editingProduct?.tag || ''}
                            onChange={(e) => setEditingProduct({...editingProduct, tag: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Stages</label>
                          <input 
                            type="number" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 outline-none focus:ring-1 focus:ring-blue-500"
                            value={editingProduct?.specs?.stages || 0}
                            onChange={(e) => setEditingProduct({
                              ...editingProduct, 
                              specs: { ...(editingProduct?.specs || { precision: '-', flowRate: '-' }), stages: parseInt(e.target.value) }
                            })}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Precision</label>
                          <input 
                            type="text" 
                            placeholder="e.g. 0.0001µ"
                            className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 outline-none focus:ring-1 focus:ring-blue-500"
                            value={editingProduct?.specs?.precision || ''}
                            onChange={(e) => setEditingProduct({
                              ...editingProduct, 
                              specs: { ...(editingProduct?.specs || { stages: 0, flowRate: '-' }), precision: e.target.value }
                            })}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Flow Rate</label>
                          <input 
                            type="text" 
                            placeholder="e.g. 2.5L/min"
                            className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 outline-none focus:ring-1 focus:ring-blue-500"
                            value={editingProduct?.specs?.flowRate || ''}
                            onChange={(e) => setEditingProduct({
                              ...editingProduct, 
                              specs: { ...(editingProduct?.specs || { stages: 0, precision: '-' }), flowRate: e.target.value }
                            })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Features (comma separated)</label>
                        <input 
                          type="text" 
                          placeholder="UV Sterilization, Mineral Re-infusion, ..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 outline-none focus:ring-1 focus:ring-blue-500"
                          value={featuresText}
                          onChange={(e) => {
                            setFeaturesText(e.target.value);
                            const features = e.target.value.split(',').map(f => f.trim()).filter(Boolean);
                            setEditingProduct({
                              ...editingProduct, 
                              features
                            });
                          }}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Display Section</label>
                          <select 
                            className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 outline-none focus:ring-1 focus:ring-blue-500"
                            value={editingProduct?.isNewLaunch ? 'new' : (editingProduct?.tag === 'Best Seller' ? 'bestseller' : 'none')}
                            onChange={(e) => {
                              const val = e.target.value;
                              setEditingProduct({
                                ...editingProduct,
                                isNewLaunch: val === 'new',
                                tag: val === 'bestseller' ? 'Best Seller' : (val === 'new' ? 'New Launch' : '')
                              });
                            }}
                          >
                            <option value="none">Standard Listing</option>
                            <option value="bestseller">Best Seller</option>
                            <option value="new">New Launch</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Card Background</label>
                          <select 
                            className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 outline-none focus:ring-1 focus:ring-blue-500"
                            value={editingProduct?.bgColor || 'bg-[#eef5ff]'}
                            onChange={(e) => setEditingProduct({...editingProduct, bgColor: e.target.value})}
                          >
                            <option value="bg-[#eef5ff]">Light Blue</option>
                            <option value="bg-[#fff1ed]">Light Pink</option>
                            <option value="bg-slate-50">Light Slate</option>
                            <option value="bg-amber-50">Light Amber</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Tagline / Subtext</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Instant hot water on demand"
                          className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 outline-none focus:ring-1 focus:ring-blue-500"
                          value={editingProduct?.tagline || ''}
                          onChange={(e) => setEditingProduct({...editingProduct, tagline: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Image</label>
                        <div className="flex gap-4">
                          <div className="flex-grow space-y-2">
                            <input 
                              type="text" 
                              placeholder="Image URL"
                              className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 outline-none focus:ring-1 focus:ring-blue-500"
                              value={editingProduct?.image || ''}
                              onChange={(e) => setEditingProduct({...editingProduct, image: e.target.value})}
                            />
                          </div>
                          <div className="shrink-0">
                            <label className="cursor-pointer flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
                              {isUploading ? <Loader2 className="animate-spin" size={20} /> : <ImageIcon size={20} />}
                              <span>Upload</span>
                              <input 
                                type="file" 
                                className="hidden" 
                                accept="image/*"
                                onChange={async (e) => {
                                  const file = e.target.files?.[0];
                                  if (!file) return;
                                  
                                  setIsUploading(true);
                                  try {
                                    if (isSanityConfigured) {
                                       const asset = await uploadImage(file);
                                       setEditingProduct({
                                         ...editingProduct,
                                         image: asset.url,
                                         imageAssetId: asset._id
                                       });
                                    } else {
                                      // Use FileReader to get base64 for immediate preview
                                      const reader = new FileReader();
                                      reader.onloadend = () => {
                                        setEditingProduct({
                                          ...editingProduct,
                                          image: reader.result as string
                                        });
                                      };
                                      reader.readAsDataURL(file);
                                    }
                                  } catch (err) {
                                    console.error('Upload error:', err);
                                  } finally {
                                    setIsUploading(false);
                                  }
                                }}
                              />
                            </label>
                          </div>
                        </div>
                        {editingProduct?.image && (
                          <div className="mt-2 w-20 h-20 rounded-xl bg-slate-100 border border-slate-100 overflow-hidden relative group">
                            <img src={editingProduct.image} className="w-full h-full object-cover" alt="Preview" />
                            <button 
                              onClick={() => setEditingProduct({...editingProduct, image: ''})}
                              className="absolute inset-0 bg-red-600/80 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Description</label>
                        <textarea 
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 outline-none focus:ring-1 focus:ring-blue-500"
                          value={editingProduct?.description || ''}
                          onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})}
                        />
                      </div>

                      <div className="flex gap-4">
                        <button 
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="flex-grow py-4 border border-slate-200 rounded-xl font-bold hover:bg-slate-50"
                        >
                          Cancel
                        </button>
                        <button 
                          disabled={isLoading}
                          type="submit"
                          className="flex-grow py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 flex items-center justify-center gap-2"
                        >
                          {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Check size={20} />}
                          Save Changes
                        </button>
                      </div>
                    </form>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            {activeTab === 'dashboard' && (
              <div className="space-y-12">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-slate-50 rounded-2xl text-slate-400">
                          <stat.icon size={24} />
                        </div>
                        <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-lg">
                          {stat.trend}
                        </span>
                      </div>
                      <div className="text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Table Mockup */}
                <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm">
                  <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                    <h2 className="text-xl font-bold">Latest Sanity Products</h2>
                    <button onClick={loadProducts} className="text-blue-600 text-sm font-bold flex items-center gap-1">
                      Refresh List <ExternalLink size={14} />
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-slate-50/50">
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Product</th>
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Category</th>
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Price</th>
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Status</th>
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {products.map((p) => (
                          <tr key={p.id} className="hover:bg-slate-50/30 transition-colors">
                            <td className="px-8 py-5">
                               <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 rounded-lg bg-slate-100 overflow-hidden shrink-0">
                                     {p.image ? (
                                       <img src={p.image} className="w-full h-full object-cover" alt="" />
                                     ) : (
                                       <div className="w-full h-full flex items-center justify-center text-slate-300">
                                         <ImageIcon size={16} />
                                       </div>
                                     )}
                                  </div>
                                  <span className="font-bold text-sm">{p.name}</span>
                               </div>
                            </td>
                            <td className="px-8 py-5 text-sm text-slate-500">{p.category}</td>
                            <td className="px-8 py-5 text-sm font-bold">${p.price}</td>
                            <td className="px-8 py-5">
                              <span className="bg-green-100 text-green-600 text-[10px] font-black uppercase px-2 py-1 rounded-md">
                                Live
                              </span>
                            </td>
                            <td className="px-8 py-5">
                              <div className="flex gap-2">
                                  <button 
                                    onClick={() => {
                                      setEditingProduct(p);
                                      setFeaturesText(p.features?.join(', ') || '');
                                      setIsEditing(true);
                                    }}
                                    className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                  >
                                    <Edit2 size={16} />
                                  </button>
                                <button 
                                  onClick={() => handleDelete(p.id)}
                                  className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'products' && (
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                 {products.map((p) => (
                   <motion.div 
                    layout
                    key={p.id} 
                    className="bg-white rounded-3xl border border-slate-100 overflow-hidden group shadow-sm"
                   >
                     <div className="aspect-video bg-slate-100 relative overflow-hidden">
                       {p.image ? (
                         <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                       ) : (
                         <div className="w-full h-full flex items-center justify-center text-slate-300">
                           <ImageIcon size={40} />
                         </div>
                       )}
                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                          <button 
                            onClick={() => {
                              setEditingProduct(p);
                              setFeaturesText(p.features?.join(', ') || '');
                              setIsEditing(true);
                            }}
                            className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-xl"
                          >
                             <Edit2 size={20} />
                          </button>
                          <button 
                            onClick={() => handleDelete(p.id)}
                            className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-xl"
                          >
                             <Trash2 size={20} />
                          </button>
                       </div>
                     </div>
                     <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg">{p.name}</h3>
                          <span className="text-blue-600 font-bold">${p.price}</span>
                        </div>
                        <p className="text-sm text-slate-400 line-clamp-2">{p.description}</p>
                     </div>
                   </motion.div>
                 ))}
               </div>
            )}
            
            {activeTab === 'content' && (
              <div className="bg-white rounded-[2rem] border border-slate-100 p-12 shadow-sm max-w-2xl max-h-[80vh] overflow-y-auto custom-scrollbar">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <Type size={20} className="text-blue-600" /> Site Branding
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Primary Heading</label>
                        <input className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 text-sm outline-none focus:ring-1 focus:ring-blue-500" defaultValue="Purity in Every Drop" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Primary Color</label>
                        <div className="flex gap-2 items-center">
                          <input className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 text-sm outline-none" defaultValue="#2563eb" />
                          <div className="w-10 h-10 rounded-xl bg-blue-600 border border-slate-200 shrink-0" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-8 border-t border-slate-50">
                    <h2 className="text-xl font-bold">Typography</h2>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 text-sm outline-none appearance-none">
                      <option>Space Grotesk (Default)</option>
                      <option>Inter</option>
                      <option>Montserrat</option>
                    </select>
                  </div>

                  <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
                    Publish Changes
                  </button>
                </div>
              </div>
            )}
            
            {activeTab !== 'dashboard' && activeTab !== 'content' && activeTab !== 'products' && (
              <div className="bg-white rounded-[2rem] border border-slate-100 p-24 text-center shadow-sm">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mx-auto mb-6">
                   <BarChart3 size={40} />
                </div>
                <h2 className="text-2xl font-bold mb-2">Module Loading</h2>
                <p className="text-slate-400">This management module is currently being optimized.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
