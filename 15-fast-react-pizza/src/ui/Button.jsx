import { Link } from "react-router-dom";

export default function Button({
  children,
  disabled,
  onClick,
  to,
  type,
  className,
  allowed,
}) {
  const customClass = `${className} ${allowed && "cursor-not-allowed bg-stone-300 hover:bg-stone-300"} uppercase rounded-full bg-yellow-300 inline-block font-semibold text-stone-800 transition-colors duration-300 hover:bg-yellow-500 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 text-sm disabled:cursor-not-allowed disabled:bg-gray-400`;

  const styles = {
    primary: customClass + "md:px-6 md:py-3 py-2 px-2",
    small: customClass + " md:px-5 md:py-2.5 py-2 px-2 text-xs",
    secondary:
      "text- rounded-full bg-transparent px-6 py-4 font-semibold text-stone-400 ring-2 ring-stone-400 transition-all duration-500 hover:bg-stone-400 hover:text-white uppercase",
  };

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        disabled={disabled}
        className={styles[type]}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
