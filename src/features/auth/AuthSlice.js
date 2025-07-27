import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Hardcoded credentials
const HARDCODED_MOBILE = "9170412775";
const HARDCODED_OTP = "1234";

export const sendOTP = createAsyncThunk(
  "auth/sendOTP",
  async ({ mobile }, { rejectWithValue }) => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Check if mobile number matches hardcoded value
      if (mobile === HARDCODED_MOBILE) {
        return { message: "OTP sent successfully" };
      } else {
        throw new Error("Invalid mobile number");
      }
    } catch (error) {
      return rejectWithValue(error.message || "Failed to send OTP");
    }
  }
);

export const verifyOTP = createAsyncThunk(
  "auth/verifyOTP",
  async ({ mobile, otp }, { rejectWithValue }) => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Check if credentials match hardcoded values
      if (mobile === HARDCODED_MOBILE && otp === HARDCODED_OTP) {
        return {
          user: {
            id: 1,
            name: "Demo User",
            mobile: mobile,
            email: "demo@wrogn.com",
          },
          token: "demo-token-123",
        };
      } else {
        throw new Error("Invalid OTP");
      }
    } catch (error) {
      return rejectWithValue(error.message || "Invalid OTP");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    // Modal state
    showLoginModal: false,
    // OTP state
    mobile: "",
    otp: "",
    otpSent: false,
    otpLoading: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.showLoginModal = false;
      state.mobile = "";
      state.otp = "";
      state.otpSent = false;
    },
    showLoginModal: (state) => {
      state.showLoginModal = true;
      state.error = null;
    },
    hideLoginModal: (state) => {
      state.showLoginModal = false;
      state.error = null;
      state.mobile = "";
      state.otp = "";
      state.otpSent = false;
    },
    setMobile: (state, action) => {
      state.mobile = action.payload;
    },
    setOTP: (state, action) => {
      state.otp = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Send OTP
      .addCase(sendOTP.pending, (state) => {
        state.otpLoading = true;
        state.error = null;
      })
      .addCase(sendOTP.fulfilled, (state) => {
        state.otpLoading = false;
        state.otpSent = true;
        state.error = null;
      })
      .addCase(sendOTP.rejected, (state, action) => {
        state.otpLoading = false;
        state.error = action.payload;
      })
      // Verify OTP
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.showLoginModal = false;
        state.mobile = "";
        state.otp = "";
        state.otpSent = false;
        state.error = null;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  logout,
  showLoginModal,
  hideLoginModal,
  setMobile,
  setOTP,
  clearError,
} = authSlice.actions;

export default authSlice.reducer;
