import Header from "./pages/header/header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import DetailPage from "./pages/detail-page/detail-page";
import BasketPage from "./pages/basket-page/basket-page";


function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path="/" element={<HomePage /> } />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/details/:id" element={<DetailPage />} />
     </Routes>
    </div>
  );
}

export default App;