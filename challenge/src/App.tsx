import Card from "./components/Card";
import Heading from "./components/Heading";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  });
  console.log(data);
  return (
    <>
      <div className="appContainer">
        <div>
          <Heading />
        </div>

        <div className="cardWrap">
          {data.map((data, index) => {
            return (
              <>
                {
                  <Card
                    source={data.image}
                    name={data.title}
                    material={data.description}
                    amount={data.price}
                  />
                }
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
