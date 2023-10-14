import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";
import axios from "axios";

const SeekerAppliedTable = () => {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(null);

  // todo: add a button to download a file
  const DownloadFile = async (file_url) => {
    // write a javascript code to download a file from a url
    try {
      const response = await axios.get(file_url, { responseType: "blob" });

      // Create a download link and trigger the download
      const downloadLink = document.createElement("a");
      downloadLink.href = window.URL.createObjectURL(new Blob([response.data]));
      downloadLink.setAttribute("download", "downloadedFile.pdf"); // Set the desired file name
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  useEffect(() => {
    const tk = sessionStorage.getItem("token");
    setToken(tk);

    if (token) {
      axios
        .post(
          `${process.env.REACT_APP_Base_url}/jobs/get_all_jobs_applied_by_user`,
          {
            user_id: sessionStorage.getItem("user_id"),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setProducts(res.data.info);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

  return (
    <>
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
                field="company_name"
                header="company name"
                style={{ width: "20%" }}></Column>

              <Column
                field="job_title"
                header="job title"
                style={{ width: "20%" }}></Column>

              <Column
                header="date applied"
                body={(rowData) => (
                  <>
                    <div className="flex align-items-center">
                      <span>{rowData.date_applied} </span>
                    </div>
                  </>
                )}
                style={{ width: "20%" }}></Column>

              <Column
                header="job experience"
                body={(rowData) => (
                  <>
                    {rowData.job_experience === 0 ? (
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
                style={{ width: "10%" }}></Column>

              <Column
                header="resume / cv"
                body={(rowData) => (
                  <>
                    <div className="flex align-items-center">
                      <button
                        className="btn btn-success"
                        onClick={() => DownloadFile(rowData.resume)}>
                        Download file
                      </button>
                    </div>
                  </>
                )}
                style={{ width: "20%" }}></Column>
              <Column
                header="Action"
                body={(rowData) => (
                  <>
                    <div className="flex align-items-center">
                      <Link
                        to={{
                          pathname: `/view-seeker-applied-job`,
                          search: `?query=${rowData._id}`,
                        }}
                        className="btn btn-warning">
                        view
                      </Link>
                    </div>
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

export default SeekerAppliedTable;
