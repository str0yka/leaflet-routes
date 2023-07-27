import { call, put, takeEvery } from "redux-saga/effects";

import {
  getRoutesFailed,
  getRoutesSuccess,
} from "../reducers/routesReducer.js";
import { RouteService } from "../../services";

function* workGetRoutesFetch() {
  try {
    const routes = yield call(RouteService.getRoutes);
    yield put(getRoutesSuccess(routes));
  } catch (err) {
    yield put(getRoutesFailed());
  }
}

function* routesSaga() {
  yield takeEvery("routes/getRoutesFetch", workGetRoutesFetch);
}

export default routesSaga;
