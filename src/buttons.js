const Buttons = ({ fullMeals, filterMenu, category }) => {
  const categories = fullMeals.reduce(
    (total, meal) => {
      if (!total.includes(meal.category)) {
        total.push(meal.category);
      }
      return total;
    },
    ["All"]
  );

  return (
    <div className="buttons">
      {categories.map((cate, index) => (
        <button
          key={index}
          className={cate === category ? "active" : ""}
          onClick={() => filterMenu(cate)}
        >
          {cate}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
