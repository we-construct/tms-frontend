import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ProgressBar from "../ProgressBar";

// placeholder for db
const languages = [
  {
    id: 1,
    name: "Armenian",
    value: 100,
  },
  {
    id: 2,
    name: "Russian",
    value: 100,
  },
  {
    id: 3,
    name: "English",
    value: 70,
  },
  {
    id: 4,
    name: "Ukrainian",
    value: 40,
  },
];

const Languages = () => {
  return (
    <>
      <ListItem>
        {/* //todo take profile full status data from db */}
        <ListItemText primary="Languages`" style={{ color: "#2096F3" }} />
      </ListItem>
      {languages.length === 0
        ? null
        : languages.map((lang) => {
            return (
              <ListItem key={lang.id} divider>
                {/* //todo take profile full status data from db */}
                <div style={{ width: "100%" }}>
                  <ListItemText secondary={lang.name} />
                  <ProgressBar value={lang.value} />
                </div>
              </ListItem>
            );
          })}
    </>
  );
};

export default Languages;
