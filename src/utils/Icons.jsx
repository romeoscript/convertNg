// src/components/Icons.jsx

import React from 'react';
import { IconList } from '../assets/icons';

const Icons = ({ type, size = 24, color = 'currentColor', ...props }) => {
  const Icon = IconList[type];

  if (!Icon) {
    console.error(`Icon "${type}" does not exist.`);
    return null;
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'inline-block',
        color: color,
      }}
      {...props}
    >
      {React.cloneElement(Icon, {
        width: size,
        height: size,
        fill: color,
      })}
    </div>
  );
};

export default Icons;
