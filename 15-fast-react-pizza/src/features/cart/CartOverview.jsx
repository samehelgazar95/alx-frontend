import { Link } from "react-router-dom";

export default function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-3 font-semibold text-stone-300 sm:space-x-5">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}
