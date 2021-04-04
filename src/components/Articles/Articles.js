import React from "react";
import Title from "../Title/Title";
import Card from "../Card/Card";
import "./Articles.css";

import post1 from "../../assets/post_1.png";
import post2 from "../../assets/post_2.png";
import post3 from "../../assets/post_3.png";

const Articles = () => {
  const articles = [
    {
      imageUrl: post1,
      text: "How to use mindfulness in your everyday life",
    },
    {
      imageUrl: post2,
      text: "How to use mindfulness in your everyday life",
    },
    {
      imageUrl: post3,
      text: "How to use mindfulness in your everyday life",
    },
  ];

  return (
    <section className="background-gray section-space" id="articles-section">
      <div className="container">
        <Title subtitle="ULTIMOS ARTICULOS" bottomDivider />
        <div className="container mt-5">
          <div className="row">
            {articles.map((data, index) => (
              <Card
                img={data.imageUrl}
                text={data.text}
                key={"postId" + index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
