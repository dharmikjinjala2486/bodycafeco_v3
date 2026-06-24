import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'support', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'support', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-brand-bg px-6 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto space-y-16 text-left">
        
        {/* Header */}
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Communication</span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-primary tracking-tight">
            Connect With Our Team
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            Need support adjusting your active subscription? Have questions regarding raw material chromatography tests? Fill out the form or write directly to our research lab.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Information Cards (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-brand-border p-6 rounded space-y-4">
              <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-primary">Direct Contact</h3>
              
              <div className="space-y-3.5 text-xs text-text-secondary">
                <div className="flex gap-3 items-center">
                  <Mail className="w-4 h-4 text-accent" />
                  <a href="mailto:support@bodycafeco.com" className="hover:text-accent font-semibold">support@bodycafeco.com</a>
                </div>
                <div className="flex gap-3 items-start">
                  <MapPin className="w-4 h-4 text-accent mt-0.5" />
                  <span>
                    Body Cafe Co. Laboratories Ltd.<br />
                    Outer Ring Road, Block 4A<br />
                    Bengaluru, KA, 560103
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>Mon – Fri: 9:00 AM – 6:00 PM IST</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-brand-border p-6 rounded text-xs text-text-secondary leading-relaxed">
              <h4 className="font-display font-bold text-primary mb-1 uppercase tracking-wider text-[10px]">Medical Advisory Warning</h4>
              <p>
                Our laboratory representatives cannot dispense personal medical prescriptions. For critical health conditions or pharmaceutical changes, always consult directly with a qualified medical physician.
              </p>
            </div>
          </div>

          {/* Form Panel (lg:col-span-8) */}
          <div className="lg:col-span-8 bg-white border border-brand-border p-6 md:p-8 rounded">
            <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-primary mb-6">Send An Inquiry</h3>
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 border border-dashed border-emerald-300 bg-emerald-50/50 p-6 rounded">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="font-display font-extrabold text-primary text-base">Inquiry Successfully Dispatched</h4>
                <p className="text-xs text-text-secondary max-w-sm mx-auto">
                  Thank you for writing. Our scientific advisors or support representatives will review your ticket and reply within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-primary tracking-wider">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Aravind Sharma"
                      className="w-full px-4 py-3 border border-brand-border text-xs outline-none focus:border-primary text-primary"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-primary tracking-wider">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. aravind@domain.com"
                      className="w-full px-4 py-3 border border-brand-border text-xs outline-none focus:border-primary text-primary"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold text-primary tracking-wider">Inquiry Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-brand-border text-xs outline-none focus:border-primary text-primary font-semibold uppercase tracking-wider cursor-pointer"
                  >
                    <option value="support">Subscription / General Support</option>
                    <option value="science">Scientific Formulation Inquiry</option>
                    <option value="wholesale">Retailer / Wholesale Partnership</option>
                    <option value="press">Press / Media Relations</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold text-primary tracking-wider">Your Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry in detail..."
                    className="w-full px-4 py-3 border border-brand-border text-xs outline-none focus:border-primary text-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white hover:bg-accent font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
