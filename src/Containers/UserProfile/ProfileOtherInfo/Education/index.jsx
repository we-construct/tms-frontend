import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import AddEducation from "./AddEducation";

const Education = ({ id, educationList }) => {
  return (
    <div className="cardSection">
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className="itemTitle"
      >
        Education
        <AddEducation length={educationList.length} id={id} />
      </Typography>
      <div className="cards">
        {educationList === null ? (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            No education data inserted.
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
                    Grade: {e.grade}
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
