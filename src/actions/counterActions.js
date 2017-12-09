import { INCREMENT } from 'reducers/counterReducer';

// eslint-disable-next-line import/prefer-default-export
export function increment() {
  return {
    type: INCREMENT
  };
}
