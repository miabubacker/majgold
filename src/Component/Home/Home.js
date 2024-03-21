import React from "react";
// import "./Home.scss";
// import Header from "../Header/Header";
import ProductBlock from "../ProductBlock/index";
import Header from "../Header/Header";
// import Footer from "../Footer";

// import AboutProduct from "../AboutProduct/AboutProduct";
export default function Home(props) {
  const { hamburger, popupMenu } = props;

  return (
    <React.Fragment>
      <section
        // className={hamburger ? "MainPage_container menu" : "MainPage_container"}
      >
        {/* {loading ? */}
        <>
          {/* <Header {...props} /> */}
          <ProductBlock/>
          {/* <Footer/> */}
       
        </>
        {/* // : <div className="loading">Loading...</div> */}
      </section>
    </React.Fragment>
  );
}
