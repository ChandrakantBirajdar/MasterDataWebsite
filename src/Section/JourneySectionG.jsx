// function JourneySectionG() {
//   return (
//     <div className="h-[890px] w-full flex flex-col items-center gap-6  bg-black">
//       <div className="flex flex-col items-center gap-6 p-20">
//         <h1 className="text-4xl font-bold">Start your journey today.</h1>
//         <p>
//           Choose from 3 plans. Starting at ₹999 <strong>₹600/month</strong>,
//           billed annually. 30-day money back guaranteed.
//         </p>
//         <div className="flex gap-2">
//           <button className=" h-[41px] w-[190px] rounded-sm bg-pink-900 text-white cursor-pointertext-white p-2 flex items-center justify-center ">
//             <span className="font-bold"> Get</span> MasterClass
//           </button>
//           <button className=" h-[41px] w-[190px] rounded-sm  cursor-pointer bg-[#363535] text-white p-2 flex items-center justify-center ">
//             Explore Classes
//           </button>
//         </div>
//       </div>
//       <div className="bg-gray-600 w-[90%] pl-30 h-[32%] rounded-sm flex flex-row justify-center items-center">
//         <div className="h-[50%] w-[50%] ">
//           <img
//             src="https://www.masterclass.com/cdn-cgi/image/width=1920,quality=75,format=webp/https://static.masterclass.com/maw_banner_image.png"
//             alt="Image not found"
//             className="mt-[-18%] h-[355px]"
//           />
//         </div>
//         <div className="h-[50%] w-[50%]  ml-[-90px] flex flex-col gap-4 text-white">
//           <p className="text-gray-900">
//             <strong className="text-white">MasterClass</strong> At Work
//           </p>
//           <h1 className="text-4xl font-bold to-white">LEVEL UP YOUR TEAM</h1>
//           <p className="w-[70%] font-bold text-gray-800 ">
//             See why leading organizations rely on MasterClass for learning &
//             development.
//           </p>
//           <div className=" flex gap-2">
//             <button className=" h-[41px] w-[190px] rounded-sm  cursor-pointer bg-[#D61A46] text-white p-2 flex items-center justify-center ">
//               Contact Sales
//             </button>
//             <button className=" h-[41px] w-[190px] rounded-sm  cursor-pointer bg-gray-900 text-white p-2 flex items-center justify-center hover:bg-gray-800">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default JourneySectionG;

export default function JourneySectionG() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4 pt-10">
      <div className="bg-[#2e3a4b] rounded-xl shadow-lg flex flex-col md:flex-row max-w-5xl w-full overflow-hidden">
        {/* Left Image */}
        <div className="md:w-1/2 w-full h-72 md:h-auto">
          <img
            src="https://www.masterclass.com/cdn-cgi/image/width=1920,quality=75,format=webp/https://static.masterclass.com/maw_banner_image.png" // Replace with your image path
            alt="Team Work"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full p-6 md:p-10 flex flex-col justify-center text-white">
          <p className="text-sm text-gray-300 font-medium mb-2">
            MasterClass At Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            LEVEL UP YOUR TEAM
          </h2>
          <p className="text-gray-300 mb-6">
            See why leading organizations rely on MasterClass for learning &
            development.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#e63946] hover:bg-[#c92f3d] text-white px-6 py-3 rounded-lg font-medium shadow-md transition w-full sm:w-auto">
              Contact Sales
            </button>
            <button className="bg-[#1a2230] hover:bg-[#0f172a] text-white px-6 py-3 rounded-lg font-medium shadow-md transition w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
