import "../../styles/DownloadFile.css";

const DownloadFile = ({ downloadPageLink }) => {
  return (
    <div className="download-file mx-6 p-1 ">
      <h2 className="my-0">
        Here's the link to share the file:
      </h2>
      <div className="flex space-x-3 p-2  items-center ">
        <span className="break-all text-sm">{downloadPageLink}</span>
        <img
          src="/images/copy.png"
          alt=""
          className="object-contain w-6 h-6 cursor-pointer"
          onClick={() => navigator.clipboard.writeText(downloadPageLink)}
        />
      </div>
    </div>
  );
};

export default DownloadFile;
