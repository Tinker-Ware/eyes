import { fromJS } from "immutable";
import PropTypes from "prop-types";
import React from "react";
import Snackbar from "material-ui/Snackbar";

const Notification = ( {setNotification, message} ) => {
  const handleNotificationClose = () => {
    setNotification(fromJS({
      "notifications":""}));
  };
  return (
    <Snackbar
        autoHideDuration={3000}
        message={message?message:""}
        onRequestClose={handleNotificationClose}
        open={message?true:false}
    />
  );
};

Notification.propTypes = {
  message: PropTypes.string,
  setNotification: PropTypes.func.isRequired
};

export default Notification;
