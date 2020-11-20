import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { Navigation } from "../../components/Navigation";
import { getQuotes } from "../../api";
import { makeStyles } from "@material-ui/core/styles";

export const Quotes = () => {
  const [quotes, setQuotes] = useState({});
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const result = await getQuotes();
    console.log("resss", result);
    setQuotes(result);
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
      <div className={classes.quotes}>
        {!loading &&
          quotes.map((quote) => (
            <div className={classes.content}>
              <p className={classes.author}>{quote.author}</p>
              <p className={classes.text}>"{quote.quote}"</p>
            </div>
          ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    width: "100vw",
    backgroundColor: "black",
  },
  content: {
    marginTop: "75px",
  },
  text: {
    color: "white",
    fontStyle: "italic",
  },
  author: {
    color: "white",
    fontSize: "20px",
  },
  quotes: {
    textAlign: "center",
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
