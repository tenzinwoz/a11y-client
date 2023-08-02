import React, { useState } from "react";
import ScanIcon from "../images/hero-ico.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const [websiteName, setWebsiteName] = useState("");
  const [url, setUrl] = useState("");
  const [errors, setErros] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(!websiteName, !url);
    if (!websiteName || !url) {
      let tempErr = {};
      if (!url) {
        tempErr = { ...tempErr, url: "Website URL is required" };
      }

      if (!websiteName) {
        tempErr = { ...tempErr, websiteName: "Your name is required" };
      }
      setErros(tempErr);
      return;
    } else {
      try {
        setLoading(true);
        const response = await axios.post(
          "https://a11y-node-server.onrender.com/api/a11y",
          {
            url,
            appName: websiteName,
          }
        );
        setLoading(false);
        navigate(`/results/${response?.data?.insertedId}`);
      } catch (error) {
        setLoading(false);
      }
    }
  };
  console.log({ errors });
  return (
    <div className="a11y-landing grey-bg page-pad">
      <div className="container" style={{ height: "70vh" }}>
        <div className="text-center mb-5">
          <img src={ScanIcon} alt="Scan icon" />
          <h2 className="mt-4">
            Find out if your website is <span>Accessible</span> and{" "}
            <span>Compliant</span>.
          </h2>
          <p>Please fill up the form below to get the result.</p>
        </div>
        <div className="form-holder">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="websiteURL">Website URL *</label>
              <input
                type="text"
                name="url"
                value={url}
                className={`form-control a11y-input ${
                  errors?.url && "is-invalid"
                }`}
                id="websiteURL"
                placeholder="Type website URL"
                onChange={(e) => {
                  setUrl(e.target.value);
                  setErros({ ...errors, url: "" });
                }}
              />
              <div className="invalid-feedback">{errors?.url}</div>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="websiteName">Your Name *</label>
              <input
                type="text"
                name="websiteName"
                value={websiteName}
                className={`form-control a11y-input ${
                  errors?.websiteName && "is-invalid"
                }`}
                id="websiteName"
                placeholder="Enter the website name"
                onChange={(e) => {
                  setWebsiteName(e.target.value);
                  setErros({ ...errors, websiteName: "" });
                }}
              />
              <div className="invalid-feedback">{errors?.websiteName}</div>
            </div>

            <button
              type="submit"
              className="a11y-button w-100"
              disabled={loading}
            >
              {loading ? (
                <div class="spinner-grow" role="status"></div>
              ) : (
                "Scan"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
