import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ProgressBar from "../ProgressBar";

const Languages = ({ languages }) => {
  return (
    <>
      <ListItem>
        <ListItemText primary="Languages`" style={{ color: "#2096F3" }} />
      </ListItem>
      {languages.length === 0
        ? null
        : languages.map((lang) => {
            return (
              <ListItem key={lang.id} divider>
                <div style={{ width: "100%" }}>
                  <ListItemText secondary={lang.language} />
                  <ProgressBar value={lang.value} />
                </div>
              </ListItem>
            );
          })}
    </>
  );
};

export default Languages;
