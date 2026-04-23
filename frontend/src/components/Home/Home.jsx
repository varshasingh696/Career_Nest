import React from "react";
import { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import MainHero from "./MainHero";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";
import './Home.css';

const Home = () => {
  const { isAuthorized } = useContext(Context);

  return (
    <>
      {isAuthorized ? (
        <section className="homePage page">
          <HeroSection />
          <PopularCategories />
          <PopularCompanies />
        </section>
      ) : (
        <div>
          <nav>
            <div className="home_nav">
              <img className="logo" src="/logo-png.png" alt="logo" />
              <ul className="list">
                <li>
                  <Link to="/about">
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    CONTACT US
                  </Link>
                </li>
                <Link to="/login">
                  <button className="Login_btn">Login/Signup</button>
                </Link>
              </ul>
            </div>
          </nav>
          <MainHero />
          <HowItWorks />
         
        </div>
        
      )}
    </>
  );
};

export default Home;
