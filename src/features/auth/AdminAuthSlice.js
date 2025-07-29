import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Hardcoded admin credentials
const ADMIN_MOBILE = "9455055675";
const ADMIN_PASSWORD = "Admin@123";
const ADMIN_TOKEN = "admin-token-123456789";

// Check if admin is already logged in from localStorage
const getStoredAdminAuth = () => {
  try {
    const token = localStorage.getItem('adminToken');
    const admin = localStorage.getItem('adminData');
    if (token && admin) {
      return {
        admin: JSON.parse(admin),
        token: token,
        isAuthenticated: true
      };
    }
  } catch (error) {
    console.error('Error reading from localStorage:', error);
  }
  return null;
};

export const adminLogin = createAsyncThunk(
  "adminAuth/login",
  async ({ mobile, password }, { rejectWithValue }) => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Check if credentials match hardcoded admin values
      if (mobile === ADMIN_MOBILE && password === ADMIN_PASSWORD) {
        const adminData = {
          id: 1,
          name: "Admin User",
          mobile: mobile,
          email: "admin@ppecomm.com",
          role: "admin",
        };

        // Store in localStorage
        localStorage.setItem('adminToken', ADMIN_TOKEN);
        localStorage.setItem('adminData', JSON.stringify(adminData));

        return {
          admin: adminData,
          token: ADMIN_TOKEN,
        };
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      return rejectWithValue(error.message || "Login failed");
    }
  }
);

const storedAuth = getStoredAdminAuth();

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: {
    admin: storedAuth?.admin || null,
    token: storedAuth?.token || null,
    isAuthenticated: storedAuth?.isAuthenticated || false,
    loading: false,
    error: null,
    // Login form state
    mobile: "",
    password: "",
  },
  reducers: {
    adminLogout: (state) => {
      state.admin = null;
      state.token = null;
      state.isAuthenticated = false;
      state.mobile = "";
      state.password = "";
      state.error = null;
      // Clear localStorage
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminData');
    },
    setAdminMobile: (state, action) => {
      state.mobile = action.payload;
    },
    setAdminPassword: (state, action) => {
      state.password = action.payload;
    },
    clearAdminError: (state) => {
      state.error = null;
    },
    // Initialize auth from localStorage
    initializeAdminAuth: (state) => {
      const storedAuth = getStoredAdminAuth();
      if (storedAuth) {
        state.admin = storedAuth.admin;
        state.token = storedAuth.token;
        state.isAuthenticated = storedAuth.isAuthenticated;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Admin Login
      .addCase(adminLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload.admin;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.mobile = "";
        state.password = "";
        state.error = null;
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  adminLogout,
  setAdminMobile,
  setAdminPassword,
  clearAdminError,
  initializeAdminAuth,
} = adminAuthSlice.actions;

export default adminAuthSlice.reducer; 