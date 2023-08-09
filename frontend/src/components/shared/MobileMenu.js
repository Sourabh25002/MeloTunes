// MobileMenu.js
import React from 'react';
import IconText from './IconText';

const MobileMenu = ({ menuItems, onClose }) => {
  return (
    <div className="bg-black text-white p-4">
      {menuItems.map((item) => (
        <IconText
          key={item.targetLink}
          iconName={item.iconName}
          displayText={item.displayText}
          targetLink={item.targetLink}
          onClick={onClose}
        />
      ))}
    </div>
  );
};

export default MobileMenu;
