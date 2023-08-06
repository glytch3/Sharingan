import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/DownloadFile.css";

const DownloadFile = ({ downloadPageLink }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(downloadPageLink)
      .then(() => setCopySuccess(true))
      .catch((error) => console.log("Error copying to clipboard:", error));
  };

  return (
    <div className="download-file mx-6 p-1">
      <h2 className="my-0">Here's the link to share the file:</h2>
      <div className="flex space-x-3 p-2 items-center">
        <span
          className="break-all text-sm cursor-pointer  text-gray-200"
          onClick={copyToClipboard}
        >
          {downloadPageLink}
        </span>
        <img
          src="/images/copy.png"
          alt=""
          className="object-contain w-6 h-6 cursor-pointer"
          onClick={copyToClipboard}
        />
      </div>
      {copySuccess && (
        <div className="success-message  text-gray-500 text-sm ">Link copied to clipboard!</div>
      )}
    </div>
  );
};

DownloadFile.propTypes = {
  downloadPageLink: PropTypes.string.isRequired,
};

export default DownloadFile;
