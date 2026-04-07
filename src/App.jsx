import { CartProvider } from "./context/CartContext";
import { AppRouter } from "./router.jsx";

export default function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}
