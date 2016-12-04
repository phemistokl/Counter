function counter(state, action) {
    switch (action.type) {
        case 'ADD_COUNTER': {
          return {
              id: Date.now(),
              count: 0
          };
        }

        case 'DECREMENT': {
          if ( state.id !== action.id ) {
            return state;
          }
          return {
            ...state,
              count: state.count - action.value
          }
        }

        case 'INCREMENT': {
          if ( state.id !== action.id ) {
            return state;
          }
          return {
            ...state,
              count: state.count + action.value
          }
        }

        default: {
            return state;
        }
    }
}

export default function counters(state = [ { count: 0, id: 1 } ], action) {
    switch (action.type) {
        case 'ADD_COUNTER': {
          return [
              ...state,
              counter(state, action)
          ];
        }

        case 'DECREMENT': {
            return state.map(item => counter(item, action));
        }

        case 'INCREMENT': {
            return state.map(item => counter(item, action));
        }

        default: {
            return state;
        }
    }
}
