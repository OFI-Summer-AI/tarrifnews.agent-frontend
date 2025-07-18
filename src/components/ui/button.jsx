export function Button({ children, className = '', variant = '', size = '', ...props }) {
  const base = 'px-3 py-1 rounded font-medium transition';
  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}
