import logo from "./logo.svg";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Meals />
      </div>
    </CartProvider>
  );
}

export default App;
