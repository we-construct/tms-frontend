import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

// placeholder for data from db
const educationList = [
  {
    id: 1,
    name: "Armenian State University of Economics",
    faculty: "Management",
    from: "01/09/2015",
    to: "01/09/2021",
  },
  {
    id: 2,
    name: "RAU",
    faculty: "CS",
    from: "01/09/2015",
    to: "01/09/2021",
  },
  {
    id: 3,
    name: "UFAR",
    faculty: "Management",
    from: "01/09/2031",
    to: "01/09/2033",
  },
  {
    id: 4,
    name: "AUA",
    faculty: "CS",
    from: "01/09/2015",
    to: "01/09/2021",
  },
];

const Education = () => {
  return (
    <div className="cardSection">
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className="itemTitle"
      >
        Education
      </Typography>
      <div className="cards">
        {educationList.length === 0 ? (
          <Typography gutterBottom variant="h6" component="h2">
            Please fill your profile data.
          </Typography>
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
                    From: {e.from}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    To: {e.to}
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
