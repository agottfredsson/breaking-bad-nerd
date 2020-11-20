import React, { useEffect, useState } from "react";
import { Navigation } from "../../components/Navigation";
import { getEpisodes } from "../../api";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.jpg";
import { CircularProgress } from "@material-ui/core";

export const Episodes = () => {
  const [episodes, setEpisodes] = useState({});
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const result = await getEpisodes();
    console.log("resss", result);
    setEpisodes(result);
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
        episodes.map((episode) => {
          return (
            <div className={classes.content}>
              <img className={classes.image} src={logo} alt="" />

              <div className={classes.description}>
                <h3 className={classes.text}>Title</h3>
                <p className={classes.text}>{episode.title}</p>
                <h3 className={classes.text}>Season</h3>
                <p className={classes.text}>{episode.season}</p>
              </div>
              <div className={classes.characters}>
                <h3 className={classes.text}>Characters</h3>
                {episode.characters.map((x) => {
                  return <p className={classes.text}>{x}</p>;
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    width: "100vw",
    backgroundColor: "black",
  },
  content: {
    marginTop: "150px",
    display: "flex",
    marginLeft: "100px",
  },
  description: {
    width: "300px",
    marginTop: "70px",
    marginLeft: "100px",
  },
  text: {
    color: "white",
  },
  characters: {
    marginLeft: "300px",
    marginTop: "70px",
  },
  image: {
    height: "500px",
    width: "400px",
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
