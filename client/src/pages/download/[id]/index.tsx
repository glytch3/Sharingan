import RenderFile from "@/components/RenderFile";
import axios from "axios";
import { IFile } from "libs/types";
import { GetServerSidePropsContext, NextPage } from "next";
import fileDownload from "js-file-download";
import "./index.css";

const index: NextPage<{
  file: IFile;
}> = ({ file: { format, name, sizeInBytes, id } }) => {
  const handleDownload = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/files/${id}/download`,
      {
        responseType: "blob",
      }
    );
    fileDownload(data, name);
  };

  return (
<div className="flex flex-col items-center justify-center py-14 space-y-7 bg-black rounded-md shadow-xl w-96 border-2 border-gray-500 downloadtext">
      {!id ? (
        <span>oops! File does not exist! check the URL</span>
      ) : (
        <>
          <RenderFile file={{ format, name, sizeInBytes }} />
          <div className="flex flex-col items-center justify-center space-y-10">
            <div className="flex flex-col items-center justify-center space-y-4 ">
              <img
                src="/images/file-download.png"
                alt=""
                className="w-16 h-16"
              />
              <h1 className="">Your file is ready to be downloaded</h1>
            </div>
            <button className="button " onClick={handleDownload}>
              <span className="gradient-text-upload">Download</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default index;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;
  let file;
  try {
    const { data } = await axios.get(`http://localhost:8000/api/files/${id}`);
    file = data;
  } catch (error) {
    console.log(error.response.data);
    file = {};
  }

  return {
    props: {
      file,
    }, // will be passed to the page component as props
  };
}
