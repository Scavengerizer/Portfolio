import React, { useEffect } from "react";
import gsap from "gsap";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/01 header";
import Home from "./components/02 home";
import About from "./components/03 about";
import Work from "./components/04 work";
import Contact from "./components/05 contact";
import Footer from "./components/06 footer";

import "./styles/app.scss";

function App() {
  useEffect(() => {
    // prevent flashing
    gsap.to("body", { duration: 0, css: { visibility: "visible" } });

    document.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".cursor");
      const cursorFollower = document.querySelector(".cursor-follower");
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursorFollower.style.left = `${e.clientX}px`;
      cursorFollower.style.top = `${e.clientY}px`;
    });

    // overlay animation
    // let tl1 = gsap.timeline();
    // tl1
    //   .to(".text-show", {
    //     ease: "power1.out",
    //     y: "0%",
    //     duration: 1.2,
    //     stagger: 0.25,
    //   })
    //   .to(".slider", {
    //     ease: "power1.out",
    //     y: "-1000%",
    //     skewY: 2,
    //     delay: 1.5,
    //     duration: 3.4,
    //   })
    //   .to(
    //     ".overlay",

    //     {
    //       ease: "power1.out",

    //       y: "-110%",
    //       duration: 1.5,
    //       skewY: 2,
    //     },
    //     "-=3.3"
    //   );
  }, []);

  return (
    <div className='app'>
      <Header />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
