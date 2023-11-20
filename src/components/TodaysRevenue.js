import React, { useEffect, useState } from "react";
//TodaysRevenue page component to find the sum of all products sale amount
function TodaysRevenue() {
  const [totalAmount, setTotalAmount] = useState(null);
  //Fetch method to fetch api
  useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/product/total");
        const data = await response.json();
        setTotalAmount(data.totalAmount);
      } catch (error) {
        console.error("Error fetching total amount:", error);
      }
    };

    fetchTotalAmount();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {localStorage.getItem("token") ? (
            <h2 className="text-center mt-4">
              Today's Revenue is {totalAmount}
            </h2>
          ) : (
            <h2 className="text-center mt-4">Login to see the revenue</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodaysRevenue;
