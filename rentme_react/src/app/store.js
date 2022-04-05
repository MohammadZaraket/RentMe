import { createStore } from 'redux';


export const store = createStore(() => ({
    credentials: [
      {
        longitude: '',
        latitude: '',
        bedrooms: 0,
        price: 0
      }
    ],
    signin:{auth:false}
  }));

export default store;

