import { TYPES } from '../actions/items';

export function items(state = [], action) {
  let index;
  let items;

  const findTask = (id) => state.findIndex((task) => task._id === id);

  switch (action.type) {
    case TYPES.TASKS_FETCH_END:
      return action.items;

    case TYPES.TASKS_RESET:
      return [];

    case TYPES.TASK.UPDATE:
      index = findTask(action.payload.id);

      if (index === -1) {
        return state;
      }
      items = [...state];
      items[index].update = action.payload.status;
      return items;

    case TYPES.TASK.CHANGED:
      index = findTask(action.item._id);

      if (index === -1) {
        return state;
      }
      items =  [...state];
      items[index] = action.item;
      return items;

    case TYPES.TASK.CREATED:
      items = [...state];
      items.push(action.item);
      return items;

    case TYPES.TASK.REMOVED:
      index = findTask(action.id);

      if (index === -1) {
        return state;
      }

      items = [...state];
      items.splice(index, 1);
      return items;

    default:
      return state;
  }
}