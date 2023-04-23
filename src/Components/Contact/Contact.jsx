import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
        'service_f5eospr', 
        'template_9hbs0me', 
        form.current, 
        'T0eewF6hqySzYujwQ')

        .then(
            (result) => {
              console.log(result.text);
              setDone(true);
              form.reset();
            },
            (error) => {
              console.log(error.text);
            }
          );
      };

      return (
        <div className="contact-form" id="contact">
          {/* left side copy and paste from work section */}
          <div className="w-left">
            <div className="awesome">
              {/* darkMode */}
              <span style={{color: darkMode?'white': ''}}>Mettiti in contatto</span>
              <span>Contattami</span>
              <div
                className="blur s-blur1"
                style={{ background: "#ABF1FF94" }}
              ></div>
            </div>
          </div>
          {/* right side form */}
          <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" className="user"  placeholder="Nome"/>
              <input type="email" name="user_email" className="user" placeholder="Email"/>
              <textarea name="message" className="user" placeholder="Messaggio"/>
              <input type="submit" value="Invia" className="button"/>
              <span>{done && "Grazie per avermi contattato!"}</span>
              <div
                className="blur c-blur1"
                style={{ background: "var(--purple)" }}
              ></div>
            </form>
          </div>
        </div>
      );
    };
    
    export default Contact;