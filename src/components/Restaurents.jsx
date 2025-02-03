import { useEffect, useState } from "react";
// import response from "../swiggyresponse";
import swiggyresponse from "../swiggyresponse"
import Cards from "../components/Cards";
import Filter from "../components/Filter";
const Restaurants = () => {
  const [data, setdata] = useState([]);
  const getResponse=async()=>{
    const response = await swiggyresponse()
    const restaurants =
      response?.data?.restaurants || [];

    setdata(restaurants);
  }
  useEffect(() => {
    getResponse()
   
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
