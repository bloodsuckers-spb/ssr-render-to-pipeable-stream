import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormCardData } from 'app/types/FormCardData';

type CardsState = {
  cards: FormCardData[];
};

const initialState: CardsState = {
  cards: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards(state, action: PayloadAction<FormCardData>) {
      state.cards = [...state.cards, action.payload];
    },
  },
});

export const cardsReducer = cardsSlice.reducer;
