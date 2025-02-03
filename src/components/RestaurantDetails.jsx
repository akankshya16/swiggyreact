import { useState, useEffect } from "react";
import cardsresponse from "../components/cardsresponse"; // Importing the data




const RestaurantDetails = () => {
  const [menuCards, setMenuCards] = useState([]);

  useEffect(() => {
    if (cardsresponse?.groupedCard?.cardGroupMap?.REGULAR?.cards) {
      const cards = cardsresponse.groupedCard.cardGroupMap.REGULAR.cards;

      const extractedData = cards.map((card) => {
        const cardDetails = card.card.card;
        return {
          title: cardDetails.title, // The card title (e.g., "Top Picks")
          Dishes: cardDetails?.categories,
          items: cardDetails.itemCards
            ? cardDetails.itemCards.map((item) => ({
                name: item.name,
                price: item.price,
                description: item.description || "No description available",
              }))
            : [], // If itemCards is undefined, set an empty array
        };
      });

      setMenuCards(extractedData);
    }
  }, []);

  if (!menuCards.length) return <h1>Loading...</h1>;

  return (
    <div className="restaurant-details">
      {menuCards.map((menu, index) => (
        <div key={index} className="menu-section">
          <h2>{menu.title}</h2>
          <ul>
            {menu.items.map((item, idx) => (
              <li key={idx}>
                <strong>{item.name}</strong> - ₹{item.price}
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RestaurantDetails;
