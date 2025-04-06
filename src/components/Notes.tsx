import { useEffect, useState } from "react";
// import UploadModal from "./ui/UploadModal";
import FileCard from "./ui/FileCard";
import axios from "axios";
const Notes = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(
          "https://notes-api-1wbs.onrender.com/notes"
        );
        setFiles(response.data.files);
        console.log(files);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };
    fetchFiles();
  }, []);
  return (
    <div className="h-full">
      <div className="w-[90%] mx-auto p-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Notes
        </h1>
        {/* <div className="w-full mx-auto flex justify-center">
          <UploadModal />
        </div> */}
        <div className="p-5 flex flex-wrap   justify-center gap-5">
          {files.map((file, index) => (
            <FileCard file={file} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
