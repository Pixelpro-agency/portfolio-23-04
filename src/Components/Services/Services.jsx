import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from './resume.pdf';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";


const Services = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
    // transition
    const transition = {
      duration: 1,
      type: "spring",
    };

    return (
        <div className="services" id="services">
            <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>I Miei Fantastici</span>
            <span>Servizi</span>
            <spane>
                Lorem ispum is simpley dummy text of printing of printing Lorem
                <br />
                ispum is simpley dummy text of printing
            </spane>
            <a href={Resume} download>
            <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            <div className="cards">
                <div style={{left: '14rem'}}>

                    {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
                </div>
                <div style={{ top: "12rem", left: "-4rem" }}>

                    {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
                </div> 
                <div style={{ top: "19rem", left: "12rem" }}>

                    
                <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        
          <div className="blur s-blur2" style={{ background: "var(--purple)" }}>
            
          </div>

                </div>
            </div>

        </div>
    )
}


export default Services;
