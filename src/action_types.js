function createBaseRequestActionType(actionName) {
  if (actionName === '') {
    return {
      NAME: 'BASE_ACTION_TYPE',
      EVENT: 'EVENT',
      SUCCESS: 'SUCCESS',
      FAILURE: 'FAILURE',
      LOADING: 'LOADING',
      CLEAN: 'CLEAN',
    };
  }
  return {
    NAME: actionName,
    EVENT: `${actionName}_EVENT`,
    SUCCESS: `${actionName}_SUCCESS`,
    FAILURE: `${actionName}_FAILURE`,
    LOADING: `${actionName}_LOADING`,
    CLEAN: `${actionName}_CLEAN`,
  };
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_ASYNC = createBaseRequestActionType('INCREMENT_ASYNC');
