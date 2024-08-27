const Booking = () => {
  return (
    <div id="deals"  className=" max-w-[1140px] m-auto w-full p-4">
      <form className="lg:flex lg:justify-between w-full items-center">
        <div className="flex flex-col w-full my-2 py-2">
          <label className="" >Destination</label>
          <select className="border p-2 rounded-md md:w-full lg:w-[300px]" >
            <option value="">grande antigua</option>
            <option value="">key west</option>
            <option value="">maldives</option>
            <option value="">cozumel</option>
          </select>
        </div>
        <div className="flex w-full gap-8">
            <div className="flex flex-col w-full lg:max-w-[250px] my-2 py-2">
              <label >Check-in</label>
              <input type="date" className="border rounded-md p-2" />
            </div>
            <div className="flex flex-col w-full lg:max-w-[250px] my-2 py-2">
              <label >Check-out</label>
              <input type="date" className="border rounded-md p-2" />
            </div>
        </div>
        <div className="flex w-full flex-col lg:ml-6">
            <label >Search</label>
            <button className=" w-full">Rates & Availabilities</button>
        </div>
      </form>
    </div>
  )
}

export default Booking