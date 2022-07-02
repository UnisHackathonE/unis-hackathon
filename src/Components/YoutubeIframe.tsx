import React from "react";

interface Props {
  id: string;
  width: string;
  height: string;
}

const YoutubeIframe = ({id, width, height}: Props) => {
  const embedUrl = `https://www.youtube.com/embed/${id}`;

  return (
      <iframe id={id} width={width} height={height}
              src={embedUrl}
              frameBorder="0" allowFullScreen/>
  )
};

export default YoutubeIframe;