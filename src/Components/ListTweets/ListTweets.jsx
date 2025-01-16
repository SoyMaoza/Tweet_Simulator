import React from "react";
import { Grid } from "@mui/system";
import "./ListTweets.css";
import Tweet from "../Tweet";

const ListTweets = (props) => {
  const { allTweets,deleteTweet } = props;

  if (!allTweets || allTweets.length === 0) {
    return (
      <div className="list-tweets-empty">
        <h2>No hay Tweets...</h2>
      </div>
    );
  }
  return (
    <Grid container spacing={3} className="list-tweets">
      {allTweets.map((tweet, index) => (
        <Grid item xs={4} key={index}>
          <Tweet tweet={tweet} index={index} deleteTweet={deleteTweet} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListTweets;
