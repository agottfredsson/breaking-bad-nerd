import React, { useState } from "react";
import { Navigation } from "../../components/Navigation";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Formik, Field, Form } from "formik";
import Rating from "@material-ui/lab/Rating";

export const Feedback = () => {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState("");
  const [error, setError] = useState("");
  const [value, setValue] = React.useState(1);

  const StyledRating = withStyles({
    icon: {
      color: "white",
    },
    iconFilled: {
      color: "yellow",
    },
  })(Rating);

  return (
    <div className={classes.container}>
      <Navigation />
      <div className={classes.content}>
        <h1 className={classes.header}>Submit feedback of this website!</h1>
        <div className={classes.formik}>
          <Formik
            initialValues={{
              name: "",
              message: "",
            }}
            onSubmit={(values) => {
              if (values.message !== "" && values.name !== "") {
                setError("");
                setSubmitted(values.message);
                console.log(values);
              } else {
                setSubmitted("");
                setError("You need to fill all inputs");
              }
            }}
          >
            <Form className={classes.form}>
              <label htmlFor="name" className={classes.label}>
                Name
              </label>
              <Field
                id="name"
                name="name"
                placeholder="Name"
                className={classes.name}
              />
              <label htmlFor="message" className={classes.label}>
                Message
              </label>
              <Field
                id="message"
                name="message"
                placeholder="Message"
                className={classes.message}
              />
              <label htmlFor="message" className={classes.label}>
                How much did you like this site?
              </label>

              <StyledRating
                name="pristine"
                value={value}
                color="white"
                backgroundColor="yellow"
                className={classes.rating}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <button type="submit" className={classes.button}>
                Submit
              </button>
              {submitted && (
                <p className={classes.label}> Thanks for you feedback!</p>
              )}
              {error && <p className={classes.error}>{error}</p>}
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "black",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
    flexDirection: "column",
  },
  header: {
    alignSelf: "center",
    color: "white",
  },
  rating: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  error: {
    color: "red",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  name: {
    width: "150px",
  },
  message: {
    width: "150px",
  },
  label: {
    color: "white",
    marginTop: "30px",
  },
  button: {
    width: "150px",
    borderRadius: 22,
    height: "30px",
    alignSelf: "center",
    marginTop: "10px",
  },
}));
