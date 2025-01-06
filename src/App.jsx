import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAllProducts, useDeleteProducts } from "./query/ProductQuery";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
function App() {
  const { data: products, isLoading, isError } = useAllProducts();
  const deleteMutation = useDeleteProducts();
  const [error, setError] = useState(null);
  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Error loading products. Please try again later.</p>;

  const handleDelete = (id) => {
    console.log(id);
    
    deleteMutation.mutate(id, {
      onSuccess: () => {
        setError(null);
      },
      onError: (err) => {
        setError("Failed to delete the product. Please try again.");
         console.log(error);
         // Log the error for debugging
      },
    });
  };
  return (
    <>
      <Helmet>
        <title>App | page</title>
      </Helmet>
      <h3 className="text-info">My store</h3>
      <div className="container">
        <div className="row d-flex justify-content-around">
          {products.map((one) => (
            <div className="col-md-4 col-sm-12 col-lg-3 card mt-3" key={one.id}>
              <div className="card-header">
                <p> Title - {one.title} </p>
                <img src={one.image} alt="" className="w-50 " />
              </div>
              <div className="card-body p-3">
                <p>Price - {one.price} </p>
                <p>Category : {one.category} </p>
                <div className="d-flex justify-content-between w-10">
                   <Link to={`/detail/${one.id}`}>
                   <button className="btn btn-primary">See more</button>
                   </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(one.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
