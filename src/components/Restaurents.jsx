import { useEffect, useState } from "react";
import response from "../swiggyresponse";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
const Restaurants = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const restaurants =
      response?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setdata(restaurants);
  }, []);

  return (
    <div className="main-container">
      {/* Filters Section */}
      <div className="filters-container">
        <Filter resdata={data} />
      </div>

      {/* Cards Section */}
      <div className="Rest_container">
        {data.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {data.map((rest) => (
              <Cards key={rest?.info?.id} res={rest?.info} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Restaurants;
