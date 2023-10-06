import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";

const ActiveTable = () => {
  const [products, setProducts] = useState([]);

  // todo: add a button to deactivate a job
  const Deactivate = (id) => {
    console.log(id);
    // axios
    //   .put(`${process.env.REACT_APP_Base_url}/jobs/deactivate/${id}`)
    //   .then((res) => {
    //     console.log(res.data);
    //     window.location.reload();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_Base_url}/jobs/active`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.info);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2 className="m-2 ">Active Jobs Table</h2>
      <div className="card m-2">
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
            header="job category"
            style={{ width: "20%" }}></Column>
          <Column
            field="job_experience"
            header="job experience"
            style={{ width: "20%" }}></Column>
          <Column
            field="job_location"
            header="job location"
            style={{ width: "20%" }}></Column>
          <Column
            header="Action"
            body={(rowData) => (
              <>
                <div className="flex align-items-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => Deactivate(rowData._id)}>
                    Deactivate
                  </button>
                </div>
              </>
            )}
            style={{ width: "20%" }}></Column>
        </DataTable>
      </div>
    </>
  );
};

export default ActiveTable;
