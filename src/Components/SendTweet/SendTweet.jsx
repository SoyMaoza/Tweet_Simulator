import React from "react";
import "./SendTweet.css";
import { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon, { Add } from "@mui/icons-material/Add";
import moment from "moment";
import ModalContainer from "../ModalContainer";
import FormSendTweet from "../FormSendTweet";
import { TWEETS_STORAGE } from "../../utils/constants";

const SendTweet = (props) => {
  const { setToastProps, allTweets } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  const sendTweet = (event, formValue) => {
    event.preventDefault();
    const { name, tweet } = formValue;
    let allTweetsArray = [];

    if(allTweets){
      allTweetsArray=allTweets
    }

    if (!name || !tweet) {
      console.log("WARNING: Todos los campos son obligatorios");
      setToastProps({
        open:true,
        text:"WARNING: Todos los campos son obligatorios"
      })
    } else {
      formValue.time = moment();
      allTweetsArray.push(formValue);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
      console.log("Tweet enviado correctamente.");
      setToastProps({
        open:true,
        text:"Tweet enviado correctamente."
      })
      closeModal();
    }
    allTweetsArray = [];
  };

  return (
    <div className="send-tweet">
      <Fab
        className="send-tweet__open-modal"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>
      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSendTweet sendTweet={sendTweet} />
      </ModalContainer>
    </div>
  );
};

export default SendTweet;
