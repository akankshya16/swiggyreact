import Header from "./components/Header";
import Restaurants from "./components/Restaurents";

const Body = () => {
  return (
    <div>
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
