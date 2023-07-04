import React from "react";
import { Button } from "./Button";
import "../App.css";

function Heading() {
  return (
    <div className="heading">
      <div>
        <Button type="button" name="Filter" />
      </div>
      <div> Icons</div>
      <div>
        <Button type="button" name="Sort" />
      </div>
    </div>
  );
}

export default Heading;
