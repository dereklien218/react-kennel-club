import { createStore, combineReducers, applyMiddleware } from "redux";
import { Agility } from "./agility";
import { Conformation } from "./conformation";
import { News } from "./news";
import { Obedience } from "./obedience";
import { Puppy } from "./puppy";
import { Rally } from "./rally";
import { Scentwork } from "./scentwork";
import { GalleryReducer } from "./gallery";
import { createForms } from "react-redux-form";
import { InitialRegistration } from "./forms";
import { InitialFeedback } from "./contact";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      agility: Agility,
      conformation: Conformation,
      news: News,
      obedience: Obedience,
      puppy: Puppy,
      rally: Rally,
      scentwork: Scentwork,
      gallery: GalleryReducer,
      ...createForms({
        registrationForm: InitialRegistration,
        feedbackForm: InitialFeedback,
      }),
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
