import React from "react";
import "../css/content.css";

function Content() {
  return (
    <div class="content">
      <div className="card">
        <img
          src="https://www.themealdb.com/images/category/beef.png"
          class="section media"
        />
        <img
          src="https://www.themealdb.com/images/category/chicken.png"
          class="section media"
        />
        <img
          src="https://www.themealdb.com/images/category/lamb.png"
          class="section media"
        />
        <img
          src="https://www.themealdb.com/images/category/pork.png"
          class="section media"
        />
        <img
          src="https://www.themealdb.com/images/category/seafood.png"
          class="section media"
        />
        <img
          src="https://www.themealdb.com/images/category/pasta.png"
          class="section media"
        />
      </div>
      <div className="helper">
        <h3>Judul</h3> <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          ducimus omnis non accusantium totam hic quod sapiente quo rem ea vel
          fuga expedita cum error veniam debitis voluptate doloribus alias!
        </p>
      </div>
    </div>
  );
}

export default Content;
