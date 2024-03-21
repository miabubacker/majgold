import React, { useEffect, useState } from "react";
import "./Header.scss";
import Menupop from "../MenuPop/Menupop";
import classNames from 'classnames';
import { useNavigate, Link } from "react-router-dom";


export default function Header(props) {
  const { headers, MainPageActions, hamburger, popupMenu, popmenuData } = props;
  
  const [menuoption, setMenuOption] = useState([
    "New",
    "Shop By",
    "Best Sellers",
    "Earrings",
    "Rings",
    "Necklaces",
    "Bracelets",
    "Hoops",
  ]);
   const [storeservice,setStoreService]= useState(['Stores & Services','About Us','Help','Join Now'])
   const [matches, setMatches] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 0);
     };
 
     window.addEventListener('scroll', handleScroll);
 
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);
 

  const useMediaQuery = (query) => {
    
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener("resize", listener);
      return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
  };
  //   const isSmall = useMediaQuery('(min-width: 767px) and (max-width: 1199px)');
  const isMobile = useMediaQuery("(min-width: 319px) and (max-width: 1199px)");

  const ViewDrawer = (event) => {
    MainPageActions.menubar();
    event.stopPropagation();
    // setDrawer(!drawer);
  };
  const handleMouseOver = (e) => {
    const elementname = e.target.innerText;
    MainPageActions.popupmenu(elementname);
  };
  const handleMouseOut = () => {
    MainPageActions.popupmenu("");
  };
  const optiondata = menuoption
    .map((data) => data.toUpperCase())
    .filter((da) => popmenuData[0][da]);
  const options = (e) => {
    e.stopPropagation();
    MainPageActions.popupmenu(e.target.innerText);
  };

  return (
    <>
      { !isMobile &&popmenuData[0][popupMenu] && (
     
        <div style={{transition:" all 0.3s ease-in-out"}}>
          <Menupop
          {...props}
          menuData={popmenuData[0][popupMenu]}
          onMouseOut={handleMouseOut}
        />
        </div>
      )}
      <header  className={classNames('headerContainer', { 'scrolled': isScrolled })}>
     <div className="container">
     <div className="iconAndLogo">
          <i className="fa fa-bars" onClick={(e) => ViewDrawer(e)}></i>
          <h2 onClick={()=>navigate('/',{props})}>MAJ Gold</h2>
        </div>

        <div
          className={` nodrawer ${hamburger ? "drawercheck" : ""}`}
          onClick={(e) => ViewDrawer(e)}
        >
          <div className={`hide ${hamburger ? "show" : "noshow"}`}>
            <div className="menuHeader">
              <i className="fa fa-close" onClick={(e) => ViewDrawer(e)}></i>
            </div>
            <div className="main">
            <div className="menuoption">
              {menuoption.map((option, index) => (
                <ul key={index}>
                  <li onClick={(e) => options(e)}>
                    {option}
                    {optiondata.find(
                      (data) => data === option.toUpperCase()
                    ) && <i className="fa fa-chevron-right icon"></i>}
                  </li>
                </ul>
              ))}
            </div>
            
            <div className="serviceSection">
{storeservice.map((service)=><ul  key={service}><li>{service}</li></ul>)}
            </div>
            <div className="discoverysection">
              <h4>DISCOVER ALL THINGS <br/> MEJURI—AND MORE.</h4>
              <p>One account to shop personalized recommendations<br/> and exclusive products. 
Plus, get priority sale access, <br/>free shipping every Monday, and more. </p>
<button>SIGN IN</button>
<div className="createAccount">
  <p>New To Meruji?   <a>Create Account</a></p>

</div>

            </div>
            </div>
           
            <div className="menuFooter">
              Shipping To:
              <button> Rest of World US$</button>
            </div>
          </div>
     

     </div>
        <nav className="options">
          <ul>
            {menuoption.map((option, index) => (
              <li key={index} onMouseOver={(e) => handleMouseOver(e)}>
                {option}
              </li>
            ))}
          </ul>
        </nav>
        
        </div>
        <div className="buttonSection">
          <i className="fa fa-search icons"></i>
          <i className="fa fa-user icons"></i>
          <i className="fa fa-heart icons"></i>
          <i className="fa fa-shopping-cart icons"></i>
        </div>
      </header>
    </>
  );
}
