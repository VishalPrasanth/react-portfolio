import logo from "../assets/bird.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareLetterboxd } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-3 w-20" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a 
          href="https://www.linkedin.com/in/vishal-prasanth-807059218/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-600"
        ><FaLinkedin /></a>
        <a 
          href="https://github.com/VishalPrasanth" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#333]"
        ><FaGithub /></a>
        <a 
          href="https://letterboxd.com/viz_/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#00D735]"
        ><FaSquareLetterboxd /></a>
        <a 
          href="https://www.linkedin.com/in/your-profile" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#E1306C]"
        ><FaInstagramSquare /></a>

        </div>
    </nav>
  
  )
    
}

export default Navbar