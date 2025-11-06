import { useEffect, useState } from "react";

const CountryCard = ({ Flagname, flag, abbr }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "200px",
        height: "200px",
        border: "1px solid #dadce0",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      <img
        src={flag}
        alt={abbr}
        style={{
          width: "100px",
          height: "100px",
        }}
      />
      <h2>{Flagname}</h2>
    </div>
  );
};

const API_ENDPOINT = "https://xcountries-backend.labs.crio.do/all";

export default function Countries() {
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_ENDPOINT);
        const jsonRes = await res.json();
        setState(jsonRes);
      } catch (error) {
        console.Error("Error Fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {state.map(({ name, flag, abbr }) => (
        <CountryCard key={abbr} Flagname={name} flag={flag} abbr={abbr} />
      ))}
    </div>
  );
}
