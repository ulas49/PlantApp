import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export interface Category {
  id: number;
  name: string;
  title: string;
  image: {
    url: string;
  };
}

interface CategoriesState {
  data: Category[];
  loading: boolean;
  error: string | null;
}


export const fetchCategories = createAsyncThunk<Category[]>(
  'categories/fetchCategories',
  async () => {
    const response = await axios.get('https://dummy-api-jtg6bessta-ey.a.run.app/getCategories');
    return response.data.data; 
  }
);


const initialState: CategoriesState = {
  data: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export default categoriesSlice.reducer;
