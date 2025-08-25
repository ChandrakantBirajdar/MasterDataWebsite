// import React from "react";
// import { motion } from "framer-motion";
// import { div } from "framer-motion/client";

// const images = [
//   "/images/bruno.jpg",
//   "/images/closeup.jpg",
//   "/images/collage.jpg",
//   "/images/bruno.jpg",
//   "/images/closeup.jpg",
//   "/images/collage.jpg",
// ];

// const HeroSection = () => {
//   return (
//     <div className="">
//       <div className="flex flex-col md:flex-row w-full h-[600px] bg-black text-white overflow-hidden">
//         {/* Left Side */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16">
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 pt-6">
//             LEARN FROM THE BEST, <br /> BE YOUR BEST.
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 mb-6">
//             Get unlimited access to thousands of bite-sized lessons.
//           </p>
//           <span className="block w-12 h-1 bg-red-500 mb-6"></span>

//           <h2 className="text-lg font-semibold mb-4">
//             What brings you to MasterClass today?
//           </h2>

//           <div className="space-y-3">
//             {[
//               "Develop my career or leadership skills",
//               "Become a better actor, musician, or writer",
//               "Cultivate a healthy and active lifestyle",
//               "Learn about science & technology",
//               "Become a better chef",
//               "Improve my style, art, or interior design",
//             ].map((item, idx) => (
//               <label
//                 key={idx}
//                 className="flex items-center space-x-7 bg-gray-900 rounded-md px-4 py-3 cursor-pointer hover:bg-gray-800 transition"
//               >
//                 <input
//                   type="checkbox"
//                   className="w-5 h-5 text-red-500 rounded focus:ring-red-500"
//                 />
//                 <span className="text-base md:text-lg">{item}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Right Side - Scrolling Images */}

//         <div className="w-full md:w-1/5 h-[600px] overflow-hidden">
//           <motion.div
//             className="flex flex-col space-y-8 absolute top-0"
//             animate={{ y: ["0%", "-100%"] }}
//             transition={{
//               repeat: Infinity,
//               duration: 90,
//               ease: "linear",
//             }}
//           >
//             {[...images, ...images].map((src, idx) => (
//               <img
//                 key={idx}
//                 src={src}
//                 alt="scroll"
//                 className="w-[250px] h-64 object-cover rounded-xl"
//               />
//             ))}
//           </motion.div>
//         </div>
//         <div className="w-full md:w-1/3 relative overflow-hidden">
//           <motion.div
//             className="flex flex-col space-y-4 absolute top-0"
//             animate={{ y: ["0%", "-100%"] }}
//             transition={{
//               repeat: Infinity,
//               duration: 90,
//               ease: "linear",
//             }}
//           >
//             {[...images, ...images].map((src, idx) => (
//               <img
//                 key={idx}
//                 src={src}
//                 alt="scroll"
//                 className="w-[250px] h-64 object-cover rounded-xl"
//               />
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";
import { motion } from "framer-motion";

const images1 = [
  "/images/bruno.jpg",
  "/images/closeup.jpg",
  "/images/collage.jpg",
  "/images/bruno.jpg",
  "/images/closeup.jpg",
  "/images/img6.jpg",
];

const images2 = [
  "/images/bruno.jpg",
  "/images/closeup.jpg",
  "/images/collage.jpg",
  "/images/bruno.jpg",
  "/images/closeup.jpg",
  "/images/img6.jpg",
];

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-black text-white">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          LEARN FROM THE BEST, <br /> BE YOUR BEST.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Get unlimited access to thousands of bite-sized lessons.
        </p>
        <span className="block w-12 h-1 bg-red-500 mb-6"></span>

        <h2 className="text-lg font-semibold mb-4">
          What brings you to MasterClass today?
        </h2>

        <div className="space-y-3">
          {[
            "Develop my career or leadership skills",
            "Become a better actor, musician, or writer",
            "Cultivate a healthy and active lifestyle",
            "Learn about science & technology",
            "Become a better chef",
            "Improve my style, art, or interior design",
          ].map((item, idx) => (
            <label
              key={idx}
              className="flex items-center space-x-3 bg-gray-900 rounded-md px-4 py-3 cursor-pointer hover:bg-gray-800 transition"
            >
              <input
                type="checkbox"
                className="w-5 h-5 text-red-500 rounded focus:ring-red-500"
              />
              <span className="text-base md:text-lg">{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Right Side - Two Rolling Columns (inside 600px height) */}
      <div className="w-full md:w-1/2 flex gap-4 overflow-hidden p-4 h-[800px]">
        {/* Column 1 */}
        <motion.div
          className="flex flex-col space-y-2"
          animate={{ y: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...images1, ...images1].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="scroll"
              className="w-full h-64 object-cover rounded-xl"
              style={{ marginBottom: "10px" }}
            />
          ))}
        </motion.div>

        {/* Column 2 */}
        <motion.div
          className="flex flex-col space-y-2"
          animate={{ y: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: "linear",
          }}
        >
          {[...images2, ...images2].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="scroll"
              className="w-full h-64 object-cover rounded-xl"
              style={{ marginBottom: "10px" }}
            />
          ))}
        </motion.div>
        {/* Column 3 */}
        <motion.div
          className="flex flex-col space-y-2"
          animate={{ y: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: "linear",
          }}
        >
          {[...images2, ...images2].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="scroll"
              className="w-full h-64 object-cover rounded-xl"
              style={{ marginBottom: "10px" }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
