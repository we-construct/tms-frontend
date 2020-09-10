import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import AddEducation from "./AddEducation";
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Education = ({ id, educationList }) => {
  const classes = useStyles();

  return (
    <div className="cardSection">
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className="itemTitle"
      >
        Education
        <AddEducation id={id} />
      </Typography>
      <div className="cards">
        {educationList === null ? (
              <div className={classes.root}>
                <LinearProgress color="secondary" />
                </div>
        ) : (
          educationList.map((e) => {
            return (
              <Card
                className="profileCard"
                key={e.id}
                spacing={2}
                elevation={0}
              >
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {e.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Uni: {e.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Faculty: {e.faculty}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Grade: {e.grade}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    From: {e.from_date.slice(0,10)}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    To: {e.to_date.slice(0,10)}
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

export default Education;
