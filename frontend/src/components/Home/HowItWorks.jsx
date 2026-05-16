import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

import "./HowItWorks.css";

import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">

        <div className="container">

          <h3>How JobQuest Works</h3>

          <div className="banner">

            {/* Card 1 */}
            <Link
              to="/register"
              className="card"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <FaUserPlus />

              <p>Create Account</p>

              <p>
                Start your journey to finding the perfect job by creating
                an account with us. It's quick, easy, and gives you access
                to a world of career opportunities.
              </p>
            </Link>

            {/* Card 2 */}
            <Link
              to="/job/getall"
              className="card"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <MdFindInPage />

              <p>Find a Job/Post a Job</p>

              <p>
                Welcome to our platform, where job seekers and employers
                connect to achieve their career and hiring goals.
              </p>
            </Link>

            {/* Card 3 */}
            <Link
              to="/job/getall"
              className="card"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <IoMdSend />

              <p>Apply For Job/Recruit Suitable Candidates</p>

              <p>
                Welcome to our platform, the ultimate destination for
                job seekers and employers.
              </p>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;