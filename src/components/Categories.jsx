import { useState } from "react";

function Categories() {
  const [activeItem, setActiveItem] = useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            onClick={() => setActiveItem(i)}
            className={activeItem === i ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
