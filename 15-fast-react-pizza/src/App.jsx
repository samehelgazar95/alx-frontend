import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { menuLoader } from "./features/menu/Menu";
import Order, { orderLoader } from "./features/order/Order";
import CreateOrder, { createOrderAction } from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import AppLayout from "./ui/AppLayout";

// username => updateName
//

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
          action: createOrderAction,
        },
        {
          path: "order/:id",
          element: <Order />,
          loader: orderLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

// useLoaderData()  >> To access the loaded data
// useNavigation()  >> To access the status of the loader
// useRouteError()  >> To access the error message of routing
// { params } >> params arg to access the params in the URL

// action >>
// { request } >> request arg to use in the action function
// useActionData >> to return some errors to display

// useLocation() >> to return the data about the current nav
