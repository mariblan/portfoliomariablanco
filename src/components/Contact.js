import React from "react";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "../contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  const [input, setInput] = useState({ name: "", email: "", message: "" });
  const form = useRef();
  const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
  const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const publickey = process.env.REACT_APP_YOUR_PUBLIC_KEY;
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    if (input.name === "" || input.email === "" || input.message === "") {
      alert("Please fill all the fields");
    } else {
      console.log(serviceId, templateId, publickey);
      emailjs.sendForm(serviceId, templateId, form.current, publickey).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setInput({
        ...input,
        name: "",
        email: "",
        message: "",
      });
      alert("Thank you for your message");
    }
  };
  return (
    <div className="contact">
      <Navbar />
      <div className="contactpage">
        <h1>Contact me</h1>
        <div className="contact-container">
          <div className="contact-box1">
            <h4>You can write me through the contact box...</h4>
            <div className="contact-box">
              <form
                ref={form}
                id="contact-form"
                onSubmit={handleSubmit}
                method="POST"
              >
                <div className="formular">
                  <div className="form-group1">
                    <label htmlFor="name">Name</label>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <label htmlFor="message">Message</label>
                  </div>
                  <div className="form-group2">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={input.name}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={input.email}
                      onChange={handleChange}
                    />
                    <textarea
                      className="form-control"
                      rows="5"
                      type="text"
                      placeholder="Write your message here..."
                      name="message"
                      value={input.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <button type="submit" value="Send" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="contact-box2">
            <h4>Or you can also reach me through...</h4>
            <div className="lists">
              <ul className="list1">
                <a href="https://www.linkedin.com/in/maria-blanco-2b403523b/">
                  <li>
                    <img src="#" />
                  </li>
                </a>
                <a href="mailto:blanco.canal.m@gmail.com">
                  <li>
                    <img src="#" />
                  </li>
                </a>
              </ul>
              <ul className="list2">
                <a href="https://www.linkedin.com/in/maria-blanco-2b403523b/">
                  <li>Linkedin</li>
                </a>
                <a href="mailto:blanco.canal.m@gmail.com">
                  <li>Email</li>
                </a>
              </ul>
            </div>
            <h4>
              And if you want to know more about my work, don't forget to
              checkout my:
            </h4>
            <div className="lists">
              <ul className="list1">
                <a href="#">
                  <li>
                    <img src="#" />
                  </li>
                </a>
                <a href="#">
                  <li>
                    <img src="#" />
                  </li>
                </a>
              </ul>
              <ul className="list2">
                <a href="#">
                  <li>Github</li>
                </a>
                <a href="#">
                  <li>Projects</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
