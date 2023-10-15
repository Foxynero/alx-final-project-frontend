import ActiveTable from "../../component/tables/activeTable";
import JobsHeader from "../../component/Views/Jobs_Header";
import Footer from "../../component/Views/Footer";
import SeekerAppliedTable from "../../component/tables/seeker_appliedTable";

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
          <ActiveTable />
        </>
      ) : (
        <>
          <section className="section py-3">
            <section className="section bg-light py-3">
              <div className="container">
                <SeekerAppliedTable />
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
