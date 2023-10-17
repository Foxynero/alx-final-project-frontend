import { BrowserRouter, Routes, Route } from "react-router-dom";

import SeekerAppliedJobDetails from "./pages/details/seeker_applied_Job_Details";
import ForgotPassword from "./component/ForgotPassword/ForgotPassword";
import AppliedJobDetails from "./pages/details/applied_Job_Details";
import AllCategories from "./component/Categories/AllCategories";
import DisplaySearch from "./component/SearchPage/DisplaySearch";
import SeekerProfile from "./pages/jobs portal/seeker_Profile";
import AppliedJobs from "./pages/applied jobs/applied-jobs";
import UpdateProfile from "./pages/profile/update_profile";
import Categories from "./component/Categories/Categories";
import PopularItem from "./component/Popular/PopularItem";
import JobsPortal from "./pages/jobs portal/jobs-portal";
import Dashboard from "./component/Dashboard/Dashboard";
import JobDetails from "./component/Jobs/JobDetails";
import Register from "./component/Register/Register";
import ErrorPage from "./component/404/ErrorPage";
import Pricing from "./component/Pricing/Pricing";
import PostJob from "./component/Jobs/PostJob";
// import Profile from "./pages/profile/profile";
import ProtectedRoute from "./ProtectedRoute";
import About from "./component/About/About";
import Login from "./component/Login/Login";
import Jobs from "./component/Jobs/Jobs";
import Blog from "./component/Blog/Blog";
import ScrollToTop from "./ScrollToTop";
import Faq from "./component/FAQ/Faq";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/all_categories" element={<AllCategories />} />
          <Route path="/search_results" element={<DisplaySearch />} />
          <Route path="/popular-item" element={<PopularItem />} />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/view-applied-job" element={<AppliedJobDetails />} />
            <Route path="/seeker-profile" element={<SeekerProfile />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/applied-jobs" element={<AppliedJobs />} />
            <Route path="/jobs-portal" element={<JobsPortal />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route
              path="/view-seeker-applied-job"
              element={<SeekerAppliedJobDetails />}
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
