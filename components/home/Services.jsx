import React from "react";
import ServiceItem from "./ServiceItem";

function Services() {
  return (
    <div>
      Services
      <ServiceItem title="Tieu de A" items={["123", "2354234"]} />
      <ServiceItem title="Tieu de B" />
      <ServiceItem title="Tieu de C" />
      <ServiceItem title="Tieu de D" />
    </div>
  );
}

export default Services;
