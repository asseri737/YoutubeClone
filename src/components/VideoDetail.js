import React from "react";

import { Paper, Typography,Card } from "@material-ui/core";
import '../app.css';
export default ({ video }) => {
  if (!video) return <div className="aroundHide"> <h4 id="wellHide">Search what ever you like</h4></div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment className="RF">
      <Card elevation={6} style={{ height: "30%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Card>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
}
