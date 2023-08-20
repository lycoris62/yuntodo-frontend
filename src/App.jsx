import { createContext, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Router from "./Router.jsx";

const queryClient = new QueryClient();
export const AppContext = createContext("");

const App = () => {
  const [token, setToken] = useState("");

  return (
    <AppContext.Provider value={{ token, setToken }}>
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Router />
        </LocalizationProvider>
      </QueryClientProvider>
    </AppContext.Provider>
  );
};

export default App;
