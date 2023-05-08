import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  console.log(pathname);
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
    <div className={`navbar ${active || pathname != "/" ? "active" : ""}`}>
      <div className="container">
        <div className="logo">
          <Link to={"/"} className="link">
            <span className="text">sixxer</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <span>Sixxer Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sing in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button className="join">join</button>}
          {currentUser && (
            <div className="user">
              <span
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {" "}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3001/3001778.png"
                  alt="#"
                />
                <span>{currentUser.userName}</span>
              </span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/myGigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add new gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Massages
                  </Link>
                  <Link className="link" to="/">
                    Log out
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active ||
        (pathname != "/" && (
          <>
            <hr />
            <div className="menu">
              <Link className="link menuLink" to="/">
                Graphics & Design
              </Link>
              <Link className="link menuLink" to="/">
                Video & Animation
              </Link>
              <Link className="link menuLink" to="/">
                Writing & Translation
              </Link>
              <Link className="link menuLink" to="/">
                AI Services
              </Link>
              <Link className="link menuLink" to="/">
                Digital Marketing
              </Link>
              <Link className="link menuLink" to="/">
                Music & Audio
              </Link>
              <Link className="link menuLink" to="/">
                Programming & Tech
              </Link>
              <Link className="link menuLink" to="/">
                Business
              </Link>
              <Link className="link menuLink" to="/">
                Lifestyle
              </Link>
            </div>
          </>
        ))}
    </div>
  );
}
