import { createSlice } from "@reduxjs/toolkit";
import {
  ROUTES_STATUS_ERROR,
  ROUTES_STATUS_FINISHED,
  ROUTES_STATUS_LOADING,
} from "../../helpers";

const initialState = {
  routes: [],
  currentRoute: null,
  status: ROUTES_STATUS_LOADING,
};

export const routesReducer = createSlice({
  name: "routes",
  initialState,
  reducers: {
    getRoutesFetch: (state) => {
      state.status = ROUTES_STATUS_LOADING;
    },
    getRoutesSuccess: (state, action) => {
      state.routes = action.payload;
      state.status = ROUTES_STATUS_FINISHED;
    },
    getRoutesFailed: (state) => {
      state.status = ROUTES_STATUS_ERROR;
    },
    setCurrentRoute: (state, action) => {
      state.currentRoute = action.payload;
    },
  },
});

export const {
  getRoutesFetch,
  getRoutesSuccess,
  getRoutesFailed,
  setCurrentRoute,
} = routesReducer.actions;

export default routesReducer.reducer;
