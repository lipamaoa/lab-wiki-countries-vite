import axios from "axios";
import { useEffect, useState } from "react";
const baseURL = "https://ih-countries-api.herokuapp.com/countries";
import { Link } from "react-router-dom"; 

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL);
        setCountries(response.data);
        console.log(response.data);
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
            <Link to={`/${country.alpha3Code.toLowerCase()}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common}
                style={{ marginRight: "10px" }}
              />
              <p>{country.name.common}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
