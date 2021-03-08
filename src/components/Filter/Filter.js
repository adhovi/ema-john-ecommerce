import React from "react";
import fakeData from "../../fakeData";

const Filter = (props) => {
  const { setProducts } = props;

  const filterAll = () => {
    const all = fakeData;
    setProducts(all);
  };
  const filterLaptop = () => {
    const laptop = fakeData.filter((pd) => pd.category === "laptop");
    setProducts(laptop);
  };
  const filterMobile = () => {
    console.log("btn");
    const mobile = fakeData.filter((pd) => pd.category === "android");
    setProducts(mobile);
  };
  const filterCamera = () => {
    console.log("btn");
    const camera = fakeData.filter((pd) => pd.category === "camera");
    setProducts(camera);
  };
  return (
    <div className="filter-btn-group d-flex justify-content-center my-4">
      <button onClick={filterAll} className="btn btn-dark mx-2">
        All
      </button>
      <button onClick={filterLaptop} className="btn btn-light mx-2">
        Laptop
      </button>
      <button onClick={filterMobile} className="btn btn-light mx-2">
        Mobile
      </button>
      <button onClick={filterCamera} className="btn btn-light mx-2">
        Camera
      </button>
    </div>
  );
};

export default Filter;
