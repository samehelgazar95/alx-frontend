import { Outlet, useNavigation } from "react-router";
import { Link } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "../ui/Loader";

export default function AppLayout() {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-stone-100">
      {isLoading && <Loader />}

      <Header />
      {/* <Link to="/menu">Menu</Link> */}

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
