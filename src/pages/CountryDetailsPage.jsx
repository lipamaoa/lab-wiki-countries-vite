import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const baseURL = "https://ih-countries-api.herokuapp.com/countries";
import axios from "axios";

function CountryDetails() {
  const { alpha3Code} = useParams();
  const [countryDetails, setCountryDetails] = useState(null);
  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await axios.get(`${baseURL}/${alpha3Code.toUpperCase()}`);
        setCountryDetails(response.data);
      } catch (error) {
        console.error("Error fetching the country details:", error);
      }
    };
    fetchCountryDetails();
  }, [alpha3Code]);

  if (!countryDetails) {
    return <div>Loading...</div>;
  }

  const { name:{common}, capital, area, borders, alpha2Code } = countryDetails;

  return (
    <div className="container">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
      <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
                alt={common}
                style={{ marginRight: "10px" }}/>
      <h1>{common}</h1>

      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borders.map((border) => (
                  <li key={border} style={{listStyleType: "none"}}>
                    <Link to={`/${border}`}>{border}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
