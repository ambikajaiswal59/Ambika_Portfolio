// src/components/ui/button.jsx

export function Button({ children, variant = "default", ...props }) {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition";
  const variants = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
