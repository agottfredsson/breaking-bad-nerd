import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { Navigation } from "../../components/Navigation";
import { getDeaths } from "../../api";
import { makeStyles } from "@material-ui/core/styles";
import skull from "../../assets/skull.jpg";

export const Deaths = () => {
  const [deaths, setDeaths] = useState({});
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const result = await getDeaths();
    console.log("resss", result);
    setDeaths(result);
    setLoading(false);
  };
  return (
    <div className={classes.container}>
      <Navigation />
      {loading && (
        <div className={classes.loaderContainer}>
          <CircularProgress />
        </div>
      )}
      {!loading &&
        deaths.map((death) => (
          <div className={classes.content}>
            <div className={classes.description}>
              <h3 className={classes.title}>{death.death}</h3>
              <h4 className={classes.title}>Death cause</h4>
              <p className={classes.text}>{death.cause}</p>
              <h4 className={classes.title}>Last words</h4>
              <p className={classes.text}>"{death.last_words}"</p>
              <h4 className={classes.title}>From episode</h4>
              <p className={classes.title}>{death.episode}</p>
              <h4 className={classes.title}>Total deaths</h4>
              <p className={classes.title}>{death.number_of_deaths}</p>
            </div>
            <img src={skull} alt="" className={classes.image} />
          </div>
        ))}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    width: "100vw",
    backgroundColor: "black",
  },
  content: {
    display: "flex",
  },
  description: {
    marginTop: "200px",
    marginLeft: "150px",
    width: "600px",
  },
  title: {
    color: "white",
  },
  text: {
    color: "white",
    fontStyle: "italic",
  },
  image: {
    marginTop: "80px",
  },
  loaderContainer: {
    width: "100vw",
    backgroundColor: "black",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: "200px",
  },
}));
