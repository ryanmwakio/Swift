import React from "react";
import { Link } from "react-router-dom";

import "./admin.css";
import LeftNavLinks from "./LeftNavLinks";
import ExampleLine from "./charts/LineChart";
import ExamplePie from "./charts/PieChart";

const AdminIndex = () => {
  return (
    <div className="admin mx-auto">
      <div className="row">
        <div className="col-3">
          <div className="left-panel">
            <ul className="list-unstyled vert-nav">
              <div>
                <LeftNavLinks />
              </div>
            </ul>
          </div>
        </div>

        <div className="col-9">
          <div className="right-panel">
            <section>
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <div className="admin-card-wrapper">
                    <div className="admin-card bg-primary-swift">
                      <div>
                        <h2 className="card-title">12 users</h2>
                        <Link
                          className="card-link text-secondary-swift"
                          to="/users"
                        >
                          view all users{" "}
                          <i className="fas fa-arrow-circle-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-12">
                  <div className="admin-card-wrapper">
                    <div className="admin-card bg-secondary-swift">
                      <div>
                        <h2 className="card-title">300 products</h2>
                        <Link
                          className="card-link text-primary-swift"
                          to="/productsadmin"
                        >
                          view all products{" "}
                          <i className="fas fa-arrow-circle-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-12">
                  <div className="admin-card-wrapper">
                    <div className="admin-card bg-tertiary-swift">
                      <div>
                        <h2 className="card-title text-success">
                          12 subscribers
                        </h2>
                        <Link
                          className="card-link text-secondary-swift"
                          to="/emails"
                        >
                          view all emails{" "}
                          <i className="fas fa-arrow-circle-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <h2 className="text-center admin-panel-title">
                swift-ke admin panel
              </h2>
              <div className="row py-4 pr-5">
                <div className="col-md-8 col-sm-12">
                  <ExampleLine />
                </div>
                <div className="col-md-4 col-sm-12">
                  <ExamplePie />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminIndex;
