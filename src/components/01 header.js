import React, { useEffect, useState } from "react";
import gsap from "gsap";

function Header() {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
  });

  const handleMenu = () => {
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
      });
    }
  };

  const hover1 = (e) => {
    gsap.to(e.target, {
      duration: 0.1,
      y: 3,
      skewX: 4,
      ease: "power3.inOut",
    });
  };

  const hover2 = (e) => {
    gsap.to(e.target, {
      duration: 0.1,
      y: -3,
      skewX: 0,
      ease: "power3.inOut",
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".cursor");
      const cursorFollower = document.querySelector(".cursor-follower");
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursorFollower.style.left = `${e.clientX}px`;
      cursorFollower.style.top = `${e.clientY}px`;
    });
  }, []);

  useEffect(() => {
    if (state.clicked === false) {
      // close menu

      // lock menu from scrolling scam
      gsap.to("body", {
        css: { height: "100vh", overflowY: "scroll" },
      });
      // lock menu from scrolling scam

      // animation
      let tl1 = gsap.timeline();
      tl1
        .to([".menu-layer", ".menu-secondary-bg"], {
          duration: 0.8,
          height: 0,
          ease: "power3.inOut",
          stagger: {
            amount: 0.09,
          },
        })
        .to(".menu", {
          duration: 1,
          css: { display: "none" },
        });
      //animation
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open menu
      gsap.to("body", {
        css: { height: "100%", overflowY: "hidden" },
      });
      let tl2 = gsap.timeline();
      tl2
        .to(".menu", {
          duration: 0,
          css: { display: "block" },
        })
        .to([".menu-secondary-bg", ".menu-layer"], {
          duration: 0,
          height: "100%",
        })
        .from([".menu-secondary-bg", ".menu-layer"], {
          duration: 0.8,
          height: "0%",
          skewY: 2,
          ease: "power3.inOut",
          transformOrigin: "right top",
          stagger: {
            amount: 0.1,
          },
        })
        .from(".menu-list-item", {
          y: 60,
          delay: -0.4,
          duration: 0.8,
          opacity: 0,
          ease: "power1.inOut",
          stagger: {
            amount: 0.3,
          },
        });
    }
  }, [state]);

  return (
    <div className='header'>
      <div className='cursor'></div>
      <div className='cursor-follower'></div>

      <header>
        <div className='hamburger' onClick={handleMenu}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
        <div className='menu'>
          <div className='menu-layer'>
            <div className='wrapper'>
              <div className='menu-links'>
                <nav>
                  <ul>
                    <li
                      className='menu-list-item'
                      onMouseEnter={(e) => hover1(e)}
                      onMouseLeave={(e) => hover2(e)}
                    >
                      <h1>Home</h1>
                    </li>
                    <li
                      className='menu-list-item'
                      onMouseEnter={(e) => hover1(e)}
                      onMouseLeave={(e) => hover2(e)}
                    >
                      <h1>About Me</h1>
                    </li>
                    <li
                      className='menu-list-item'
                      onMouseEnter={(e) => hover1(e)}
                      onMouseLeave={(e) => hover2(e)}
                    >
                      <h1>My Work</h1>
                    </li>
                    <li
                      className='menu-list-item'
                      onMouseEnter={(e) => hover1(e)}
                      onMouseLeave={(e) => hover2(e)}
                    >
                      <h1>Experience</h1>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
