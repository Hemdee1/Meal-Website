import { useState } from "react";
import Buttons from "./buttons";
import mealsData from "./data";
import MyMeals from "./meals";

const Main = () => {
  const [meals, setMeals] = useState(mealsData);
  const [category, setCategory] = useState("All");
  const fullMeals = mealsData;

  const filterMenu = (category) => {
    if (category === "All") {
      setMeals(mealsData);
      setCategory("All");
      return;
    }
    const newMeals = mealsData.filter((meal) => meal.category === category);
    setMeals(newMeals);
    setCategory(category);
  };

  return (
    <main>
      <h1>Our Menu</h1>
      <Buttons
        fullMeals={fullMeals}
        filterMenu={filterMenu}
        category={category}
      />
      <MyMeals meals={meals} />
    </main>
  );
};

export default Main;
