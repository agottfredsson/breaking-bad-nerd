import React from "react";
import { Paper, AppBar, Tabs, Tab } from "@material-ui/core";
import { useNavigate } from "@reach/router";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import MovieIcon from "@material-ui/icons/Movie";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import FeedbackIcon from "@material-ui/icons/Feedback";

export const Navigation = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const AntTabs = withStyles({
    flexContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    root: {
      borderBottom: "1px solid #0e0e0e",
    },
    tabsRoot: {
      textAlign: "right",
    },
  })(Tabs);

  return (
    <Paper className={classes.container}>
      <div className={classes.test} />
      <AppBar position="static">
        <AntTabs aria-label="simple AntTabs example" className={classes.nav}>
          <div>
            <Tab
              icon={<HomeIcon />}
              label="Start"
              aria-label="Start"
              onClick={() => navigate(`/`)}
            />
            <Tab
              icon={<PeopleIcon />}
              label="Characters"
              onClick={() => navigate(`/characters/`)}
            />
            <Tab
              icon={<MoodBadIcon />}
              label="Deaths"
              onClick={() => navigate(`/deaths/`)}
            />
            <Tab
              icon={<MovieIcon />}
              label="Episodes"
              onClick={() => navigate(`/episodes/`)}
            />
            <Tab
              icon={<MenuBookIcon />}
              label="Quotes"
              wrapped={false}
              className={classes.tab}
              onClick={() => navigate(`/quotes/`)}
            />
          </div>
          <Tab
            icon={<FeedbackIcon />}
            label="Feedback"
            wrapped={false}
            className={classes.tab}
            onClick={() => navigate(`/feedback/`)}
          />
        </AntTabs>
      </AppBar>
    </Paper>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    width: "100vw",
  },
  nav: {
    backgroundColor: "black",
  },
  tab: {
    alignSelf: "flex-end",
  },
}));
