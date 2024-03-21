import React from "react";
// import Header from "../Header/Header";
import ProductBlock from "../ProductBlock/index";
import Header from "../Header/Header";
// import Footer from "../Footer";

// import AboutProduct from "../AboutProduct/AboutProduct";
export default function Home(props) {
  const { hamburger, popupMenu } = props;

  return (
    <React.Fragment>
      <section>
        <ProductBlock />
      </section>
    </React.Fragment>
  );
}
