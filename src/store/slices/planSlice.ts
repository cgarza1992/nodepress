import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlanState {
  activeGrid: 'wpengine' | 'auctane' | null;
  flippedTileId: string | null;
}

const initialState: PlanState = {
  activeGrid: null,
  flippedTileId: null,
};

export const planSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    flipTile: (state, action: PayloadAction<string>) => {
      state.flippedTileId = state.flippedTileId === action.payload ? null : action.payload;
    },
    setActiveGrid: (state, action: PayloadAction<'wpengine' | 'auctane' | null>) => {
      state.activeGrid = action.payload;
      state.flippedTileId = null;
    },
    resetGrid: (state) => {
      state.flippedTileId = null;
    },
  },
});

export const { flipTile, setActiveGrid, resetGrid } = planSlice.actions;
export default planSlice.reducer;
