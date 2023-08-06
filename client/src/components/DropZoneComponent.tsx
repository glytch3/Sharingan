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
            "flex flex-col items-center justify-center h-full space-y-10 border-2 border-dashed border-orange-500 rounded-xl " +
            (isDragReject === true ? "border-red-500" : "") +
            (isDragAccept === true ? "border-green-500" : "")
          }
        >
          {" "}
          <img src="/images/folder.png" alt="folder" className="w-20 h-20" />
          {isDragReject ? (
            <p>Sorry, This app does not support this format</p>
          ) : (
            <>
              <p>Choose a file or drag it here.</p>
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
