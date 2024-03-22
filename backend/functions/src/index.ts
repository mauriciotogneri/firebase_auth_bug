import {beforeUserCreated} from 'firebase-functions/v2/identity';

export const authBeforeUserCreated = beforeUserCreated((event) => {
  console.log(JSON.stringify(event));
});
