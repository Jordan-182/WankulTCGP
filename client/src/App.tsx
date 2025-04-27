import { Outlet } from "react-router";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CardsProvider } from "./context/CardsProvider";

function App() {
  return (
    <CardsProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CardsProvider>
  );
}

export default App;
