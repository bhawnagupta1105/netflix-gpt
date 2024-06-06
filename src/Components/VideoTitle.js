const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div>
        <button className="text-black bg-white p-4 w-10 rounded-lg px-12 text-xl mx-2 hover:bg-opacity-75"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/play--v1.png" alt="play--v1"/>Play</button>
        <button className="text-white bg-black hover:bg-opacity-75 p-4 w-10 rounded-lg px-12 text-lg mx-2"><img width="48" height="48" src="https://img.icons8.com/parakeet-line/48/FFFFFF/info.png" alt="info"/> More Info</button>

        </div>
    </div>
  )
};
export default VideoTitle();
