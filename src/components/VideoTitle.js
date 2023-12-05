const VideoTitle = ({title, overview}) => {
  return (
    <div className="px-12 flex flex-col justify-center absolute bg-gradient-to-r from-black aspect-video w-screen z-10">
        <h1 className="text-6xl font-bold text-white">{title}</h1>
        <p className="text-lg py-6 w-1/3 text-white">{overview}</p>
        <div className="">
            <button className="bg-slate-50 text-stone-950 px-10 py-3 rounded text-lg font-bold bg-opacity-90 hover:bg-opacity-80"> ▶️ &nbsp; Play</button>
            <button className="bg-gray-500 bg-opacity-50 text-white px-10 py-3 rounded text-lg font-bold ml-5">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle