import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Card } from '../components/Card';
import { Carousel } from '../components/Carousel';

export const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:8080/api/foodData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
      });

      response = await response.json();

      setFoodItem(response[0]);
      setFoodCat(response[1]);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div><Navbar /></div>
      <div><Carousel /></div>
      <div className="container">
        {foodCat.length > 0 ? (
          foodCat.map((data) => (
            <div key={data._id} className="row mb-5">
              <div className="fs-3 m-3">{data.categoryName}</div>
              <hr />
              <div className="row">
                {foodItem.length > 0 ? (
                  foodItem
                    .filter((item) => item.CategoryName === data.categoryName)
                    .map((filteredItem) => (
                      <div key={filteredItem._id} className="col-12 col-md-6 col-lg-3 mb-3 me-5">
                        <Card 
                          foodName={filteredItem.name}
                          options={filteredItem.options}
                          imgsrc={filteredItem.img}
                          description={filteredItem.description} 
                        />
                      </div>
                    ))
                ) : (
                  <div>No food items found for this category</div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>No categories available</div>
        )}
      </div>
      <div><Footer /></div>
    </div>
  );
};
