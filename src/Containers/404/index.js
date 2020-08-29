import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PageWrapper from "../../Components/PageWrapper";
import Typography from "@material-ui/core/Typography";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "70vh",
  },
}));

const ErrorPage = () => {
  const classes = useStyles();

  return (
    <PageWrapper>
      <div className={classes.container}>
        <Typography variant="h4">404</Typography>
        <Typography variant="h4">Page not found!</Typography>
      </div>
    </PageWrapper>
  );
};

export default ErrorPage;
