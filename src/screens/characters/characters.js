import React, { useEffect, useState } from "react";
import { Navigation } from "../../components/Navigation";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import { getCharacters } from "../../api";
import { Character } from "../../components/Character";

export const Characters = () => {
  const [characters, setCharacters] = useState({});
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const result = await getCharacters();
    setCharacters(result);
    setLoading(false);
  };

  return (
    <div className={classes.container}>
      <Navigation />
      {loading ? (
        <div className={classes.loaderContainer}>
          <CircularProgress />
        </div>
      ) : null}
      {!loading && characters.map((char) => <Character char={char} />)}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    width: "100vw",
    backgroundColor: "black",
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
