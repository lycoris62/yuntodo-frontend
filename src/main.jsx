import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </LocalizationProvider>
  </QueryClientProvider>
);
