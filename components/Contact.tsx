import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="w-full bg-brand-green pt-24 pb-20 relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 relative z-20">
        
        {/* Header */}
        <h2 className="text-center text-3xl md:text-5xl lg:text-6xl font-display text-brand-cream mb-16 uppercase tracking-wider">
          Every great story starts with a <span className="font-serif italic text-brand-gold">touch</span>
        </h2>

        {/* Contact Form */}
        <div className="relative z-30 mt-12 max-w-2xl mx-auto">
          <form className="space-y-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="relative">
                 <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-brand-cream/30 py-2 text-brand-cream placeholder-brand-cream/50 focus:outline-none focus:border-brand-gold transition-colors font-sans tracking-wide" />
               </div>
               <div className="relative">
                 <input type="text" placeholder="Message" className="w-full bg-transparent border-b border-brand-cream/30 py-2 text-brand-cream placeholder-brand-cream/50 focus:outline-none focus:border-brand-gold transition-colors font-sans tracking-wide" />
               </div>
               <div className="relative">
                 <input type="text" placeholder="Contact No." className="w-full bg-transparent border-b border-brand-cream/30 py-2 text-brand-cream placeholder-brand-cream/50 focus:outline-none focus:border-brand-gold transition-colors font-sans tracking-wide" />
               </div>
               <div className="relative">
                 <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-brand-cream/30 py-2 text-brand-cream placeholder-brand-cream/50 focus:outline-none focus:border-brand-gold transition-colors font-sans tracking-wide" />
               </div>
             </div>
             
             <div className="flex justify-center pt-12">
               <button type="submit" className="px-12 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-green transition-colors font-display tracking-widest uppercase text-sm">
                 Submit
               </button>
             </div>
          </form>
        </div>

      </div>

    </section>
  );
};

export default Contact;