import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const SoftSkills = ({ skills }) => {
  return (
    <div className="cardSection">
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className="itemTitle"
      >
        Soft Skills
      </Typography>
      <div className="cards">
        {skills === null || skills.length === 0 ? (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            No soft skills inserted.
          </Typography>
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

export default SoftSkills;
