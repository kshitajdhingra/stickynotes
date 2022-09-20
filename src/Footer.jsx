import React from "react";
import './App.css';


const Footer = () =>{

    const year = new Date().toLocaleDateString();
   
  return ( 
  <>
  <footer> <p>Date - {year} </p></footer>
  </>
  );
}

export default Footer;