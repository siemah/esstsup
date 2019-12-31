import React from "react";

export const Container = ({className, children, ...rest}) => (
  <div className={`container ${className || ''}`} {...rest}>
    { children }
  </div>
);

export const Row = ({className=null, children, ...rest}) => (
  <div className={`row ${className? className: ''}`} {...rest}>
    { children }
  </div>
);

export const Col = ({className=null, children, s=null, m=null, l=null, ...rest}) => (
  <div className={`col ${className? className : ''} ${s? "s"+s : ''} ${m? "m"+m : ''} ${l? "l"+l : ''}`} {...rest}>
    { children }
  </div>
);
