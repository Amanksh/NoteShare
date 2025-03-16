import { Button } from "./ui/button";

const Home = () => {
  return (
    <div className="">
      <div className="mx-auto mt-20 flex gap-5 flex-col items-center justify-center p-10 w-[50%]">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
          Access & Share Notes Seamlessly
        </h1>
        <p className="leading-7 hidden md:flex text-center [&:not(:first-child)]:mt-6">
          Empower your learning with a platform where students and teachers can
          easily upload, share, and download notes. Find the right study
          materials, collaborate with peers, and enhance your knowledge—all in
          one place!
        </p>
        <Button className="px-10 mt-2 btn btn-outline">Join</Button>
      </div>
    </div>
  );
};

export default Home;
