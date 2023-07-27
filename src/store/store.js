import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import routesReducer from "./reducers/routesReducer.js";
import routesSaga from "./sagas/routesSaga.js";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    routes: routesReducer,
  },
  middleware: [saga],
});
saga.run(routesSaga);

export default store;
