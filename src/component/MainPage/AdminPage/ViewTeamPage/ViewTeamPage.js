import { React, useState } from "react";
import { useForm } from "react-hook-form";
import {
  adminLinkedin,
  adminFb,
  admintwitter,
  adminInstragram,
} from "../../../Entryfile/ImagePath";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";
import { Link } from "react-router-dom";
const ViewTeamPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const [data, setData] = useState([]);

  const columns = [
    {
      title: "Name",
      dataIndex: "document_type_id",
    },
    {
      title: "designation",
      dataIndex: "document_type",
    },

    {
      title: "Action",
      render: (text, record) => (
        <div className="dropdown dropdown-action text-right">
          <a
            href="#"
            className="action-icon dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#edit_document_type"
              // onClick={() => {
              //   handleUpdate(record.document_type_id);
              // }}
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </a>
            <a
              className="dropdown-item"
              href="#"
              // onClick={() => {
              //   deleteButtonHandler(record.document_type_id);
              // }}
            >
              <i className="fa fa-trash-o m-r-5" /> Delete
            </a>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="page-wrapper">
        {/* <Helmet>
          <title>Document type - HR</title>
          <meta name="description" content="Login page" />
        </Helmet> */}
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h2>All Team Members</h2>
              </div>
              {/* <div className="col-auto float-right ml-auto">
                <a
                  href="#"
                  className="btn bgColor text-white add-btn"
                  data-toggle="modal"
                  data-target="#add_document_type"
                >
                  <i className="fa fa-plus" /> Add new Document type
                </a>
              </div> */}
            </div>
            <hr />
          </div>
          {/* /Page Header */}

          {/* Search Filter */}
          {/* <div className="row  mb-4 ps-2">
            <input
              onChange={(e) => {
                setSearchDocument(e.target.value);
              }}
              className="form-control w-25 shadow py-4"
              type="text"
              placeholder="Search Document Type"
            />
          </div> */}
          {/* /Search Filter */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  className="table-striped"
                  pagination={{
                    total: data.length,
                    showTotal: (total, range) =>
                      `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                    showSizeChanger: true,
                    onShowSizeChange: onShowSizeChange,
                    itemRender: itemRender,
                  }}
                  style={{ overflowX: "auto" }}
                  columns={columns}
                  // bordered
                  dataSource={data}
                  rowKey={(record) => record.id}
                  onChange={console.log("change")}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
    </div>
  );
};

export default ViewTeamPage;
