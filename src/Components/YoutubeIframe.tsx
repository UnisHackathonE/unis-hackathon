import React from "react";

interface Props {
  url: string;
}

const YoutubeIframe = ({url}: Props) => {
  const id = url.split("v=")[1];
  const embedUrl = `https://www.youtube.com/embed/${id}`;

  return (
      <iframe id={id} width="90%"
              src={embedUrl}
              frameBorder="0" allowFullScreen/>
  )
};

export default YoutubeIframe;