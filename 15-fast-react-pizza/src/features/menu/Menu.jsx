import { useLoaderData } from "react-router";
import MenuItem from "../menu/MenuItem";
import { getMenu } from "../../services/apiRestaurant";

export default function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y px-2">
      {menu.map((piz) => (
        <MenuItem pizza={piz} key={piz.id}></MenuItem>
      ))}
    </ul>
  );
}

export async function menuLoader() {
  const data = await getMenu();
  return data;
}
