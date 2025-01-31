import { useEffect, useState } from "react";
import response from "../swiggyresponse";
import Cards from "../components/Cards";

const Restaurants = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const restaurants =
      response?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setdata(restaurants);
  }, []);

  return (
    <div>
      <div className="Rest_container">
        {data == null ? (
          <h1>Loading</h1>
        ) : (
          data.map((rest) => (
            <div className="restuarentcard" key={rest?.info?.id}>
              <Cards res={rest?.info} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Restaurants;
