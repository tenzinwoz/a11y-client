import React from "react";

export default function About() {
  return (
    <div className="grey-bg page-pad about">
      <div className="container">
        <div className="content">
          <h1>What is A11y Checker ?</h1>
          <p className="mb-5">
            A11y Checker is a free and comprehensive online tool for assessing
            website accessibility. It offers detailed reports on identified
            issues, pinpointing their locations and suggesting effective
            resolutions. Notably, the tool specifies the violated Web Content
            Accessibility Guidelines (WCAG) principle, aiding developers and
            website owners in understanding and rectifying the problems. With
            its user-friendly interface and informative insights, A11y Checker
            enables the creation of inclusive digital experiences, ensuring
            websites comply with accessibility standards and provide an
            inclusive environment for all users.
          </p>
          <h1>How it is build ?</h1>
          <p className="mb-5">
            The software is developed using the MERN stack, which includes
            MongoDB, Express, React, and Node.js. It utilizes Puppeteer to
            automate browser actions and employs the axe core engine to detect
            accessibility issues on websites, ensuring compliance with
            accessibility guidelines. The application is deployed on the Render
            platform, a free web service deployment platform, using a Docker
            image to support Chromium browser automation. This combination
            enables efficient accessibility testing, seamless deployment, and a
            scalable architecture, making it a powerful tool for developers to
            create inclusive and accessible web applications.
          </p>
          <h1>Future improvements!</h1>
          <p className="mb-5">
            Future improvements include automating the accessibility testing
            process to scan all pages within a given website and generate
            comprehensive results for each page. Currently limited to a single
            page, the software aims to expand its coverage for a more holistic
            assessment. Additionally, the tool will not only display
            accessibility violations or failed principles but also showcase
            passed accessibility guidelines, providing a balanced view of the
            website's overall accessibility status.
          </p>
        </div>
      </div>
    </div>
  );
}
