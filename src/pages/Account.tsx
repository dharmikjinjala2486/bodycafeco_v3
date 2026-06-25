import React, { useState } from 'react';
import { LogOut, Package, ClipboardList, MapPin, Settings as SettingsIcon, ShieldCheck, Check } from 'lucide-react';

export const Account: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [activeTab, setActiveTab] = useState<'subscriptions' | 'orders' | 'addresses' | 'settings'>('subscriptions');

  // Login form values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="pt-32 pb-24 bg-brand-bg px-6 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto text-left">
        
        {!isLoggedIn ? (
          /* AUTH PANEL STATE */
          <div className="max-w-md mx-auto bg-white border border-brand-border p-6 md:p-8 rounded shadow-sm space-y-6">
            <div className="flex border-b border-brand-border pb-4">
              <button
                onClick={() => setAuthMode('login')}
                className={`flex-1 text-center py-2 text-xs font-bold uppercase tracking-wider cursor-pointer ${
                  authMode === 'login' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'
                }`}
              >
                Log In
              </button>
              <button
                onClick={() => setAuthMode('register')}
                className={`flex-1 text-center py-2 text-xs font-bold uppercase tracking-wider cursor-pointer ${
                  authMode === 'register' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'
                }`}
              >
                Register
              </button>
            </div>

            <h2 className="font-display font-bold text-center text-primary uppercase text-sm tracking-widest">
              {authMode === 'login' ? 'Access Dashboard' : 'Create Account'}
            </h2>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-primary tracking-wider">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. custom@domain.com"
                  className="w-full px-4 py-3 border border-brand-border text-xs outline-none focus:border-primary text-primary"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-primary tracking-wider">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border border-brand-border text-xs outline-none focus:border-primary text-primary"
                />
              </div>

              {authMode === 'login' ? (
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white hover:bg-accent font-bold text-xs uppercase tracking-widest cursor-pointer transition-colors"
                >
                  Sign In
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full py-4 bg-accent text-white hover:bg-primary font-bold text-xs uppercase tracking-widest cursor-pointer transition-colors"
                >
                  Create Account
                </button>
              )}
            </form>
            
            <p className="text-[10px] text-center text-text-secondary">
              Demo login: Input any mock email and password to view dashboard fields.
            </p>
          </div>
        ) : (
          /* DASHBOARD STATE */
          <div className="space-y-8">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-brand-border/60 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Verified Member
                </span>
                <h1 className="font-display font-extrabold text-2xl md:text-3xl text-primary">
                  Welcome Back
                </h1>
                <p className="text-xs text-text-secondary">{email}</p>
              </div>

              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 py-2 px-3 border border-brand-border bg-white text-xs font-semibold uppercase text-primary hover:text-accent cursor-pointer transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            </div>

            {/* Dashboard Tabs & Content (Grid) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left sidebar nav tabs (lg:col-span-3) */}
              <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 lg:border-r border-brand-border/40 pr-0 lg:pr-6">
                {[
                  { id: 'subscriptions', label: 'My Subscriptions', icon: ClipboardList },
                  { id: 'orders', label: 'Order History', icon: Package },
                  { id: 'addresses', label: 'Addresses', icon: MapPin },
                  { id: 'settings', label: 'Account Settings', icon: SettingsIcon }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`w-full flex items-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap lg:whitespace-normal ${
                        activeTab === tab.id
                          ? 'bg-primary text-white font-bold'
                          : 'bg-transparent text-primary hover:bg-brand-bg/65'
                      }`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Right content window (lg:col-span-9) */}
              <div className="lg:col-span-9 bg-white border border-brand-border p-6 md:p-8 rounded min-h-[400px]">
                
                {/* 1. Subscriptions Tab */}
                {activeTab === 'subscriptions' && (
                  <div className="space-y-6">
                    <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-primary">Active Subscriptions</h3>
                    
                    <div className="p-4 border border-brand-border bg-brand-bg/25 rounded flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex gap-3">
                        <div className="w-16 h-16 bg-white border rounded overflow-hidden flex-shrink-0">
                          <img src="/Producta/Fish Oil.png" alt="Omega-3" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-xs text-primary">Omega-3 Pure Antarctic Fish Oil</h4>
                          <p className="text-[10px] text-text-secondary mt-0.5 uppercase tracking-wider font-semibold">Auto-ship: Every 30 Days</p>
                          <span className="inline-block text-[8px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold uppercase border border-emerald-100 mt-2">Next Billing: July 24, 2026</span>
                        </div>
                      </div>
                      <div className="text-left md:text-right space-y-1.5 w-full md:w-auto">
                        <span className="font-display font-bold text-xs text-primary block">₹1,104 / month</span>
                        <div className="flex gap-2">
                          <button className="px-3 py-1.5 border border-brand-border bg-white text-[9px] uppercase font-bold text-primary hover:border-primary transition-colors cursor-pointer">Pause</button>
                          <button className="px-3 py-1.5 border border-transparent bg-primary text-[9px] uppercase font-bold text-white hover:bg-accent transition-colors cursor-pointer">Manage</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Order History Tab */}
                {activeTab === 'orders' && (
                  <div className="space-y-6">
                    <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-primary">Order History</h3>
                    
                    <div className="border border-brand-border divide-y divide-brand-border text-xs text-text-secondary">
                      <div className="grid grid-cols-4 p-3 bg-brand-bg font-bold text-primary text-[10px] uppercase tracking-wider">
                        <span>Order ID</span>
                        <span>Date</span>
                        <span>Status</span>
                        <span className="text-right">Total</span>
                      </div>
                      
                      <div className="grid grid-cols-4 p-4 items-center">
                        <span className="font-mono text-primary font-semibold">#BC-98042</span>
                        <span>June 18, 2026</span>
                        <span className="text-emerald-600 font-bold uppercase tracking-wider text-[9px] flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Dispatched
                        </span>
                        <span className="text-right font-display text-primary font-semibold">₹1,499</span>
                      </div>
                      <div className="grid grid-cols-4 p-4 items-center">
                        <span className="font-mono text-primary font-semibold">#BC-90412</span>
                        <span>May 10, 2026</span>
                        <span className="text-emerald-600 font-bold uppercase tracking-wider text-[9px] flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Delivered
                        </span>
                        <span className="text-right font-display text-primary font-semibold">₹2,198</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Addresses Tab */}
                {activeTab === 'addresses' && (
                  <div className="space-y-6 text-xs text-text-secondary">
                    <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-primary">Shipping & Billing Addresses</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-brand-border rounded space-y-2 relative">
                        <span className="text-[9px] bg-primary/10 text-primary px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Default Shipping</span>
                        <h4 className="font-display font-bold text-primary uppercase text-[10px] mt-2">Aravind Sharma</h4>
                        <p>
                          Outer Ring Road, Block 4A<br />
                          Indiranagar, Bengaluru, KA<br />
                          560103, India
                        </p>
                        <button className="text-[10px] font-bold text-accent hover:text-primary transition-colors cursor-pointer uppercase tracking-wider pt-2 block">Edit Address</button>
                      </div>

                      <div className="p-4 border border-brand-border rounded space-y-2 relative">
                        <span className="text-[9px] bg-primary/10 text-primary px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Default Billing</span>
                        <h4 className="font-display font-bold text-primary uppercase text-[10px] mt-2">Aravind Sharma</h4>
                        <p>
                          Outer Ring Road, Block 4A<br />
                          Indiranagar, Bengaluru, KA<br />
                          560103, India
                        </p>
                        <button className="text-[10px] font-bold text-accent hover:text-primary transition-colors cursor-pointer uppercase tracking-wider pt-2 block">Edit Address</button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Settings Tab */}
                {activeTab === 'settings' && (
                  <div className="space-y-6">
                    <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-primary">Account Settings</h3>
                    
                    <form className="space-y-4 max-w-md text-xs text-text-secondary">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-primary tracking-wider">Change Email</label>
                        <input
                          type="email"
                          defaultValue={email}
                          className="w-full px-4 py-3 border border-brand-border outline-none focus:border-primary text-primary"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-primary tracking-wider">New Password</label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full px-4 py-3 border border-brand-border outline-none focus:border-primary text-primary"
                        />
                      </div>
                      <button className="py-3 px-6 bg-primary text-white hover:bg-accent font-bold text-[10px] uppercase tracking-widest transition-colors cursor-pointer">Update Settings</button>
                    </form>
                  </div>
                )}

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
