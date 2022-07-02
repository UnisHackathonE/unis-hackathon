import React from "react";

interface Props {
  id: string;
}

const YoutubeIframe = ({id}: Props) => {
  const embedUrl = `https://www.youtube.com/embed/${id}`;

  return (
      <iframe id={id} width="90%"
              src={embedUrl}
              frameBorder="0" allowFullScreen/>
  )
};

export default YoutubeIframe;