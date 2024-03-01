import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/foods.css";
import Swal from "sweetalert2";

const baseURL = "http://localhost:3001/categories";
const FormatDescription = (description) => {
  return description.substring(0, 50) + "...";
};

function Foods(props) {
  const [data, setData] = useState([]);
  const buy = () => {
    Swal.fire({
      title: " Thanks For Buying!",
      text: " Your Food is Being Cooked !",
      icon: "success",
    });
  };

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Foods">
      {data.map((item) => (
        <div key={item.idCategory} className="card_foods">
          <img src={item.strCategoryThumb} alt={item.strCategory} />
          <section>
            <h5>
              <strong> {item.strCategory}</strong>
            </h5>
            <p>{FormatDescription(item.strCategoryDescription)}</p>
            <button onClick={buy}>Buy</button>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Foods;


