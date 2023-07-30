import axios from "axios";
import { useEffect, useState } from "react";
const baseURL = "https://ih-countries-api.herokuapp.com/countries";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL);
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Tour Guide to the World
      </h1>

      <ul className="list-group">
        {countries.map((country) => (
          <li key={country.alpha3Code} className="list-group-item">
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
