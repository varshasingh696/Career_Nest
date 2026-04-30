// import { Context } from "./main";
// import React, { useEffect, useContext } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./components/Auth/Login";
// import Register from "./components/Auth/Register";
// import { Toaster } from "react-hot-toast";
// import Navbar from "./components/Layout/Navbar";
// import Footer from "./components/Layout/Footer";
// import Home from "./components/Home/Home";
// import Jobs from "./components/Job/Jobs";
// import JobDetails from "./components/Job/JobDetails";
// import Application from "./components/Application/Application";
// import MyApplications from "./components/Application/MyApplications";
// import PostJob from "./components/Job/PostJob";
// import NotFound from "./components/NotFound/NotFound";
// import MyJobs from "./components/Job/MyJobs";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
// import ProtectedRoute from "./components/Common/ProtectedRoute";

// function App() {

//   const { fetchCurrentUser } = useContext(Context);

//   useEffect(() => {
//     fetchCurrentUser();
//   }, [fetchCurrentUser]);


//   return (
//     <>
//       <Router>

//         <Navbar />
//         <Routes>
//           {/* <router path="/user_home" element={''} /> */}
//           <Route path="/contact" element={<Contact/>} />
//           <Route path="/about" element={<About/>} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/job/getall"
//             element={
//               <ProtectedRoute>
//                 <Jobs />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/job/:id"
//             element={
//               <ProtectedRoute>
//                 <JobDetails />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/application/:id"
//             element={
//               <ProtectedRoute allowedRoles={["Job Seeker"]}>
//                 <Application />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/applications/me"
//             element={
//               <ProtectedRoute>
//                 <MyApplications />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/job/post"
//             element={
//               <ProtectedRoute allowedRoles={["Employer"]}>
//                 <PostJob />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/job/me"
//             element={
//               <ProtectedRoute allowedRoles={["Employer"]}>
//                 <MyJobs />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="*" element={<NotFound />} />
//         </Routes>

//         <Footer />
//         <Toaster />
//       </Router>
//     </>
//   )
// }

// export default App


import { Context } from "./main";
import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import Jobs from "./components/Job/Jobs";
import JobDetails from "./components/Job/JobDetails";
import Application from "./components/Application/Application";
import MyApplications from "./components/Application/MyApplications";
import PostJob from "./components/Job/PostJob";
import NotFound from "./components/NotFound/NotFound";
import MyJobs from "./components/Job/MyJobs";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ProtectedRoute from "./components/Common/ProtectedRoute";

import { Toaster } from "react-hot-toast";

function App() {
  const { fetchCurrentUser } = useContext(Context);

  //  Run only once on load
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/job/getall"
          element={
            <ProtectedRoute>
              <Jobs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/job/:id"
          element={
            <ProtectedRoute>
              <JobDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/application/:id"
          element={
            <ProtectedRoute allowedRoles={["Job Seeker"]}>
              <Application />
            </ProtectedRoute>
          }
        />

        <Route
          path="/applications/me"
          element={
            <ProtectedRoute>
              <MyApplications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/job/post"
          element={
            <ProtectedRoute allowedRoles={["Employer"]}>
              <PostJob />
            </ProtectedRoute>
          }
        />

        <Route
          path="/job/me"
          element={
            <ProtectedRoute allowedRoles={["Employer"]}>
              <MyJobs />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;