import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

// placeholder for data from db
const skills = [
  {
    id: 1,
    name: "React.js",
  },
  {
    id: 2,
    name: "Node.js",
  },
  {
    id: 3,
    name: "Redux",
  },
  {
    id: 4,
    name: "HTML",
  },
  {
    id: 5,
    name: "CSS",
  },
  {
    id: 6,
    name: "Bootstrap",
  },
  {
    id: 7,
    name: "Material UI",
  },
  {
    id: 8,
    name: "Redux Saga",
  },
  {
    id: 9,
    name: "MongoDb",
  },
];

const HardSkills = () => {
  return (
    <div className="cardSection">
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className="itemTitle"
      >
        Hard Skills
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

export default HardSkills;
