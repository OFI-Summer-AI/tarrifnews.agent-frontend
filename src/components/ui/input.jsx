export function Input({ className = '', ...props }) {
  return <input className={`p-2 rounded bg-[#283144] text-white ${className}`} {...props} />;
}
