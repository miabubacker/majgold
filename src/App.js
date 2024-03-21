
// import { Buffer } from "buffer";
// import "./App.css";

// import { useState, useEffect } from "react";

// function App() {
//   const [email, setEmail] = useState("");
//   const [fullname, setFullname] = useState("");
//   const [password, setPassword] = useState("");
//   const [token, setToken] = useState("");
//   const [products, setProducts] = useState([]);
//   const [loginPage, setLoginPage] = useState(false);
//   const [register, setRegistor] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:4000/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((error) => alert(error));
//   }, []);

//   return (
//     <section className="parentContainer">
//     {products.map((product)=><div><img src={product.imageData}/></div>)}
//     </section>
//   );
// }

// export default App;




 import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import MainPage from './Component/MainPage';

function App(props) {
   console.log(props)

  return (
    <>
  
     <BrowserRouter>
    <Routes>
        <Route path='*' element={<MainPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


