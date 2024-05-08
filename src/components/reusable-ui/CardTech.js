import React from "react";

export default function CardTech({ iconName, title }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h4 className="text-[9px] md:text-[8px]">{title}</h4>
      <img
        className=" size-16 object-cover object-center contrast-75 grayscale hover:grayscale-0 md:size-12"
        src={`/assets/icons/icons8-${iconName}-144.png`}
        alt="html"
      />
    </div>
  );
}
