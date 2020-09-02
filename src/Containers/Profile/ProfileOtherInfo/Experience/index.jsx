import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

// placeholder for data from db
const experienceList = [
  {
    id: 1,
    company: "WeConstruct",
    jobTime: "Full Time",
    name: "Full Stack Developer",
    from: "01/09/2015",
    to: "01/09/2021",
  },
  {
    id: 2,
    company: "SoftConstruct",
    jobTime: "Full Time",
    name: "HR",
    from: "01/09/2015",
    to: "01/09/2021",
  },
  {
    id: 3,
    company: "PicsArt",
    jobTime: "Part Time",
    name: "QA Engineer",
    from: "01/09/2015",
    to: "01/09/2021",
  },
];

const Experience = () => {
  return (
    <div className="cardSection">
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className="itemTitle"
      >
        Experience
      </Typography>
      <div className="cards">
        {experienceList.length === 0 ? (
          <Typography gutterBottom variant="h6" component="h2">
            Please fill your profile data.
          </Typography>
        ) : (
          experienceList.map((job) => {
            return (
              <Card
                className="profileCard"
                key={job.id}
                spacing={2}
                elevation={2}
              >
                <CardActionArea>
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
                      From: {job.from}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      To: {job.to}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Experience;
