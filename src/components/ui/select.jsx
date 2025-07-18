import { useState } from 'react';

export function Select({ children }) {
  return <div className="relative">{children}</div>;
}

export function SelectTrigger({ children, className = '' }) {
  return <button className={`p-2 rounded w-full text-left ${className}`}>{children}</button>;
}

export function SelectValue({ placeholder }) {
  return <span className="text-gray-400">{placeholder}</span>;
}

export function SelectContent({ children }) {
  return <div className="absolute bg-[#1f2a3c] mt-1 p-2 rounded shadow">{children}</div>;
}

export function SelectItem({ value, children }) {
  return <div className="hover:bg-[#2c3e50] p-1 rounded cursor-pointer">{children}</div>;
}
