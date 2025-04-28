import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export interface Question {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order:number;
}

interface QuestionsState {
  data: Question[];
  loading: boolean;
  error: string | null;
}


export const fetchQuestions = createAsyncThunk<Question[]>(
  'questions/fetchQuestions',
  async () => {
    const response = await axios.get('https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions');
    return response.data; 
  }
);


const initialState: QuestionsState = {
  data: [],
  loading: false,
  error: null,
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export default questionsSlice.reducer;
