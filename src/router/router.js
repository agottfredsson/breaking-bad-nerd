import React from "react";
import { Router } from "@reach/router";
import {
  Characters,
  Deaths,
  Episodes,
  Quotes,
  Start,
  Feedback,
} from "../screens";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <Start path="/*" />
    <Characters path="/characters" />
    <Deaths path="/deaths" />
    <Episodes path="/episodes" />
    <Quotes path="/quotes" />
    <Feedback path="/feedback" />
  </Router>
);
