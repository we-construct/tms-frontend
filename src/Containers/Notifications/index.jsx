import React, { useEffect } from "react";
import {useSnackbar} from "notistack";

const Notifications = ({ notification }) => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (notification !== null) {
      enqueueSnackbar(`${notification.text}`, {variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        }
      })
    }
    // eslint-disable-next-line
  }, [notification]);
  return (
    <>
      </>
  );
};

export default Notifications;
