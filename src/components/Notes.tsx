import { useEffect, useState } from "react";
// import UploadModal from "./ui/UploadModal";
import FileCard from "./ui/FileCard";
import axios from "axios";
const Notes = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get("http://localhost:8000/notes");
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
      <div className="w-[80%] mx-auto p-8">
        {/* <div className="w-full mx-auto flex justify-center">
          <UploadModal />
        </div> */}
        <div className="p-10 flex flex-wrap gap-5">
          {files.map((file, index) => (
            <FileCard file={file} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
