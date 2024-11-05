import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";
import PizzaBlock from "../components/PizzaBlock";
import { useEffect, useState } from "react";

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://67264885302d03037e6d0883.mockapi.io/pizzas")
      .then((res) => res.json())
      .then((arrPizza) => {
        setPizzas(arrPizza);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
          : pizzas.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)}
      </div>
    </>
  );
}

export default Home;
