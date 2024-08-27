
const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className=" text-center text-gray-700">Send Us a message</h2>
      <p className=" text-center text-gray-700 py-2"> We are standing by!</p>
      <div className="grid md:grid-cols-2 gap-4">
        <img src="https://thumbs.dreamstime.com/b/cruise-ship-3728559.jpg" alt=""
          className=" w-full md:h-full object-cover p-2 max-h[500px] h-[200px] rounded-md"
          />
        <form >
          <div className="grid grid-cols-2">
            <input type="text" placeholder="First" className=" border p-2 m-2" />
            <input type="text" placeholder="Last" className=" border p-2 m-2" />
            <input type="text" placeholder="Email" className=" border p-2 m-2" />
            <input type="text" placeholder="Phone" className=" border p-2 m-2" />
            <input type="text" placeholder="Address" className=" border p-2 m-2 col-span-2" />
            <textarea className=" resize-none border p-2 m-2 col-span-2" cols="30" rows="6" placeholder="Your Note"></textarea>
            <button className=" m-2 col-span-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact