import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import Loader from "../component/Loader";
export default function Results() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllResults = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://a11y-node-server.onrender.com/api/a11y"
    );
    if (res?.data?.length) {
      const appsData = res.data.map((app) => {
        const { violations } = app;
        console.log({ violations });

        const issueNodes = [];
        violations.forEach((vioItem) => {
          vioItem.nodes.forEach((node) => {
            issueNodes.push(node);
          });
        });
        let cirticalCount = 0;
        let seriousCount = 0;
        let moderateCount = 0;
        let minorCount = 0;
        issueNodes?.forEach((issue) => {
          if (issue.impact === "critical") {
            cirticalCount++;
          }
          if (issue.impact === "serious") {
            seriousCount++;
          }
          if (issue.impact === "moderate") {
            moderateCount++;
          }
          if (issue.impact === "minor") {
            minorCount++;
          }
        });
        const appInfoObj = {
          totalIssueCount: issueNodes?.length,
          websiteName: app?.appName,
          url: app?.url,
          cirticalCount,
          seriousCount,
          moderateCount,
          minorCount,
          date: moment(app?.timestamp).format("DD-MM-YYYY"),
          id: app?._id,
        };
        return appInfoObj;
      });
      setResults(appsData);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!results?.length) {
      getAllResults();
    }
  }, []);

  return (
    <div className="all-results grey-bg page-pad">
      <div className="container">
        {!!loading ? (
          <Loader />
        ) : (
          <div>
            <h1 className="head-text">Previously Websites Tested</h1>
            {!!results &&
              results.map((res) => (
                <div className="a11y-results-card mb-5">
                  <div className="heading mb-4">
                    <p className="date">{res?.date}</p>
                    <p>
                      Website Name :
                      <span className="keys"> {res.websiteName}</span>
                    </p>

                    <Link to={res?.url} target="_blank">
                      {res?.url}
                    </Link>
                  </div>
                  <div className="row mb-3">
                    <div className=" col-lg-6 issue-types">
                      <p className="mb-3">Total Issue</p>
                      <p className="total">{res?.totalIssueCount}</p>
                    </div>
                    <div className="col-lg-6">
                      <p className="mb-3">Impact types</p>
                      <div className="row">
                        <div className="col-lg-6">
                          <p>
                            Critical :{" "}
                            <span className="keys">{res?.cirticalCount} </span>
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <p>
                            Serious :{" "}
                            <span className="keys">{res?.seriousCount} </span>
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <p>
                            Moderate :{" "}
                            <span className="keys">{res?.moderateCount}</span>
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <p>
                            Minor :{" "}
                            <span className="keys">{res?.minorCount}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to={`${res.id}`} className="a11y-button w-100">
                    Read More
                  </Link>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
