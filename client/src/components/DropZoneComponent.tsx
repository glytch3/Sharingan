import { Dispatch, FunctionComponent, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import "../../styles/DropZoneComponent.css";

const DropZoneComponent: FunctionComponent<{ setFile: Dispatch<any> }> = ({
  setFile
}) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: "video/*, image/*, application/pdf, text/csv",
    });

  useEffect(() => {
    console.log("isDragAccept:", isDragAccept);
    console.log("isDragReject:", isDragReject);
  }, [isDragAccept, isDragReject]);

  return (
    <div className="w-full p-4">
      <div {...getRootProps()} className="w-full rounded-md cursor-pointer h-80 focus:outline-none drop-zone">

        <input {...getInputProps()} />
        <div
          className={
            "flex flex-col items-center justify-center h-full space-y-3 border-2 border-dashed border-yellow-light rounded-xl " +
            (isDragReject === true ? "border-red-500" : "") +
            (isDragAccept === true ? "border-green-500" : "")
          }
        >
          {" "}
          <img src="/images/folder.png" alt="folder" className="w-16 h-16" />
          {isDragReject ? (
            <p>Sorry, This app only supports images and mp3</p>
          ) : (
            <>
              <p>Drag & Drop Files Here</p>
              {/* <p className="mt-2 text-base text-gray-300">
                All files supported
              </p> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropZoneComponent;
