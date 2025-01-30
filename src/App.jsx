import { useState } from "react";

const Header = () => {
  return (
    <header className="header">
      {" "}
      {/* Logo Section */}
      <div className="logo">
        <img
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png"
          alt="Restaurant Logo"
        />
      </div>
      <nav className="menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};


const Filter=()=>{
  return <button>Filter</button>

}


const Search=()=>{
  return <input type="text" placeholder="Search Restaurants" />;
}



const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRestaurants = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
            "Origin": "https://www.swiggy.com",
            "Referer": "https://www.swiggy.com/restaurants",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "Cookie": "__SW=xidbpvbltxYqxn2V085zsWOa-YXl98oZ; _device_id=06c00b0c-ae7f-3c3a-4c1e-974e12eae12d;" // Add your valid Swiggy cookies
          },
          body: JSON.stringify({
            lat: 23.2404899,
            lng: 77.4063625,
            nextOffset: "CJhlELQ4KICYrvjYns6sQzCnEw==",
            widgetOffset: {
              NewListingView_category_bar_chicletranking_TwoRows: "",
              NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
              Restaurant_Group_WebView_SEO_PB_Theme: "",
              Restaurant_Group_WebView_SEO_Reorder_Theme: "",
              collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "24",
              inlineFacetFilter: "",
              restaurantCountWidget: "",
            },
            filters: {},
            seoParams: {
              seoUrl: "https://www.swiggy.com/restaurants",
              pageType: "FOOD_HOMEPAGE",
              apiName: "FoodHomePage",
            },
            page_type: "DESKTOP_WEB_LISTING",
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to fetch restaurants");

      const data = await response.json();
      console.log("Swiggy API Response:", data);

      // Update state with restaurant data
      setRestaurants(data?.data?.cards || []);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching restaurants:", err);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div>
      <h2>Restaurants</h2>
      <button onClick={fetchRestaurants}>🔄 Refresh</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="restaurant-list">
        {restaurants.length > 0 ? (
          restaurants.map((res, index) => (
            <p key={index}>{res.name}</p> // Update this according to API response
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};







 
const Body=()=>{
  <Filter/>
  <Search/>
  <Restaurents/>
}




function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
