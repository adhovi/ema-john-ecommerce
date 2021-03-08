import React, { useState } from "react";
import fakeData from "../../fakeData";

const Filter = (props) => {
  const { setProducts } = props;

  const [allClass, setAllClass] = useState("btn btn-light mx-2 btn-dark");
  const [laptopClass, setLaptopClass] = useState("btn btn-light mx-2");
  const [mobileClass, setMobileCLass] = useState("btn btn-light mx-2");
  const [cameraClass, setCameraClass] = useState("btn btn-light mx-2");

  const filterAll = () => {
    const all = fakeData;
    setProducts(all);

    setAllClass("btn btn-light mx-2 btn-dark");
    setLaptopClass("btn btn-light mx-2");
    setMobileCLass("btn btn-light mx-2");
    setCameraClass("btn btn-light mx-2");
  };
  const filterLaptop = () => {
    const laptop = fakeData.filter((pd) => pd.category === "laptop");
    setProducts(laptop);

    setAllClass("btn btn-light mx-2");
    setLaptopClass("btn btn-light mx-2 btn-dark");
    setMobileCLass("btn btn-light mx-2");
    setCameraClass("btn btn-light mx-2");
  };
  const filterMobile = () => {
    console.log("btn");
    const mobile = fakeData.filter((pd) => pd.category === "android");
    setProducts(mobile);

    setAllClass("btn btn-light mx-2");
    setLaptopClass("btn btn-light mx-2");
    setMobileCLass("btn btn-light mx-2 btn-dark");
    setCameraClass("btn btn-light mx-2");
  };
  const filterCamera = () => {
    console.log("btn");
    const camera = fakeData.filter((pd) => pd.category === "camera");
    setProducts(camera);

    setAllClass("btn btn-light mx-2");
    setLaptopClass("btn btn-light mx-2");
    setMobileCLass("btn btn-light mx-2");
    setCameraClass("btn btn-light mx-2 btn-dark");
  };
  return (
    <div className="filter-btn-group d-flex justify-content-center my-4">
      <button onClick={filterAll} className={allClass}>
        All
      </button>
      <button onClick={filterLaptop} className={laptopClass}>
        Laptop
      </button>
      <button onClick={filterMobile} className={mobileClass}>
        Mobile
      </button>
      <button onClick={filterCamera} className={cameraClass}>
        Camera
      </button>
    </div>
  );
};

export default Filter;
