import JobsHeader from "../../component/Views/Jobs_Header";
import ListJobs from "../../component/Jobs/ListJobs";
import Footer from "../../component/Views/Footer";
import DataTable from "../../component/dataTable";
import React from "react";

const JobsPortal = () => {
  const role = sessionStorage.getItem("role");
  return (
    <>
      {/* Navigation Bar*/}
      <JobsHeader />
      {/*end header*/}

      {/* Start home */}
      <section className="bg-half page-next-level">
        <div className="bg-overlay" />
      </section>
      {/* end home */}

      {role && role === "creator" ? (
        <>
          <DataTable />
        </>
      ) : (
        <>
          <section className="section py-3">
            <section className="section bg-light py-3">
              <div className="container">
                <ListJobs />
              </div>
            </section>
          </section>
        </>
      )}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </>
  );
};

export default JobsPortal;
