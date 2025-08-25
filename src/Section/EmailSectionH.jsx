function EmailSectionH() {
  return (
    <div className="bg-black text-white w-screen h-[160px] flex gap-6 pl-20 pr-20" >
      <div className=" flex flex-col gap-4 w-[39%] text-white ml-10">
        <span className="font-bold"> Try Some of our classes</span>
        <p className="text-gray-600">
          Enter your email and we’ll send you some samples of our favorite
          classes.
        </p>
      </div>
      <div className="flex flex-col gap-0">
        <label htmlFor="Email" className="font-bold text-white">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="w-[600px] border-2 p-1 text-gray-700 placeholder:text-gray-500"
          id=""
          placeholder="Enter Email Address"
        />
        <p className="flex  items-center gap-1 text-sm">
          <input type="checkbox" name="" id="" className="w-4 h-4 " />I agree to
          receive email updates on all MasterClass products.
        </p>
        <p className="flex  items-center gap-1 text-sm">
          By clicking "submit" and sharing your email, you agree to our Terms of
          Service and Privacy Policy.
        </p>
      </div>
      <div>
        <button className="bg-black border-2 rounded-sm border-gray-600 text-white mt-5 cursor-pointer  w-[125px] h-[41px] hover:bg-gray-800">
          Submit
        </button>
      </div>
    </div>
  );
}
export default EmailSectionH;
