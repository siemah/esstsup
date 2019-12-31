import React from 'react';

import '../assets/css/hero.css';

export default function Hero({ children, className='', fullHeight=true }) {
  return (
    <div className={`hero ${className}${fullHeight ? ' hero-full_height' : ''}`}>
      {children}
    </div>
  )
}
