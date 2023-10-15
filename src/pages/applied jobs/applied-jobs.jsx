import Preference from "../../component/preference/preference";
import JobsHeader from "../../component/Views/Jobs_Header";
import Footer from "../../component/Views/Footer";
import AppliedTable from "../../component/tables/appliedTable";

const AppliedJobs = () => {
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
          <AppliedTable />
        </>
      ) : (
        <>
          <section className="section py-3">
            <section className="section bg-light py-3">
              <div className="container">
                <Preference />
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

export default AppliedJobs;
