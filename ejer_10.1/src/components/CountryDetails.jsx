import { useParams, useRouteLoaderData, Link } from "react-router-dom";

function CountryDetails() {
  const { countryName } = useParams();
  const allCountries = useRouteLoaderData("root-data");

  const country = allCountries?.find(
    (c) => c.name.common.toLowerCase() === countryName.toLowerCase()
  );

  if (!country) return <div style={{ padding: "20px" }}><h2>País no encontrado</h2></div>;

  const getCountryName = (code) => {
    const found = allCountries.find(c => c.cca3 === code);
    return found ? found.name.common : code;
  };

  return (
    <div>
      <img src={country.flags.png} width="250" style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }} alt="" />
      
      <section>
        <h1>Datos Generales</h1>
        <ul style={{ lineHeight: "2" }}>
          <li><strong>Nombre Oficial:</strong> {country.name.official}</li>
          <li><strong>Población:</strong> {country.population.toLocaleString()}</li>
          <li><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</li>
          <li><strong>Continente:</strong> {country.region}</li>
          <li><strong>Región:</strong> {country.region} ({country.subregion})</li>
          <li><strong>Idiomas:</strong> {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</li>
        </ul>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Países Fronterizos</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {country.borders && country.borders.length > 0 ? (
            country.borders.map(code => (
              <Link 
                key={code} 
                to={`/country/${getCountryName(code)}`} 
                style={{ 
                  padding: "10px 20px", 
                  backgroundColor: "#0047ab", 
                  color: "white", 
                  textDecoration: "none", 
                  borderRadius: "4px",
                  fontSize: "14px"
                }}
              >
                {getCountryName(code)}
              </Link>
            ))
          ) : (
            <p>Este país no tiene fronteras terrestres.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default CountryDetails;