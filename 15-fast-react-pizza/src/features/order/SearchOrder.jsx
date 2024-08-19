import { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        className="input bg-yellow-200"
        type="text"
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
