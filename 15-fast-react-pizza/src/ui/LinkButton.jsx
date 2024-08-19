import { Link } from "react-router-dom";

export default function LinkButton({ children, to, onClick }) {
  return (
    <Link to={to} onClick={onClick} className="link">
      {children}
    </Link>
  );
}
