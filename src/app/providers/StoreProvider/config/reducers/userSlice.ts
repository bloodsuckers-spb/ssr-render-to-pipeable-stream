import { createSlice } from '@reduxjs/toolkit';
import { Character } from '../../pages/home/models';

interface UserState {
  characters: Character[];
  isLoading: boolean;
  error: string;
}

export const initialValue: UserState = {
  characters: [],
  isLoading: false,
  error: '',
};

export const characterSlice = createSlice({
  name: 'charcter',
  initialState: '',
  reducers: {
  },
});

export const characterReducer = characterSlice.reducer;