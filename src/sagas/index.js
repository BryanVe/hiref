import {
  all,
  // fork
} from "redux-saga/effects"

function* rootSaga() {
  yield all([
    // fork(exampleSaga)
  ])
}

export default rootSaga
