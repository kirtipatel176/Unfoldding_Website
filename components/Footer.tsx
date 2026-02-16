import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-cream text-brand-green/60 text-xs md:text-sm py-8 border-t border-brand-green/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
        
        <div>
          © 2025-26 by www.unfolding.co.in
        </div>

        <div className="flex space-x-6 md:space-x-12">
          <span>Hotline +91 9755569191</span>
          <a href="#" className="hover:text-brand-green">Terms & Condition</a>
          <a href="#" className="hover:text-brand-green">Privacy Policy</a>
          <a href="#" className="hover:text-brand-green">Refund Policy</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;