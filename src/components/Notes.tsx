import { useEffect } from "react";
import FileCard from "./ui/FileCard";
import { filesAtom } from "@/store/atoms/filesAtom";
import axios from "axios";
import { RefreshCcw } from "lucide-react";
import { useAtom } from "jotai";

const Notes = () => {
  const [files, setFiles] = useAtom(filesAtom);
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

  function refreshFiles() {
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
  }
  return (
    <div className="h-full">
      <div className="w-[90%] mx-auto p-6">
        <div className="flex justify-center items-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
            Notes
          </h1>
          <button
            className="btn btn-circle btn-error hover:border-0 ml-10"
            onClick={refreshFiles}
          >
            <RefreshCcw size={20} />
          </button>
        </div>
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
