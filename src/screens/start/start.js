import React, { useContext } from "react";
import { Navigation } from "../../components/Navigation";
import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/background.jpg";
import Context from "../../context/context";
import Rating from "@material-ui/lab/Rating";
import { Paper } from "@material-ui/core";

export const Start = () => {
  const classes = useStyles();
  const reviews = useContext(Context);

  return (
    <div className={classes.container}>
      <Navigation />
      <img src={background} alt="" className={classes.image} />
      <div className={classes.reviews}>
        {reviews.map((review) => (
          <Paper className={classes.reviews}>
            <p className={classes.name}>{review.name}</p>
            <p className={classes.label}>"{review.message}"</p>
            <Rating value={review.rating} readOnly />
          </Paper>
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    width: "100vh",
    borderColor: "black",
    borderWidth: 2,
  },
  name: {
    color: "white",
  },
  label: {
    color: "white",
    fontStyle: "italic",
  },
  image: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
  },
  reviews: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    marginLeft: "20px",
    marginTop: "20px",
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 22,
  },
}));
