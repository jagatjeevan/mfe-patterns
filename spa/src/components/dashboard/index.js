import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { label } from "../../configs/labels";
import Categories from "../categories";
import { DashboardContainer, Loading, CategoryHeading } from "./style";

const Dashboard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  const showCategories = () => {
    return categories.map((category, index) => (
      <div>
        <CategoryHeading key={`${category}-${index}`}>
          <Link to={`/${category}`}>{category}</Link>
        </CategoryHeading>
        <Categories
          categoryName={category}
          key={category}
          isCategoryPassed={true}
        />
      </div>
    ));
  };

  if (!categories.length) {
    return (
      <DashboardContainer>
        <Loading>{label.loading}</Loading>
      </DashboardContainer>
    );
  }

  return <DashboardContainer>{showCategories()}</DashboardContainer>;
};

export default Dashboard;
