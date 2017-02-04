export var addTodos = (todos) => {
  return {
    type: 'MOVE_PIECE',
    todos
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};
