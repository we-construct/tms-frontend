import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const ProgressBar = (props) => {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        {props.value === 100 ? (
          <LinearProgress variant="determinate" {...props} color="secondary" />
        ) : (
          <LinearProgress variant="determinate" {...props} color="primary" />
        )}
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

export default ProgressBar;
