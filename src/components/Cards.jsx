import { Link } from "react-router-dom";

const Cards = ({ res }) => {
  const { id, name, locality, cloudinaryImageId, areaName, costForTwo } = res;

  return (
    <Link
      to={`/restaurant/${res?.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="card">
        <h3>{name}</h3>
        <h3>{locality}</h3>
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/${cloudinaryImageId}`}
          alt={name}
        />
        <h3>{areaName}</h3>
        <h3>{costForTwo}</h3>
      </div>
    </Link>
  );
};

export default Cards;
