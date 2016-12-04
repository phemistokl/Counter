export const increment = (id, value) => ({ type: 'INCREMENT', value, id });

export const decrement = (id, value) => ({ type: 'DECREMENT', value, id });

export const addCounter = () => {
  return {
      type: 'ADD_COUNTER'
  };
};
