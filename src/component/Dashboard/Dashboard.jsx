import Footer from "../Views/Footer";
import Header from "../Views/Header";
import Suscribe from "../Suscribe/Suscribe";
import Popular from "../Popular/Popular";
import WalkThrough from "../WalkThrough/WalkThrough";
import AllJobs from "../Jobs/AllJobs";
import Banner from "../Banner/Banner";
import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [popular, setPopular] = useState([]);
  const [job_preference, setJobPreference] = useState("");
  // get preference from session storage
  const preference = sessionStorage.getItem("preference");

  useEffect(() => {
    if (preference === "false") {
      setVisible(true);
      axios
        .get(`${process.env.REACT_APP_Base_url}/jobs/categories`)
        .then((res) => {
          setPopular(res.data.info);
          console.log(res.data);
        });
    }
  }, [preference]);

  // todo: handle preference
  const handlePreference = (e) => {
    e.preventDefault();
    setVisible(false);

    axios
      .post(
        `${process.env.REACT_APP_Base_url}/users/set_preference`,
        {
          user_id: sessionStorage.getItem("user_id"),
          job_preference,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          sessionStorage.setItem(
            "preference",
            res.data.info.isPreferenceSelected
          );
          alert(res.data.message);
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid px-0">
      <>
        <div className="card flex justify-content-center">
          <Dialog
            header="Preference"
            visible={visible}
            style={{ width: "50vw" }}
            onHide={() => setVisible(false)}>
            <form onSubmit={handlePreference} className="py-2 m-2">
              <h5 className="m-0">
                By selecting your preferences, you will be able to see jobs that
                match your skills and interests.
              </h5>

              <div className="py-2">
                <label htmlFor="salary" className="form-label">
                  Job Type
                </label>
                <select
                  className="form-select p-1"
                  onChange={(e) => setJobPreference(e.target.value)}
                  style={{ width: "100%" }}
                  aria-label="Default select example">
                  <option disabled selected>
                    Choose your field of interest
                  </option>
                  {popular &&
                    popular.map((item) => {
                      return (
                        <>
                          <option value={item._id}>{item.category_name}</option>
                        </>
                      );
                    })}
                </select>
              </div>

              {/* save button */}
              <div className="py-2">
                <button
                  className="btn btn-primary btn-sm btn-block"
                  type="submit">
                  Save
                </button>
              </div>
            </form>
          </Dialog>
        </div>
      </>

      <Header />

      <Banner />

      <Popular />

      <AllJobs />

      <WalkThrough />

      <Suscribe />

      <Footer />
    </div>
  );
};

export default Home;
