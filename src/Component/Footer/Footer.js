import React from "react";
import "./Footer.scss";

export default function Footer(props) {
  const { contract } = props;
  console.log(contract);
  console.log(props);
  return (
    <>
      <section className="footersectionMain">
        <section className="contract">
          {contract.map(({ title, details }, index) => (
            <div className="columnContainer" key={index}>
              <h5>{title}</h5>
              {details.map((detaildata, index) => (
                <ul key={index}>
                  <li>{detaildata}</li>
                </ul>
              ))}
            </div>
          ))}
        </section>
        <div className="membership">
          <div className="topSection">
            <p className="logo">M+ </p>
            <p className="name">BECOME A MEMBER</p>
          </div>
          <div className="lowerSection">
            <p className="about">
              Join MajGold for free and discover exclusive access to our biggest
              drops, promotions, members-only products, and more.
            </p>
            <button>Join now for free</button>
          </div>
        </div>
      </section>
      <section className="subFooter">
        <div className="shipping">
          <h6>Shipping To: </h6>
          <button>Rest of World{`(US$)`}</button>
        </div>
        <div>
          <div className="termsAndSocial">
            <ul className="terms">
              <li>
                <a>MajGold Membership </a>
              </li>
              <li>
                <a>Terms and Conditions</a>
              </li>
              <li>
                <a> Privacy Policy</a>
              </li>
              <li>
                <a> © 2024 MajGold Inc.</a>
              </li>
            </ul>
            



            <ul className="socialnetwork">
              <li>
                {" "}
                <i className="fa fa-facebook icons"></i>
              </li>
              <li>
             
                <i className="fa fa-instagram icons"></i>
              </li>
              <li>
         
                <i className="fa fa-twitter icons"></i>
              </li>
              <li>
    
                <i className="fa fa-google-plus icons"></i>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}










