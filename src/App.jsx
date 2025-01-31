import Header from "./components/Header";
import Restaurants from "./components/Restaurents";
const Filter = () => {
  return <button>Filter</button>;
};

const Search = () => {
  return <input type="text" placeholder="Search Restaurants" />;
};

const Body = () => {
  return (
    <div>
      <Filter />
      <Search />
      <Restaurants />
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default App;
