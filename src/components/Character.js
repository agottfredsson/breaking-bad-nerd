import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const Character = ({ char }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={char.img} alt="" className={classes.image} />
      <div className={classes.description}>
        <h1 className={classes.title}>{char.name}</h1>
        <h4 className={classes.title}>Nickname</h4>
        <p className={classes.text}>"{char.nickname}"</p>
        <h4 className={classes.title}>Birthday</h4>
        <p className={classes.text}>{char.birthday}</p>
        <h4 className={classes.title}>Status</h4>
        <p className={classes.text}>{char.status}</p>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: "100px",
  },
  description: {
    marginLeft: "100px",
  },
  image: {
    width: "450px",
    height: "600px",
    borderRadius: "20px",
  },
  title: {
    color: "white",
  },
  text: {
    color: "white",
    fontStyle: "italic",
  },
}));
