import React, { useEffect, useState } from "react";
import axios from "axios";

//Top5Sale page component
function Top5Sale() {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Fetch top 5 sales products from the server
    axios
      .get("http://localhost:5000/api/product/topsales")
      .then((response) => setList(response.data))
      .catch((error) =>
        console.error("Error fetching top sales products:", error)
      );
  }, []);
  return (
    <div className="container  ">
      <div className="row ">
        <div className="col ">
          <h1 className=" text-center mt-4">TOP 5 SALE</h1>
          {/* Display the data in table */}
          <div className="table-responsive">
            <table className=" table mt-3 table-striped w-75 mx-auto text-center table-hover">
              <thead>
                <tr className="table-dark">
                  <th>#</th>
                  <th>Sales id</th>
                  <th>Product name</th>
                  <th>Quantity</th>
                  <th>Sale amount</th>
                </tr>
              </thead>
              {localStorage.getItem("token") ? (
                <tbody>
                  {list.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{`S${index + 1314}`}</td>
                      <td>{item.productName}</td>
                      <td>{item.quantity}</td>
                      <td>{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tr>
                  <td colSpan={4}>
                    <h3 className="mt-4 text-muted">No data to display</h3>
                  </td>
                </tr>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top5Sale;
