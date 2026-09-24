import Image from "next/image";
import Link from "next/link";
import notFoundImage from "@/assets/404.jpeg";

const NotFound = () => {
  return (
    <div className="flex min-h-[75vh] items-center justify-center px-6 py-10">
      <div className="grid w-full max-w-5xl items-center gap-10 md:grid-cols-2">
       
        <div className="flex justify-center">
          <Image
            src={notFoundImage}
            alt="Workout not found"
            width={600}
            height={600}
            className="w-full max-w-md object-contain"
          />
        </div>

   
        <div className="text-center md:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C2F800]">
            FITLOG
          </p>

          <h1 className="mt-3 text-7xl font-black text-white">
            404
          </h1>

          <h2 className="mt-2 text-2xl font-bold uppercase text-white">
            WORKOUT NOT FOUND
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500 md:mx-0">
            Looks like this workout skipped leg day and disappeared.
            Dont worry, there are plenty more workouts waiting for you.
          </p>

          <Link
            href="/"
            className="btn mt-6 border-0 bg-[#C2F800] px-6 text-black hover:bg-[#C2F800]"
          >
            BACK TO WORKOUTS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;