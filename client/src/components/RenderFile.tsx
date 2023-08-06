import { sizeInMb } from "../libs/sizeInMb";
import { IFile } from "../libs/types";
import { FunctionComponent } from "react";
import "../../styles/RenderFile.css";

const RenderFile: FunctionComponent<{
  file: IFile;
}> = ({ file: { format, sizeInBytes, name } }) => {
  const truncatedName = name.length > 20 ? name.substring(0, 20) + "..." : name;

  return (
    <div className="file-info flex items-center w-auto p-4 my-2">
      <img src={`/images/${format}.png`} alt="" className="w-10 h-10" />
      <span className="mx-2">{truncatedName}</span>
      <span className="ml-auto">( {sizeInMb(sizeInBytes)})</span>
    </div>
  );
};

export default RenderFile;
