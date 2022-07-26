import React, { useEffect, useState } from "react";
import { label } from "../../configs/labels";
import Categories from "../categories";
import { DashboardContainer, Loading } from "./style";

const Dashboard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  const showCategories = () => {
    return categories.map((category) => (
      <Categories categoryName={category} key={category} />
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
