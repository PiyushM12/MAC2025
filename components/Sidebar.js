import React from "react";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import classes from "../styles/sidebar.module.css";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 },
};

const Sidebar = ({ setIsOpenSidebar }) => {
  const router = useRouter();

  const navigate = (dest) => {
    setIsOpenSidebar(false);
    router.push(dest);
  };

  return (
    <div className="fixed top-0 right-0 h-full w-full flex">
      <motion.div
        initial={{ opacity: 0, scaleX: 3 }}
        animate={{ opacity: 1, scaleX: 1 }}
        exit={{ opacity: 0, scaleX: 3 }}
        transition={{ type: "linear", duration: 0.2 }}
        className="h-full w-[50%] md:w-[70%] backdrop-brightness-50"
        onClick={() => setIsOpenSidebar(false)}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ type: "linear", duration: 0.2 }}
        className=" bg-black w-[50%] md:w-[30%] h-full"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="close"
          className="flex flex-col gap-2 mt-16 font-semibold text-lg md:text-xl px-4"
        >
          <motion.div
            variants={item}
            onClick={() => navigate("/")}
            className={` text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}
          >
            About
          </motion.div>
          <motion.div
            variants={item}
            onClick={() => navigate("/Committee")}
            className={` text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}
          >
            Committee
          </motion.div>
          {/* <motion.div
            variants={item}
            onClick={() => navigate("/tuned")}
            className={` text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}
          >
            Keynote
          </motion.div> */}
          <motion.div
  variants={item}
  className={`relative dropdown dropdown-hover text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}
>
  <div>
    <label tabIndex={0} className="m-1">
      Program
    </label>
    <ul
      tabIndex={0}
      className="absolute top-10 right-[2px] text-sm sm:text-md dropdown-content menu p-2 shadow bg-stone-800 rounded-box w-44 sm:w-52"
    >
      <li
        onClick={() => navigate("/keynote1")}
        className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
      >
        Keynotes
      </li>
      <li
        onClick={() => navigate("/workshop")}
        className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
      >
        Workshop
      </li>
      <li
        onClick={() => navigate("/yp")}
        className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
      >
        YP
      </li>
      <li
        onClick={() => navigate("/wie")}
        className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
      >
        WIE
      </li>
      <li
        onClick={() => navigate("/sight")}
        className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
      >
        SIGHT
      </li>
      <li
        onClick={() => navigate("/conferenceSchedule")}
        className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
      >
        Conference Schedule
      </li>
    </ul>
  </div>
</motion.div>

          <motion.div
            variants={item}
            onClick={() => navigate("/tracks")}
            className={` text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}
          >
            Tracks
          </motion.div>
          <motion.div
            variants={item}
            className={`relative dropdown dropdown-hover text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}
          >
            <div className="">
              <label tabIndex={0} className="m-1">
                Author
              </label>
              <ul
                tabIndex={0}
                className="absolute top-10 right-[2px] text-sm sm:text-md dropdown-content menu p-2 shadow bg-stone-800 rounded-box w-44 sm:w-52"
              >
                <li
                  onClick={() => navigate("/PaperSubmission")}
                  className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
                >
                  Paper Submission
                </li>
                <li
                  onClick={() => navigate("/dates")}
                  className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
                >
                  Important Dates
                </li>
                <li
                  onClick={() => navigate("/tracks")}
                  className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
                >
                  Call For Papers
                </li>
                {/*<a download={true} href='/MAC_2023_SCHEDULE.pdf'>
                  <li className='py-2 px-4 hover:bg-white hover:text-black rounded-lg'>
                    Download Schedule
                  </li>
                  </a>
                */}
              </ul>
            </div>
          </motion.div>

                   <motion.div
            variants={item}
            className={`relative dropdown dropdown-hover text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}
          >
            <div className="">
              <label tabIndex={0} className="m-1">
                Awards
              </label>
              <ul
                tabIndex={0}
                className="absolute top-10 right-[2px] text-sm sm:text-md dropdown-content menu p-2 shadow bg-stone-800 rounded-box w-44 sm:w-52"
              >
                <li
                  onClick={() => navigate("/awards")}
                  className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
                >
                  Best Paper Award
                </li>
                <li
                  onClick={() => navigate("/competitions")}
                  className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
                >
                  Competitions
                </li>
                
                {/*<a download={true} href='/MAC_2023_SCHEDULE.pdf'>
                  <li className='py-2 px-4 hover:bg-white hover:text-black rounded-lg'>
                    Download Schedule
                  </li>
                  </a>
                */}
              </ul>
            </div>
          </motion.div>

          {/* <motion.div
            variants={item}
            onClick={() => navigate("/awards")}
            className={` text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}
          >
            Awards
          </motion.div> */}
          <motion.div
            variants={item}
            onClick={() => navigate("/Sponsor")}
            className={` text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}
          >
            Sponsor
          </motion.div>
          <motion.div
            variants={item}
            onClick={() => navigate("/registration/#registration")}
            className={` text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}
          >
            Registration
          </motion.div>
          <motion.div
            variants={item}
            className={`relative dropdown dropdown-hover text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}
          >
            <div className="">
              <label tabIndex={0} className="m-1">
                Accommodation
              </label>
              <ul
                tabIndex={0}
                className="absolute top-10 right-[2px] text-sm sm:text-md dropdown-content menu p-2 shadow bg-stone-800 rounded-box w-44 sm:w-52"
              >
                <li
                  onClick={() => navigate("/Venue")}
                  className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
                >
                  Conference Venue
                </li>
                <li
                  onClick={() => navigate("/Accommodation")}
                  className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
                >
                  Accommodation
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            variants={item}
            onClick={() => navigate("/Gallery")}
            className={` text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}
          >
            Gallery
          </motion.div>
        </motion.div>

        <div
          className="hover:bg-stone-500 mx-10 rounded-full cursor-pointer my-12 flex justify-center"
          onClick={() => setIsOpenSidebar(false)}
        >
          <IoMdClose className="w-14 h-14 text-white" />
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;