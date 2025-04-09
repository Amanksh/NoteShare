import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { filesAtom } from "@/store/atoms/filesAtom";
import { useAtomValue } from "jotai";
import FileCard from "./ui/FileCard";
const Home = () => {
  const files = useAtomValue(filesAtom);
  return (
    <div className="">
      <div className="mx-auto mt-20 flex gap-5 flex-col items-center justify-center p-10 w-[80%]">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
          Access & Share Notes Seamlessly
        </h1>
        <p className="leading-7 md:flex text-center [&:not(:first-child)]:mt-6">
          Empower your learning with a platform where students and teachers can
          easily upload, share, and download notes. Find the right study
          materials, collaborate with peers, and enhance your knowledge—all in
          one place!
        </p>
        <Button variant={"outline"} className="btn btn-ghost text-black">
          <NavLink to={"/notes"}>Contribute</NavLink>
        </Button>
      </div>
      <div className="mt-10">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
          Recently Added
        </h1>
        <div className="p-5 flex flex-wrap   justify-center gap-5">
          {files.map((file, index) => (
            <FileCard file={file} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
