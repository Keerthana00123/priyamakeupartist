// import { useRef } from "react";
import { FaBars,FaPhoneSquare,FaEnvelope,FaUserCircle} from "react-icons/fa";
import Bg1 from "./image/priya2.jpg";
import "../pages/Service.css";
import gp from  "./image/gp.jpg";
import gp1 from "./image/gp1.jpg";
// import gp2 from "./image/gp2.jpg";
import gp3 from "./image/gp3.jpg";
import gp4 from "./image/gp4.jpg";
import gp5 from "./image/gp5.jpg";
import  gp6 from "./image/gp6.jpg";

const Service = () => {

        // const navRef= useRef();
    
        // const showNavbar = () =>{
        //     navRef.current.classList.toggle("responsive_nav");
        // }
        const openMenu = () => {
                if(document.getElementById("menu").style.display === "none"){
                document.getElementById("menu").style.display="flex"
                    }else{
        document.getElementById("menu").style.display="none"
        }
    }
  return (
    <>
         <header>
         <div class="navi2" id="menu">
            <img src={Bg1} alt='logo' width='200px' height='200px' style={{border:'1px solid white',borderRadius:'50%'}}/>
            
                <nav>
                    <a href="./Home">Home</a>
                    <a href="#/service">Service</a>
                    <a href="./Home/#page3">Contact</a>
                    {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                            <FaTimes/>
                    </button> */}
                </nav>
                {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaBars/>
                </button> */}
                <div className="title">
                    <h5 className="num"> <FaPhoneSquare/> +91 7200776505 </h5>
                    <h5 className="mail"> <FaEnvelope/> priyaamuthini@gmail.com </h5>
                    <a href="/Register" style={{height:'15px',width:'100px',backgroundColor:'#e77882',border:'#e77882',color:'white',fontSize:'15px',marginLeft:'50px',textDecoration:'none '}} ><FaUserCircle/> Account  </a>
                    <a href="/#" style={{height:'15px',width:'100px',backgroundColor:'#e77882',border:'#e77882',color:'white',fontSize:'15px',marginLeft:'50px',textDecoration:'none '}}  > Logout </a>
             </div>
             <buttton className ="menu-btn" onClick={openMenu} class={{color:'white'}}> <FaBars/> </buttton>
            </div>
   </header>
   <div className="container4">
   <div className="card3">
                <h3> Bridal Makeup </h3>
                <h3> Party Makeup </h3>
                <h3> Engagement Makeup </h3>
                <h3> Pre-Bridal Makeup </h3>
                <h3> Outdoor Makeup</h3>
                <a href="./Home#/page3"><button className="third"> Contact </button></a>
        </div>
        <div className="card4">

                <h3> Hair Stylist </h3>
                <h3> Saree Drapist </h3>
                <h3> Pre-Pleat Saree</h3>
                <h3>  Threading </h3>
                <a href="./Home"><button className="third"> Contact </button></a>
        </div> 
   </div>
        <div className="container5">
            <h1 style={{padding:'50px'}}>My Galleries </h1>
            <div className="photos1">
                <img className="img2" src={gp} alt='priya' height='500px' width='300px' />
                <img className="img2" src={gp1} alt='priya' height='500px' width='300px' />
                {/* <img className="img2" src={gp2} alt='priya' height='500px' width='300px' /> */}
                <img className="img2" src={gp3} alt='priya' height='500px' width='300px' />
            </div>
            <div className="photos2">
                <img className="img3" src={gp4} alt='priya' height='500px' width='300px' />
                <img className="img3" src={gp5} alt='priya' height='500px' width='300px' />
                <img className="img3" src={gp6} alt='priya' height='500px' width='300px' />
            </div>
            
        </div>
    </>
  );
}

export default Service;