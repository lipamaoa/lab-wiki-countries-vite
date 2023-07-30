import { Route, Routes } from "react-router"; // Corrected import
import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:alpha3Code" element={<CountryDetails />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
