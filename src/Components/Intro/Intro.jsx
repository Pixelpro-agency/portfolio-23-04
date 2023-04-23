import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
    // Transition
    const transition = { duration: 2, type: "spring" }; 
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
    <div className="Intro" id="Intro">    
    <div className="i-left">
    <div className="i-name">
        <span style={{ color: darkMode ? "white" : "" }}>Ciao, io sono</span>
        <span>Francesco</span>
        <span>Frontend-Backend Developer con elevata esperienza nel web design
            e sviluppo, <br></br> produco lavoro di ottima qualità</span>
    </div>

    <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Eccomi</button>
        </Link>     
    <div className="i-icons">
        <img src={Github} alt="" />
        <img src={LinkedIn} alt="" />
        <img src={Instagram} alt="" />
    </div>
    </div>
    <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />

        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv img={Crown} text1="Web" text2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatingDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>
        
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>

        </div>
    </div>
    )
}
export default Intro;