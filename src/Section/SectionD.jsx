function SectionD() {
  return (
    <div className="bg-black text-white w-screen flex flex-col gap-12 items-center h-[500px]">
      <div className=" text-2xl font-bold">Hear from Our Members </div>
      <div className="w-[80%]  flex flex-row justify-around gap-4">
        <div className=" bg-[#222326] w-[33%] rounded-sm p-4 flex flex-col justify-around">
          <p>
            “It gives me the ability to{" "}
            <strong>use my down time to learn new things</strong> instead of
            just scrolling on social media.”
          </p>
          <div className="flex gap-6">
            <img
              src="/images/image.png"
              alt=""
              className="bg-red-500 h-[50px] w-[50px] rounded-full"
            />
            <div>
              <strong>Omri</strong>
              <p>New Member</p>
            </div>
          </div>
        </div>

        <div className=" bg-[#222326] w-[33%] rounded-sm p-4 flex flex-col justify-around">
          <p>
            “I have not found another platform that offers the same level or
            amount of <strong> amazing learning opportunities.</strong>”
          </p>
          <div className="flex gap-6">
            <img
              src="https://www.masterclass.com/cdn-cgi/image/width=48,quality=75,format=webp/https://static.masterclass.com/hp_testimonials_jared.jpg"
              alt=""
              className="bg-red-500 h-[50px] w-[50px] rounded-full"
            />
            <div>
              <strong>Jared</strong>
              <p>Member since 2022</p>
            </div>
          </div>
        </div>

        <div className=" bg-[#222326] w-[33%] rounded-sm p-4 flex flex-col justify-around">
          <p>
            “It gives me the ability to{" "}
            <strong>use my down time to learn new things</strong> instead of
            just scrolling on social media.”
          </p>
          <div className="flex gap-6">
            <img
              src="https://www.masterclass.com/cdn-cgi/image/width=48,quality=75,format=webp/https://static.masterclass.com/hp_testimonials_amy.jpg"
              alt=""
              className="bg-red-500 h-[50px] w-[50px] rounded-full"
            />
            <div>
              <strong>Omri</strong>
              <p>New Member</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="h-[41px] w-[190px] rounded-xl font-bold cursor-pointer bg-[#D61A46] text-white p-2 flex items-center justify-center">
          Get MasterClass
        </button>
      </div>
      <div className="w-[45%] text-white text-4xl font-bold text-center">
        <p>Meet the world's best.</p>
        <p> New classes added every month.</p>
      </div>
    </div>
  );
}
export default SectionD;
