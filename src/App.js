import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./component/About/About";
import AllCategories from "./component/Categories/AllCategories";
import Dashboard from "./component/Dashboard/Dashboard";
import Faq from "./component/FAQ/Faq";
import JobDetails from "./component/Jobs/JobDetails";
import Jobs from "./component/Jobs/Jobs";
import PostJob from "./component/Jobs/PostJob";
import Pricing from "./component/Pricing/Pricing";
import Register from "./component/Register/Register";
import Blog from "./component/Blog/Blog";
import Login from "./component/Login/Login";
import ForgotPassword from "./component/ForgotPassword/ForgotPassword";
import Categories from "./component/Categories/Categories";
import ErrorPage from "./component/404/ErrorPage";
import PopularItem from "./component/Popular/PopularItem";
import ScrollToTop from "./ScrollToTop";
import ProtectedRoute from "./ProtectedRoute";
import DisplaySearch from "./component/SearchPage/DisplaySearch";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/all_categories" element={<AllCategories />} />
          <Route path="/search_results" element={<DisplaySearch />} />
          <Route path="/popular_item" element={<PopularItem />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/job_details" element={<JobDetails />} />
            <Route path="/post_job" element={<PostJob />} />
          </Route>
          <Route path="/error_page" element={<ErrorPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
