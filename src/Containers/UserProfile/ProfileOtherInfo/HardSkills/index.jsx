import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import AddHardSkill from "./AddHardSkill";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const HardSkills = ({ skills, id }) => {
  const classes = useStyles();

  return (
    <div className="cardSection">
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className="itemTitle"
      >
        Hard Skills
        <AddHardSkill id={id}/>
      </Typography>
      <div className="cards">
        {skills.length === 0 ? (
          <div className={classes.root}>
            <LinearProgress color="secondary" />
          </div>
        ) : (
          skills.map((skill) => {
            return (
              <Card className="profileCard" key={skill.id} elevation={0}>
                <CardContent className="skillItem">
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ color: "#fff" }}
                  >
                    {skill.name}
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

export default HardSkills;
