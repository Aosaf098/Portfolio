import { Button } from "@/components/ui/button";
import Marquee from "react-fast-marquee";
import profilePic from "../../public/assets/pic.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="lg:w-11/12 mx-auto p-10 flex flex-row lg:flex-col gap-4 lg:relative">
        <div className="lg:w-1/2 flex flex-col gap-10 lg:p-20 absolute z-10">
          <h1 className="text-4xl lg:text-5xl font-bold">Md. Aosaf Ibad Chowdhury</h1>
          <div className="flex items-center text-2xl -mt-6 font-semibold">
            <h3>F</h3>
            <Typewriter
              words={["rontend Developer"]}
              loop={0 | false}
              typeSpeed={80}
            />
          </div>
          <p className="lg:w-3/4 w-11/12 text-justify text-gray-400">
            Md. Aosaf Ibad Chowdhury is a passionate frontend developer skilled
            in React, JavaScript, and the MERN stack. He has worked on diverse
            projects, including esports reviews, volunteer management, and
            restaurant management systems. Always eager to learn, he explores
            LLMs, data science, and authentication strategies while continuously
            improving his craft.(This is what chatGPT thinks about me)
          </p>
          <div className="flex items-center gap-4 justify-between lg:w-3/4 px-2 lg:px-0">
            <Link to={'mailto:aosafibad10@gmail.com'}><Button>Get in Touch</Button></Link>
            <div className="flex gap-8 items-center w-32 py-2 *:w-10 *:cursor-pointer">
              <Link to={'https://www.linkedin.com/in/aosaf-ibad-chowdhury-a01758290/'}>
                <img
                  src="https://img.icons8.com/?size=48&id=xuvGCOXi8Wyg&format=png"
                  alt=""
                />
              </Link>
              <Link to={'https://github.com/Aosaf098'}>
                <img
                  src="https://img.icons8.com/?size=48&id=AZOZNnY73haj&format=png"
                  alt=""
                />
              </Link>
            </div>
          </div>

          <div className="w-3/4 space-y-4">
            <h3 className="text-2xl font-semibold">Technologies</h3>
            <div className="h-16 flex items-center gap-4">
              <Marquee speed={80} pauseOnHover={true} className="space-x-4">
                <div className="flex items-center gap-4">
                  <img
                    className="w-12"
                    src="https://img.icons8.com/?size=48&id=108784&format=png"
                    alt=""
                  />
                  <img
                    className="w-12"
                    src="https://img.icons8.com/?size=80&id=asWSSTBrDlTW&format=png"
                    alt=""
                  />
                  <img
                    className="w-12"
                    src="https://img.icons8.com/?size=48&id=20909&format=png"
                    alt=""
                  />
                  <img
                    className="w-12"
                    src="https://img.icons8.com/?size=48&id=21278&format=png"
                    alt=""
                  />
                  <img
                    className="w-12"
                    src="https://img.icons8.com/?size=48&id=CIAZz2CYc6Kc&format=png"
                    alt=""
                  />
                  <img
                    className="w-12"
                    src="https://img.icons8.com/?size=48&id=62452&format=png"
                    alt=""
                  />
                  <img
                    className="w-12"
                    src="https://img.icons8.com/?size=48&id=13441&format=png"
                    alt=""
                  />
                  <img
                    className="w-12"
                    src="https://img.icons8.com/?size=48&id=bosfpvRzNOG8&format=png"
                    alt=""
                  />
                  <img
                    className="w-12"
                    src="https://img.icons8.com/?size=48&id=SDVmtZ6VBGXt&format=png"
                    alt=""
                  />
                  <img
                    className="w-12"
                    src="https://img.icons8.com/?size=48&id=84710&format=png"
                    alt=""
                  />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-end items-end lg:p-8 pb-12 absolute z-10 right-6 lg:right-1 top-[750px] lg:top-[600px]">
          <div className="w-28 lg:w-36 aspect-square border border-solid border-gray-500 rounded-full">
            <img
              className="w-full h-full object-cover rounded-full"
              src={profilePic}
              alt=""
            />
          </div>
        </div>
        <div className="absolute hidden lg:block">
            <h1 className="text-[20vw] opacity-5 font-bold absolute top-1 z-0 left-6">Aosaf</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
