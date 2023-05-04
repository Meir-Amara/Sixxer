import React, { useEffect, useState } from "react";
import "./Navbar.scss";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.addEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    userName: "kobi kobi",
    isSeller: true,
  };

  return (
    <div className={`navbar ${active && "active"}`}>
      <div className="container">
        <div className="logo">
          <span className="text">sixxer</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Sixxer Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sing in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button className="join">join</button>}
          {currentUser && (
            <div>
              <img src="" alt="#" />
              <span>{currentUser.userName}</span>
              <div className="option">
                {currentUser.isSeller&&
                <>
                <p>Gigs</p>
                <p>Add new gig</p>
                </>
                }
                <p>Orders</p>
                <p>Massage</p>
                <p>Log out</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr />
      <div className="menu">
        <span>test</span>
        <span>test2</span>
      </div>
    </div>
  );
}
