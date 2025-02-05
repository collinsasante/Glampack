import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext.jsx";
import NavigationProvider from "./contentApi/navigationProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </AppContextProvider>
  </BrowserRouter>
);
