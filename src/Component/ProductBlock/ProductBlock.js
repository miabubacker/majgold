import React, { useEffect, useState } from 'react'
import './Productblock.scss'
import { useNavigate, Link } from "react-router-dom";
export default function ProductBlock(props) {
      const {gridData,gridPoster,storesAndService,productblockActions,selectedProduct} =props
      const navigate = useNavigate();

      const [mainIndex, setMainIndex] = useState(null);
       const[infinateImg,setInfinateImg]=useState(0)
      const handleCellHover = (index) => {
        setMainIndex(index)
      };

    
      const handleCellLeave = () => {
        setMainIndex(null)
      };
      useEffect(() => {
        const intervalId = setInterval(() => {
          setInfinateImg((prevIndex) => (prevIndex + 1) % storesAndService.length);
        }, 3000); // Change the interval duration as needed (in milliseconds)
    
        return () => {
          clearInterval(intervalId);
        };
      }, []); 
      
       const selectProduct=(e)=>{
productblockActions.selectedtype(e.target.innerText)
navigate('/AboutProduct',{props});
       }
        
  return (
   <section className='ProductContainer'>
     {/* <div className='poster'>
     <div className='posterContent'>
   <h1>BEST SELLERS</h1>
   <a>SHOP NOW</a>
    </div> 
     </div>   */}
    <section className='sideGrid'>
        {gridData.map(({title,imgs},index)=><div 
        // lassName='column'
         key={title}  
          className={`column ${mainIndex === index ? 'hovered' : 'nohover'}`}
          onMouseOver={() => handleCellHover(index)}
          onMouseLeave={handleCellLeave}
          style={{ backgroundImage: `url(${ mainIndex === index?imgs[1]:imgs[0]})` }}
          onClick={(e)=>selectProduct(e)}
          >
   
            <div className='gridTitle'>   {title}<span></span></div>
          </div>)}
    </section>
    
    <section className='gridPoster'>
    {gridPoster.map(({title,imgs,buy},index)=><div className='gridPost'>
        <img src={imgs}/>
<div className='posterContent'>
<h1 className={index===1&&'title2'}>{title}</h1>
<button className={index===1&&'button2'}>{buy}</button>

</div>
    </div>)}
    </section>
    <section className='main_spinner'>

<div className="roll">
    <div className="btns">ui/ux Designer</div>
    <div className="btns">Interaction Test</div>
    <div className="btns">Design Sprint</div>
    <div className="btns">Interaction Design</div>
    <div className="btns">Project Mangement</div>
    <div className="btns">Workshop</div>
    <div className="btns">Usablity Testing</div>
    <div className="btns">ui/ux Designer</div>
</div>
    </section>
    <section className='service'>

{/* <div className='stores'><img src={storesAndService[infinateImg].productimg} /><span>{storesAndService[infinateImg].country}</span></div>
<div>111</div> */}
    </section>
   
   </section>
  )
}
