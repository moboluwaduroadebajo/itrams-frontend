import ApiInstance from "@/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { LoginPayloadType, UserEntityType } from "@/types/account.type";
import { toast } from "react-toastify";
import { Alert } from "@/components/Toast/Alert";

export const login = createAsyncThunk<UserEntityType, LoginPayloadType>(
  "account/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await ApiInstance.post(
        "/auth/login",
        { username, password },
        { withCredentials: true }
      );
      localStorage.setItem(
        "eitrams-token",
        "Bearer " + response.data.data.accessToken
      );
      localStorage.setItem("eitrams-userRole", response.data.data.user.type);
      console.log(response.data);

      return response.data.data.user;
    } catch (err) {
      const error = err as AxiosError<Error>;
      if (!error.response) {
        throw err;
      }
      toast.error(<Alert message={error.response.data.message} type="error" />);

      return rejectWithValue(error.response.data);
    }
  }
);
