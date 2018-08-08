import React from 'react';

export function Button({ className, icon, callback, text }) {
  return (
    <a className={className} onClick={callback}>
      <i className={icon}></i>
    </a>
  )
}