
const Hero = () => {
  return (
    <div className=" w-full h-[85vh]">
      <img src="https://thumbs.dreamstime.com/b/cruise-ship-3728559.jpg" alt=""
        className="w-full h-full object-cover  "
        />
      {/*  max-w-[1140px] m-auto */}
      <div className="max-w-[1140px] m-auto ">   
        <div className="absolute top-[40%] w-full max-w-[600px] h-full flex flex-col text-white px-4">
          <h1 className="font-bold text-4xl">Find Your First Trip</h1>
          <h2 className=" text-4xl italic py-2">With Wekkaway</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, necessitatibus? Provident sint vitae veritatis aliquam aspernatur eum maxime blanditiis obcaecati!</p>
        </div>
      </div>
    </div>
  )
}

export default Hero