import Api from '../services/api';

export const TYPES = {
  LOADING: 'TASKS_IS_LOADING',
  TASKS_FETCH_END: 'TASKS_FETCH_END',
  TASKS_RESET: 'TASKS_RESET',
  TASK: {
    UPDATE: 'UPDATE',
    CHANGED: 'CHANGED',
    CREATED: 'CREATED',
    REMOVED: 'REMOVED',
    RESET: 'RESET'
  }
};

function tasksReset() {
  return {
    type: TYPES.TASKS_RESET
  };
}

function taskUpdate(id, status) {
  return {
    type: TYPES.TASK.UPDATE,
    payload: { id, status }
  };
}

function loading(loading) {
  return {
    type: TYPES.LOADING,
    loading
  };
}

function tasksLoaded(items) {
  return {
    type: TYPES.TASKS_FETCH_END,
    items
  };
}

function taskChanged(item) {
  return {
    type: TYPES.TASK.CHANGED,
    item
  };
}

function taskCreated(item) {
  return {
    type: TYPES.TASK.CREATED,
    item
  };
}

function taskRemoved(id) {
  return {
    type: TYPES.TASK.REMOVED,
    id
  };
}

export function fetchTasks(params) {
  return (dispatch) => {
    dispatch(tasksReset());
    dispatch(loading(true));

    Api.tasks(params)
      .then(({ data }) => dispatch(tasksLoaded(data)))
      .finally(() => dispatch(loading(false)));
  };
}

export function updateTask(id, data) {
  return (dispatch) => {
    dispatch(taskUpdate(id, true));

    Api.updateTask(id, data)
      .then(({ data }) => dispatch(taskChanged(data)))
      .finally(() => dispatch(taskUpdate(id, false)));
  };
}

export function createTask(description) {
  return (dispatch) => {
    dispatch(loading(true));

    Api.createTask({ description })
      .then(({ data }) => dispatch(taskCreated(data)))
      .finally(() => dispatch(loading(false)));
  };
}

export function removeTask(id) {
  return (dispatch) => {
    dispatch(taskUpdate(id, true));

    Api.removeTask(id)
      .then(() => dispatch(taskRemoved(id)))
      .finally(() => dispatch(taskUpdate(id, false)));
  };
}