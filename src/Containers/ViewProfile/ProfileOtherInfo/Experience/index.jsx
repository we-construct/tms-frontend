import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const Experience = ({ experienceList }) => {
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
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            No experience data inserted.
          </Typography>
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
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Experience;
