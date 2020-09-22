import React, {useEffect, useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {connect} from "react-redux";
import ListItemText from "@material-ui/core/ListItemText";
import ProgressBar from "./ProgressBar";
import Languages from "./Languages";
import EditUser from "../EditUser";

const ProfileInfo = ({ user, languages }) => {
  const today = new Date();
  const regDate = new Date(user.createdAt);
  const oneDay = 1000 * 60 * 60 * 24;
  const workingOnCompany = Math.ceil(
    (today.getTime() - regDate.getTime()) / oneDay
  );

  return (
    <>
      <Grid item lg={3} xl={4} md={4} sm={12} xs={12}>
        <Paper className="mainProfileSection" elevation={0}>
          <EditUser user={user} />
          <Avatar className="avatar">{`${user.firstName[0]}. ${user.lastName[0]}`}</Avatar>
          <List component="nav" className="userInfoList">
            <ListItem>
              {/* //todo take profile full status data from db */}
              <div style={{ width: "100%", paddingBottom: "16px" }}>
                <ListItemText secondary={`Profile is ${100}% full!`} />
                <ProgressBar value={100} />
              </div>
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Main information`"
                style={{ color: "#2096F3" }}
              />
            </ListItem>
            <ListItem divider>
              <ListItemText secondary="ID:" />
              <ListItemText primary={user.id} className="listItemPrimary" />
            </ListItem>
            <ListItem divider>
              <ListItemText secondary="First Name:" />
              <ListItemText
                primary={user.firstName}
                className="listItemPrimary"
              />
            </ListItem>
            <ListItem divider>
              <ListItemText secondary="Last Name:" />
              <ListItemText
                primary={user.lastName}
                className="listItemPrimary"
              />
            </ListItem>
            <ListItem divider>
              <ListItemText secondary="Address:" />
              <ListItemText
                // todo add address to db
                primary="Yerevan, Armenia"
                className="listItemPrimary"
              />
            </ListItem>
            <ListItem divider>
              <ListItemText secondary="Birth date:" />
              {user.birthday === null ? null : (
                <ListItemText
                  primary={user.birthday.slice(0, 10)}
                  className="listItemPrimary"
                />
              )}
            </ListItem>
            <ListItem divider>
              <ListItemText secondary="Email:" />
              <ListItemText primary={user.email} className="listItemPrimary" />
            </ListItem>
            <ListItem divider>
              <ListItemText secondary="Phone:" />
              <ListItemText
                primary={user.phoneNumber}
                className="listItemPrimary"
              />
            </ListItem>
            <ListItem divider>
              <ListItemText secondary="Role:" />
              <ListItemText primary={user.role} className="listItemPrimary" />
            </ListItem>
            <ListItem divider>
              <ListItemText secondary="Position:" />
              <ListItemText
                primary={user.position}
                className="listItemPrimary"
              />
            </ListItem>
            <ListItem divider>
              <ListItemText secondary="Status:" />
              <ListItemText primary={user.status} className="listItemPrimary" />
            </ListItem>
            <ListItem divider>
              <ListItemText secondary="Worked:" />
              <ListItemText
                primary={`${workingOnCompany} days`}
                className="listItemPrimary"
              />
            </ListItem>
            {/* languages (will be taken from db) */}
            <Languages languages={languages} />
          </List>
        </Paper>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  languages: state.profileData.languages,
})

export default connect(mapStateToProps, null)(ProfileInfo);
