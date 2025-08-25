// function SectionB() {
//   return (
//     <div className="w-screen h-[500px] bg-black flex justify-between">
//       <div className="w-[50%] bg-black flex flex-col gap-4 pl-20 justify-center">
//         <h1 className="text-4xl w-[90%] font-bold text-white">
//           What’s in every MasterClass membership?
//         </h1>
//         <div className=" flex gap-8">
//           <button className="h-[41px] w-[190px] rounded-xl font-bold cursor-pointer bg-[#D61A46] text-white p-2 flex items-center justify-center">
//             Get MasterClass
//           </button>
//           <button className="h-[41px] w-[190px] rounded-xl font-bold cursor-pointer bg-black text-white p-2 flex items-center justify-center outline-amber-700  hover:bg-gray-500">
//             Gifts
//           </button>
//         </div>
//       </div>
//       <div className="w-[50%] flex pl-20 justify-center items-center">
//         <ul className="flex flex-col gap-2 text-white">
//           <li>All 200+ classes, sessions, and original series</li>
//           <li>Audio-only lessons</li>
//           <li>Download and watch offline (select plans)</li>
//           <li>Downloadable class guides for every class</li>
//           <li>Watch on desktop, TV, or mobile devices</li>
//           <li>New classes added every month</li>
//           <li>30-day money back guarantee</li>
//         </ul>
//       </div>
//     </div>
//   );
// }
// export default SectionB;

import React from "react";
import {
  Check,
  Headphones,
  Download,
  BookOpen,
  Monitor,
  Star,
} from "lucide-react";

const SectionB = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What’s in every MasterClass membership?
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md font-semibold transition">
              Get MasterClass
            </button>
            <button className="border border-gray-400 hover:bg-gray-800 px-6 py-3 rounded-md font-semibold flex items-center justify-center gap-2 transition">
              🎁 Gift
            </button>
          </div>
        </div>

        {/* Right Features */}
        <div className="space-y-4 text-gray-300">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-gray-400" />
            <span>All 200+ classes, sessions, and original series</span>
          </div>
          <div className="flex items-center gap-3">
            <Headphones className="w-5 h-5 text-gray-400" />
            <span>Audio-only lessons</span>
          </div>
          <div className="flex items-center gap-3">
            <Download className="w-5 h-5 text-gray-400" />
            <span>Download and watch offline (select plans)</span>
          </div>
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-gray-400" />
            <span>Downloadable class guides for every class</span>
          </div>
          <div className="flex items-center gap-3">
            <Monitor className="w-5 h-5 text-gray-400" />
            <span>Watch on desktop, TV, or mobile devices</span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-gray-400" />
            <span>New classes added every month</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-gray-400" />
            <span>30-day money back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionB;
