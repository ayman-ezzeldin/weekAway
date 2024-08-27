
const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className=" text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
      <img src="https://thumbs.dreamstime.com/b/cruise-ship-3728559.jpg" alt=""
        className="w-full h-full object-cover sm:col-span-3 rounded-md shadow-md col-span-2 row-span-2 "
        />
      <img src="https://thumbs.dreamstime.com/b/cruise-ship-3728559.jpg" alt=""
        className="w-full h-full object-cover rounded-md shadow-md "
        />
      <img src="https://thumbs.dreamstime.com/b/cruise-ship-3728559.jpg" alt=""
        className="w-full h-full object-cover rounded-md shadow-md "
        />
      <img src="https://thumbs.dreamstime.com/b/cruise-ship-3728559.jpg" alt=""
        className="w-full h-full object-cover rounded-md shadow-md "
        />
      <img src="https://thumbs.dreamstime.com/b/cruise-ship-3728559.jpg" alt=""
        className="w-full h-full object-cover rounded-md shadow-md "
        />
      </div>
    </div>
  )
}

export default Gallery