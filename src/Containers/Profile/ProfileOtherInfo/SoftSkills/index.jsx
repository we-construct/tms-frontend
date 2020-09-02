import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

// placeholder for data from db
const skills = [
  {
    id: 1,
    name: "TeamWork",
  },
  {
    id: 2,
    name: "Presentation",
  },
  {
    id: 3,
    name: "Public speaking",
  },
  {
    id: 4,
    name: "Adaptability",
  },
  {
    id: 5,
    name: "Creativity",
  },
  {
    id: 6,
    name: "Resourcefulness",
  },
  {
    id: 7,
    name: "Troubleshooting",
  },
  {
    id: 8,
    name: "Facilitation",
  },
  {
    id: 9,
    name: "Managing difficult conversations",
  },
];

const SoftSkills = () => {
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
        {skills.length === 0 ? (
          <Typography gutterBottom variant="h6" component="h2">
            Please fill your profile data.
          </Typography>
        ) : (
          skills.map((skill) => {
            return (
              <Card
                className="profileCard"
                key={skill.id}
                elevation={0}
              >
                <CardActionArea className="skillItem">
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ color: "#fff" }}
                  >
                    {skill.name}
                  </Typography>
                </CardActionArea>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SoftSkills;
