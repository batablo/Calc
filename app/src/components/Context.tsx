/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';
import { Actions, AppState, initialAppState } from '../reducers';

type ContextState = {
  state: AppState;
  dispatch(action: Actions): void;
};

const Context = createContext<ContextState>({
  state: initialAppState,
  dispatch(_) {
    console.warn('Context.Providerの外から呼ばれてまっせ');
  },
});

export default Context;
