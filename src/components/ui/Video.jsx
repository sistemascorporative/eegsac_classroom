import React from 'react';

const VideoForSection = ({ url }) => {
  return (
    <div className="float-right ml-4 mb-4 max-w-[350px] md:w-1/2">
      <iframe
        className="w-full h-[197px]"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const VideoTitleForSection = ({ url, text }) => {
  return (
    <div className="float-right ml-4 max-w-[350px] md:w-1/2">
      <p className="text-center uppercase text-orange-500 text-[13px] px-2 pb-1">{text}</p>
      <iframe
        className="w-full h-[197px]"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const VideoTextForSection = ({ url, text }) => {
  return (
    <div className="float-right ml-4 mb-4 max-w-[350px] md:w-1/2">
      <iframe
        className="w-full h-[197px]"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="mt-2 text-center text-[13px] rounded-lg p-2 bg-gray-100">{text}</p>
    </div>
  );
};

export { VideoForSection, VideoTitleForSection, VideoTextForSection };