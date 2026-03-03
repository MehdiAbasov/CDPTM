export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button"
}) {

  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",
    secondary:
      "bg-gray-100 hover:bg-gray-200",
    danger:
      "bg-red-500 hover:bg-red-600 text-white"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
      px-4
      py-2
      rounded-lg
      text-sm
      font-medium
      transition
      ${styles[variant]}
      `}
    >
      {children}
    </button>
  );
}