// import { useRef } from "react";
import { FaBars,FaEnvelope,FaPhoneSquare,FaUserCircle } from "react-icons/fa";
import "../pages/Home.css";
import Bg1 from "./image/priya2.jpg";
import Bg2 from "./image/main1.jpg";
import Bg3 from "./image/main2.jpg";
import Bg4 from "./image/priyaphoto.jpg";
import Bg5 from "./image/background.jpg";
const Home = () => {
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
    <div className="logo"> 
    <div class="navi2" id="menu">
            <img src={Bg1} alt='logo' width='200px' height='200px' style={{border:'1px solid white',borderRadius:'50%'}}/>
            
                <nav>
                    <a href="#Home">Home</a>
                    <a href="./Service">Service</a>
                    <a href="#page3">Contact</a>
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
                <a href="/Register" style={{height:'15px',width:'100px',backgroundColor:'#e77882',border:'#e77882',color:'white',fontSize:'15px',marginLeft:'50px',textDecoration:'none '}}  ><FaUserCircle/> Account  </a>
                <a href="/#" style={{height:'15px',width:'100px',backgroundColor:'#e77882',border:'#e77882',color:'white',fontSize:'15px',marginLeft:'50px',textDecoration:'none '}} > Logout </a>
            </div>
            <buttton className ="menu-btn" onClick={openMenu} class={{color:'white'}}> <FaBars/> </buttton>
        </div>   
     </div>
   </header>
    <div className="container1">
        <div className="quote">
            <img src={Bg5} alt="backpic" height="400px" width="400px" style={{position:'relative',top:'-200px',left:'-200px'}}/>
        </div>
        <div className="pic1">
        <img src={Bg2} alt="photo1" height="500px" width="300px"/>
        <img src={Bg3} alt="photo2" height="500px" width="300px"/>
        </div>
    </div>
    <div className="container2" id="page2">
        <div className="card1"> 
            <h2 style={{textDecoration:'underline rgb(251,33,117)'}}>Little About Me</h2>
                <h3>Professional makeup artists enhance your facial features and give you a sculpted look.I will provide you with the highest quality of our service.I am also a freelance makeup artist and offers freelance services all over Chennai and TamilNadu. </h3>
        </div>
        <div className="card2">
            <h2 style={{textDecoration:'underline rgb(251,33,117)'}}> About My Other Service</h2>
                <h2> I offer professional saree draping (including pre-pleating), precise threading for perfectly shaped brows, and elegant hairstyling for every occasion.I’ll ensure you look stunning—all at affordable prices that suit your budget.</h2>   
        </div>
    </div>
    <div className="container3" id="page3">
                <div className="contact1">
                    <img className="img1" src={Bg4} alt='priya' height='200px' width='200px' />
                    <h3> Priya Beauty specialist</h3>
                </div>
                <div className="contact2">
                    <h2> Contact our Beauty Specialist </h2>
                    <h3><FaPhoneSquare/> +91 7200776505 </h3>
                    <h3><FaEnvelope/> priyaamuthini@gmail.com  </h3>
                </div>
    </div>
    </>
  );
};

export default Home; 