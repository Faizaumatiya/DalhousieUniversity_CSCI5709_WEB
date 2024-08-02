/* Author: Faiza Umatiya */

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Badge } from '@material-ui/core';
import { Notifications as NotificationsIcon } from '@material-ui/icons';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  notificationsButton: {
    marginRight: theme.spacing(2),
  },
}));

const Notification = () => {
  const classes = useStyles();
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // fetch all notifications on component mount
    axios.get('http://localhost:8080/api/notification/:userId')
      .then((response) => {
        setNotifications(response.data.data);
        setUnreadCount(response.data.data.filter(n => !n.read).length);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleNotificationClick = () => {
    // mark all notifications as read on click
    axios.post('http://localhost:8080/api/notification/')
      .then(() => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
        setUnreadCount(0);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <IconButton
      aria-label={`${unreadCount} unread notifications`}
      color="inherit"
      onClick={handleNotificationClick}
      className={classes.notificationsButton}
    >
      <Badge badgeContent={unreadCount} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

export default Notification;
