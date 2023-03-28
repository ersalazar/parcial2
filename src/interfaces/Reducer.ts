
interface blockState {
    isBlocked: boolean,
}

type blockAction =
| { type: 'unblock' }
| { type: 'block'};

export const initialState: blockState = {
    isBlocked: false
  }

export const blockReducer = (state: blockState, action: blockAction): blockState => {
    switch (action.type) {
      case 'block':
        return { 
          isBlocked: true 
      };
      case 'unblock':
          return {
            isBlocked: false
          };
      default:
        return state;
    }
  };