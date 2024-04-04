import React from "react";
import "./style.scss";
import { isPropertyName } from "typescript";

const propertyValueMap = {
  pressure: "airwave",
  sunrise: "sunny",
  sunset: "water_lux",
  humidity: "humidity_high",
  "": "exclamation"
};

export default function MiniCard(props: { propertyName: string; value: string }) {
    let val = propertyValueMap[props?.propertyName as keyof typeof propertyValueMap] || "";

  return (
    <div className="mini-card-wrapper flex-row">
      {props?.propertyName && <span className={`mini-card-image material-symbols-outlined`}>{val}</span>}
      <div className="property-info">
        <span className="property-info__name">{props.propertyName}</span>
        <span className="property-info__value">{props.value}</span>
      </div>
    </div>
  );
}
{
  /* <span class="material-symbols-outlined">
airwave
</span> */
}

{
  /* <span class="material-symbols-outlined">
sunny
</span> */
}

{
  /* <span class="material-symbols-outlined">
water_lux
</span> */
}

{
  /* <span class="material-symbols-outlined">
humidity_high
</span> */
}
