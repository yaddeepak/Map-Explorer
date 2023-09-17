import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const CityItem = ({ city }) => {
  const { cityName, emoji, date, id, position } = city;
  const { lat, lng } = position;
  const { deleteCity } = useCities();

  function handleDelete(e, id) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link className={styles.cityItem} to={`${id}?lat=${lat}&lng=${lng}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <p className={styles.date}>{date.slice(0, 10)}</p>
        <button
          className={styles.deleteBtn}
          onClick={(e) => handleDelete(e, id)}
        >
          &times;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;
