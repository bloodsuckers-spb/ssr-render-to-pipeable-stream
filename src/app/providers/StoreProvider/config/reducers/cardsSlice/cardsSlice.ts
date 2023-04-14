import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormCardData } from 'pages/forms/modules/FormCard/FormCard.models';

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
