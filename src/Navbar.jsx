import './Nav.css';
import { CiLinkedin } from "react-icons/ci";
import { FaBehanceSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaHtml5  } from 'react-icons/fa';
import { IoLogoCss3 } from "react-icons/io5"
import { IoLogoJavascript } from "react-icons/io";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";


function Navbar(){
    return(
        <>
        
        <div className='nav_Container'>
            <div className='nav'>
                <div>Home</div>
                <div>Case Studies</div>
                <div>Testimonaials</div>
                <div>Recent Work</div>
                <div>Get In Toutch</div>
                <div> <CiLinkedin /> <FaBehanceSquare /> <FaTwitter /></div>
            </div>

            <div className='about_section'>
                <div>
                    <h1>Ankit Yadav</h1>
                    <p>Hello! My name is Ankit Yadav. I am a passionate student with a strong interest in programming and web development. I enjoy learning new technologies and building creative projects. I have knowledge of Java, JavaScript, and React, and I am continuously working to improve my skills and gain real-world experience.</p>
                    <div className='button'><span>Let's Get Started </span></div>
                </div>
                <div>
                    <img src="/public/Ankit.jpeg" alt="" />
                </div>
            </div>
          <div className='about_skill'>
            <h3> My Skills</h3>

          </div>

          <div className='skill_container'>
                <div><span><FaHtml5 size={30}/></span></div>
                <div><span><IoLogoCss3 size={30}/></span></div>
                <div><span><IoLogoJavascript size={30}/></span></div>
                <div><span><FaPhp size={50}/></span></div>
                <div><span><SiMysql size={50} /></span></div>
                <div><span><FaLaravel size={30}/></span></div>
            </div>
        </div>

        
        
        </> 
    )
} 

export default Navbar;