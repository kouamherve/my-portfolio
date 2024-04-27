import React from "react";

export default function CardTech({ iconName, title }) {
  return (
    <div>
      <h4 className="text-[9px]">{title}</h4>
      <img
        className=" size-20 object-cover contrast-75 grayscale hover:grayscale-0"
        src={`/assets/icons/icons8-${iconName}-144.png`}
        alt="html"
      />
    </div>
  );
}
