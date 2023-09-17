import { createContext, useState, useEffect, useContext } from "react";

const BASE_URL = "http://localhost:5000/cities";
const CitiesContext = createContext();
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function getCities() {
      try {
        setIsLoading(true);
        const res = await fetch(BASE_URL);
        if (!res.ok) throw new Error("Not getting city data!!");
        const data = await res.json();
        setIsLoading(false);
        setCities(data);
      } catch (err) {
        alert("There is an error while loading data....");
      }
    }
    getCities();
  }, []);

  async function getCurrentCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/${id}`);
      if (!res.ok) throw new Error("Not getting city data!!");
      const data = await res.json();
      setIsLoading(false);
      setCurrentCity(data);
    } catch (err) {
      alert("There is an error while loading data....");
    }
  }

  async function createCity(city) {
    try {
      setIsLoading(true);
      const res = await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(city),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Not getting city data!!");
      const data = await res.json();
      setCities(cities=>[...cities,data]);
    } catch (err) {
      alert("There is an error while sending data....");
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });
      setCities(cities=>cities.filter(city=>city.id!=id));
    } catch (err) {
      alert("There is an error while deleting data....");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCurrentCity,
        createCity,
        deleteCity
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const obj = useContext(CitiesContext);
  if (obj === undefined)
    throw new Error("CitiesContext cannot be accessed here !!");
  return obj;
}

export { CitiesProvider, useCities };
