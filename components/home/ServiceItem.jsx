import React from "react";

function ServiceItem({ title, items = [] }) {
  return (
    <div>
       {/* ok */}
      <h1>{title}</h1>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceItem;
