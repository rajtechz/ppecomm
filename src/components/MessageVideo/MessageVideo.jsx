import React, { useRef, useState } from "react";
import messageVideo from "../../assets/messageVideo/messageVideo.mp4";
import { Volume2, VolumeX, Expand } from "lucide-react";
import SeasionTopCard from "../cardsection/SeasionTopCard";

function MessageVideo() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <>
      <div className="bg-[#f9f9f9]  rounded-3xl  mx-auto relative overflow-hidden px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-center font-bold text-lg md:text-2xl mb-4">
          VIRAT HAS A MESSAGE FOR YOU
        </h2>

        <div className="relative rounded-2xl overflow-hidden p-2 bg-[#F3F3F3]">
          <video
            ref={videoRef}
            src={messageVideo}
            autoPlay
            loop
            muted={muted}
            playsInline
            className="w-full h-auto object-cover aspect-video rounded-2xl"
          />

          {/* Controls */}
          <div className="absolute top-3 right-3 flex gap-2">
            <button
              onClick={toggleMute}
              className="bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-md transition"
            >
              {muted ? (
                <VolumeX className="w-5 h-5 text-black" />
              ) : (
                <Volume2 className="w-5 h-5 text-black" />
              )}
            </button>

            <button
              onClick={handleFullScreen}
              className="bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-md transition"
            >
              <Expand className="w-5 h-5 text-black" />
            </button>
          </div>
          <SeasionTopCard />
        </div>
      </div>
    </>
  );
}

export default MessageVideo;
