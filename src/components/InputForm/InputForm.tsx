import React, { useState, useEffect } from "react";

import "./style.scss";

interface InputFormProps {
  fetchData: Function
}

export default function InputForm(props: InputFormProps) {
  const [cityName, setCityName] = useState("");

  const onCityNameChanged = (e: any) => {
    setCityName(e.target.value);
  };

  return (
    <form className="weather-search-form" onSubmit={(event) => {props.fetchData(event, cityName); setCityName("")}}>
      <input className="city-input" type="text" name="city-name" placeholder="Enter city name" id="city-input" value={cityName} onChange={onCityNameChanged} />
      <button className="submit-city-button material-symbols-outlined" type="submit">
        Search
      </button>
    </form>
  );
}
