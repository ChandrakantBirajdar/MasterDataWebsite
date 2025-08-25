

function Navbar() {
  return (
    <div>
      <div className="bg-black  h-[60px] text-white flex justify-between items-center ">
        <div className="ml-20 flex justify-between items-center gap-4">
          <p className="font-bold ">
            <span className="text-red-400">M</span> MasterClass
          </p>
          <button
            className="h-[41px] w-[120px] rounded-sm font-bold cursor-pointer bg-[#303136] text-white p-2 flex items-center justify-center"
            onClick="#emailSection"
          >
            Browser
          </button>
          <input
            type="search"
            name="search"
            placeholder="What do you want to learn today?"
            className="h-[41px] w-[320px] rounded-sm bg-[#303136] p-2 border-gray-700 outline-gray-700"
          />
        </div>
        <div className="w-[600px]">
          <ul className="flex justify-between gap-2 items-center w-full font-bold">
            <li>At Works </li>
            <li>Gifts</li>
            <li>View Plans</li>
            <li>Log In</li>
            <li>
              <button className="mr-20 h-[41px] w-[190px] rounded-sm  cursor-pointer bg-[#D61A46] text-white p-2 flex items-center justify-center ">
                <span className="font-bold"> Get</span> MasterClass
              </button>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}
export default Navbar;
