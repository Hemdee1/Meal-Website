const MyMeals = ({ meals }) => {
  return (
    <div className="meals">
      {meals.map((meal, index) => (
        <div className="meal-container" key={index}>
          <div className="img">
            <img src={meal.img} alt={meal.name} />
          </div>
          <div className="options">
            <div className="name">
              <h3>{meal.name}</h3>
              <h4>{meal.price}</h4>
            </div>
            <div className="desc">{meal.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyMeals;
