import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlanState {
  activeGrid: 'wpengine' | 'auctane' | null;
  flippedTileId: string | null;
  selectedPlanId: string | null;
}

const initialState: PlanState = {
  activeGrid: null,
  flippedTileId: null,
  selectedPlanId: null,
};

export const planSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    flipTile: (state, action: PayloadAction<string>) => {
      state.flippedTileId = state.flippedTileId === action.payload ? null : action.payload;
    },
    selectPlan: (state, action: PayloadAction<string>) => {
      state.selectedPlanId = state.selectedPlanId === action.payload ? null : action.payload;
    },
    setActiveGrid: (state, action: PayloadAction<'wpengine' | 'auctane' | null>) => {
      state.activeGrid = action.payload;
      state.flippedTileId = null;
      state.selectedPlanId = null;
    },
    resetGrid: (state) => {
      state.flippedTileId = null;
      state.selectedPlanId = null;
    },
  },
});

export const { flipTile, selectPlan, setActiveGrid, resetGrid } = planSlice.actions;
export default planSlice.reducer;
