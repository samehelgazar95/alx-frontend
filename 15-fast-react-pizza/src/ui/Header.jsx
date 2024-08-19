import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <div className="flex justify-between border-b border-stone-300 bg-yellow-500 p-4 uppercase">
      <Link to="/" className="tracking-widest">
        Fast Pizza React Co.
      </Link>
      <SearchOrder />
      <p className="text-sm font-semibold">($userName)</p>
    </div>
  );
}
