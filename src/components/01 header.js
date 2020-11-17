import React, { useEffect } from "react";

function Header() {
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
  return (
    <div className='header'>
      <div className='cursor'></div>
      <div className='cursor-follower'></div>
      <header>
        <div className='hamburger-menu'></div>
      </header>
    </div>
  );
}

export default Header;
