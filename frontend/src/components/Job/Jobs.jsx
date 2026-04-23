import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Jobs.css';
import api from "../../lib/api";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("/job/getall");
        setJobs(res.data);
      } catch (error) {
        setJobs({ jobs: [] });
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="jobs page">
      <div className="container">
        <h1>ALL AVAILABLE JOBS</h1>
        <div className="banner">
          {jobs.jobs &&
            jobs.jobs.map((element) => {
              return (
                <div className="card" key={element._id}>
                  <p>{element.title}</p>
                  <p>{element.category}</p>
                  <p>{element.country}</p>
                  <Link to={`/job/${element._id}`}>Job Details</Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Jobs;