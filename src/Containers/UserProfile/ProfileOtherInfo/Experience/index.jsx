import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import AddExperience from "./AddExperience";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Experience = ({ id, experienceList }) => {
  const classes = useStyles();

  return (
    <div className="cardSection">
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className="itemTitle"
      >
        Experience
        <AddExperience id={id} />
      </Typography>
      <div className="cards">
        {experienceList === null ? (
          <div className={classes.root}>
            <LinearProgress color="secondary" />
          </div>
        ) : (
          experienceList.map((job) => {
            return (
              <Card
                className="profileCard"
                key={job.id}
                spacing={2}
                elevation={0}
              >
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {job.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Company: {job.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Job: {job.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Job Type: {job.jobTime}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    From: {job.from_date.slice(0, 10)}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    To: {job.to_date.slice(0, 10)}
                  </Typography>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Experience;
