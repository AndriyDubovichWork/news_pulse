import React from "react";
import Category from "./Category/Category";
import style from "./CategoriesWidget.module.scss";
import useCategories from "@/app/hooks/useCategories";

export default function CategoriesWidget() {
  const categories = useCategories();
  return (
    <div className={style.categories}>
      {categories.map((category) => (
        <Category category={category} key={category.name} />
      ))}
    </div>
  );
}
