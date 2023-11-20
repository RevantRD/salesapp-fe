import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Add sale page component
function AddSales() {
  //UseState for adding data the database and set default value to nothing
  const [product, setProduct] = useState({
    productName: "",
    quantity: "",
    amount: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Fetch method to fetch the api and POST to add data
    try {
      await fetch("http://localhost:5000/api/product", {
        method: "POST",
        body: JSON.stringify(product),
        headers: { "content-type": "application/json" },
      });
      //Toast library for displaying alert
      if (!product.productName || !product.quantity || !product.amount) {
        toast.error("All fields must be filled!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.success("Product Added!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center mb-3 mt-4">ADD SALE ENTRY</h1>
          {/* To get user input using useState */}
          <form onSubmit={handleSubmit}>
            <label className="form-label">Product name</label>
            <input
              type="text"
              className="form-control mb-2"
              value={product.productName}
              onChange={(e) =>
                setProduct({ ...product, productName: e.target.value })
              }
            />
            <label className="form-label">Quantity</label>
            <input
              type="text"
              className="form-control mb-2"
              value={product.quantity}
              onChange={(e) =>
                setProduct({ ...product, quantity: e.target.value })
              }
            />
            <label className="form-label">Amount</label>
            <input
              type="text"
              className="form-control mb-2"
              value={product.amount}
              onChange={(e) =>
                setProduct({ ...product, amount: e.target.value })
              }
            />
            {/* Submit button */}
            <button className="w-100 mt-3 btn btn-primary">Submit</button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddSales;
