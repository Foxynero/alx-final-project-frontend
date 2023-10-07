import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { IoIosPeople } from "react-icons/io";
import { GrDocumentLocked } from "react-icons/gr";
import { ImUnlocked } from "react-icons/im";

const ActiveTable = () => {
  const [products, setProducts] = useState([]);
  const [dashboard, setDashboard] = useState([]);

  // todo: add a button to deactivate a job
  const Deactivate = (id, status) => {
    console.log(id);
    axios
      .post(`${process.env.REACT_APP_Base_url}/jobs/change_job_status`, {
        job_id: id,
        status_flag: status,
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_Base_url}/jobs/all_jobs_by_user`, {
        user_id: sessionStorage.getItem("user_id"),
      })
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.info);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(
        `${process.env.REACT_APP_Base_url}/jobs/get_user_job_dashboard`,
        {
          user_id: sessionStorage.getItem("user_id"),
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setDashboard(res.data.info);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* analytics */}
      <section className="analytics">
        {dashboard && (
          <>
            <div className="content">
              <div
                className="analytics_data"
                style={{
                  borderRight: "5px solid black",
                  paddingRight: "40px",
                }}>
                <IoIosPeople size={36} />
                <h3 className="text-center">Total Jobs Posted</h3>
                <h3 className="text-center stat">{dashboard.total_jobs}</h3>
              </div>

              <div
                className="analytics_data"
                style={{
                  borderRight: "5px solid black",
                  paddingRight: "40px",
                }}>
                <ImUnlocked size={36} />
                <h3 className="text-center">Active Jobs</h3>
                <h3 className="text-center stat">{dashboard.activeJobs}</h3>
              </div>

              <div className="analytics_data">
                <GrDocumentLocked size={36} />
                <h3 className="text-center">Inactive Jobs</h3>
                <h3 className="text-center stat">{dashboard.inactiveJobs}</h3>
              </div>
            </div>
          </>
        )}
      </section>

      <div className="row m-4">
        <div className="col-12">
          <div className="card">
            <DataTable
              value={products}
              paginator
              dataKey="_id"
              rows={15}
              rowsPerPageOptions={[15, 20, 25, 50]}
              tableStyle={{ minWidth: "50rem" }}>
              <Column
                field="job_title"
                header="job title"
                style={{ width: "20%" }}></Column>
              <Column
                field="job_category"
                header="Industry"
                style={{ width: "20%" }}></Column>
              <Column
                header="job experience"
                body={(rowData) => (
                  <>
                    {rowData.job_experience === "0" ? (
                      <div className="flex align-items-center">
                        <span>Fresher</span>
                      </div>
                    ) : (
                      <div className="flex align-items-center">
                        <span>{rowData.job_experience} years</span>
                      </div>
                    )}
                  </>
                )}
                style={{ width: "20%" }}></Column>
              <Column
                field="job_location"
                header="job location"
                style={{ width: "20%" }}></Column>
              <Column
                field="status"
                header="status"
                style={{ width: "10%" }}></Column>
              <Column
                header="Action"
                body={(rowData) => (
                  <>
                    {rowData.status === "active" ? (
                      <div className="flex align-items-center">
                        <button
                          className="btn btn-danger"
                          onClick={() => Deactivate(rowData._id, "inactive")}>
                          Deactivate
                        </button>
                      </div>
                    ) : (
                      <div className="flex align-items-center">
                        <button
                          className="btn btn-success px-4"
                          onClick={() => Deactivate(rowData._id, "active")}>
                          Activate
                        </button>
                      </div>
                    )}
                  </>
                )}
                style={{ width: "10%" }}></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveTable;
