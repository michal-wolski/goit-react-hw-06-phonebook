import { createReducer } from '@reduxjs/toolkit';
import { createContact } from './Actions';
import { initialState } from './Constants';

export default createReducer((state = initialState), {
  [createContact]: (state, action) => state.contacts.items.push(action.payload),
});
