import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "@/api/auth";

export const loginUser = createAsyncThunk(
  "login",
  async (data, { rejectWithValue }) => {
    try {

      const result = await login(data);
      localStorage.setItem("authToken", result.token);

      return result;

    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);
