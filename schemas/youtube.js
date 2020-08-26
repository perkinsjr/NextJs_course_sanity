import React from "react";
import getYouTubeId from "get-youtube-id";
import Youtube from "react-youtube";

const Preview = ({ value }) => {
  const { url } = value;
  const id = getYouTubeId(url);
  return <Youtube videoId={id} />;
};

export default {
  name: "youtube",
  type: "object",
  title: "Youtube Embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "Youtube Video URL",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: Preview,
  },
};
