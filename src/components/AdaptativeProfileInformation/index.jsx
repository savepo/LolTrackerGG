import React, { useEffect } from 'react';
import ProfileInformation from '../ProfileInformation';

const AdaptativeProfileInformation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('#navbar');
      const component = document.querySelector('#proinfo');
  
      if (navbar.offsetTop > 0) {
        component.style.height = `calc(100% - ${navbar.offsetHeight}px)`;
      } else {
        component.style.height = '100%';
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="component" style={{ position: 'fixed' }}>
      {/* Tu componente */}
    </div>
  );
};

export default AdaptativeProfileInformation;
