import { useState } from "react";
import Cards from "../components/Cards";

const Filter = ({ resdata }) => {
  const [filterdata, setfilterdata] = useState(resdata || []);
  const [click, setClick] = useState(false);
  const [reset, setreset] = useState(false);

  const handleClick = () => {
    console.log("Button clicked"); // Debugging

    if (!resdata || resdata.length === 0) {
      console.log("No data available for filtering");
      return;
    }

    const finalData = resdata.filter((rest) => rest.info.avgRating > 4);
    setfilterdata(finalData);
    setClick(true);
  };

  const handlereset = () => {
    setreset(true);
    setClick(false);
    setfilterdata(resdata);
  };

  return (
    <div>
      <button className="filterbutton" onClick={handleClick}>
        Filter Top Restaurants
      </button>
      <button className="resetbutton" onClick={handlereset}>
        Reset
      </button>
      {click && (
        <div>
          {filterdata.map((rest) => (
            <div className="restaurantCard" key={rest.info.id}>
              <Cards res={rest.info} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
