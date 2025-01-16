import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import moment from "moment";
import "./Tweet.css";

export default function Tweet(props) {
  const {
    tweet: { name, tweet, time },
    index,
    deleteTweet
  } = props;

  return (
  <Card variant="outlined" className="tweet">
        <CardContent>
            <div className="tweet__header">
                <h5>{name}</h5>
                <DeleteTwoToneIcon onClick={()=>deleteTweet(index)}/>
            </div>
            <p>{tweet}</p>
            <div className="tweet__data-add-tweet">
                {moment(time).format('DD/MM/YYYY HH:mm')}
            </div>
        </CardContent>
  </Card>
  )
}
 