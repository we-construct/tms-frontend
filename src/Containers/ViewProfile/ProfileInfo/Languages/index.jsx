import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ProgressBar from "../ProgressBar";

const Languages = () => {
  // placeholder
  const languages = null;
  return (
    <>
      <ListItem>
        <ListItemText primary="Languages`" style={{ color: "#2096F3" }} />
      </ListItem>
      {languages === null
        ? null
        : languages.map((lang) => {
            return (
              <ListItem key={lang.id} divider>
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
