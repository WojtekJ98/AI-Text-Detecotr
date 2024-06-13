import { configureStore } from "@reduxjs/toolkit";
import { detectorApi } from "./detector";

export const store = configureStore({
  reducer: {
    [detectorApi.reducerPath]: detectorApi.reducer,
  },
  middleware: (getDefaultModdleware) =>
    getDefaultModdleware().concat(detectorApi.middleware),
});
