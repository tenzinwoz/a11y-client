import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../component/Loader";
import moment from "moment";

export default function SingleResult() {
  let { id } = useParams();
  const [appInfo, setAppInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const getAppInfo = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://a11y-node-server.onrender.com/api/a11y/${id}`
    );
    const issueNodes = [];
    console.log({ res });
    res?.data?.violations.forEach((vioItem) => {
      vioItem.nodes.forEach((node) => {
        issueNodes.push({
          ...node,
          description: vioItem.description,
          helpUrl: vioItem?.helpUrl,
        });
      });
    });
    setAppInfo({
      websiteName: res?.data?.appName,
      date: moment(res?.data?.timestamp).format("DD-MM-YYYY"),
      url: res?.data?.url,
      violations: issueNodes,
    });
    setLoading(false);
  };

  useEffect(() => {
    getAppInfo();
  }, []);
  console.log({ appInfo });
  return (
    <div className=" grey-bg page-pad single-result">
      <div className="container">
        {!!loading ? (
          <Loader />
        ) : (
          <>
            {!!appInfo && (
              <>
                <div className="heading">
                  <h3>
                    Website Name:{" "}
                    <span>
                      {appInfo?.websiteName}
                      <Link
                        to={appInfo.url}
                        target="_blank"
                      >{`(${appInfo.url})`}</Link>
                    </span>
                  </h3>
                </div>
                <div class="table-responsive">
                  <table class="table table-bordered table-striped table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Impact</th>
                        <th scope="col" className="col-3">
                          Description
                        </th>
                        <th scope="col" className="col-3">
                          Help URl
                        </th>
                        <th scope="col">HTML</th>
                        <th scope="col">target</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appInfo?.violations?.map((item, index) => (
                        <tr key={index}>
                          <th scope="row">{item?.impact}</th>
                          <td>{item?.description}</td>
                          <td>
                            <Link to={item?.helpUrl} target="_blank">
                              {item?.helpUrl}
                            </Link>
                          </td>
                          <td>{item?.html}</td>
                          <td>{item?.target}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
