function QuestionSectionI() {
  return (
    <div className="h-[600px] w-screen bg-black text-white flex flex-col items-center ">
      <div className="w-[70%] bg-gray-700 flex flex-col items-center items-center">
        <h1 className="font-bold text-4xl w-full flex justify-center">
          Frequently asked questions
        </h1>
        <div className="w-full flex flex-col pl-20 gap-2  justify-center">
          <span>General</span>
          <p
            className="text-white p-2 bg-gray-500 rounded-sm h-[41px] flex  items-center text-center w-[90%] cursor-pointer "
            id="first"
            onClick={() => getData()}
          >
            What is MasterClass ?
            {function getData() {
              document.getElementById("first").innerText =
                "hell world and how are you";
            }}
          </p>
          <p
            className="text-white p-2 bg-gray-500 rounded-sm h-[41px] flex  items-center text-center w-[90%] cursor-pointer"
            id="secoend"
          >
            What is MasterClass ?
          </p>
          <p
            className="text-white p-2 bg-gray-500 rounded-sm h-[41px] flex  items-center text-center w-[90%] cursor-pointer "
            id="third"
          >
            What is MasterClass ?
          </p>
        </div>
      </div>
    </div>
  );
}
export default QuestionSectionI;
