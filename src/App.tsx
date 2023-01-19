import React, { lazy, Suspense, useState } from "react";
import { ColorModeContext, tokens, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/dashboard/global/Topbar";
import Sidebar from "./pages/dashboard/global/Sidebar";
import { Routes, Route } from "react-router-dom";
// import Team from "./pages/team";
// import Invoices from "./pages/invoices";
// import Contacts from "./pages/contacts";
// import Form from "./pages/Form";
// import Bar from "./pages/bar";
// import Bar from "./pages/bar";
// import Bar from "./pages/bar";

function App() {
  const [isSidebar, setIsSidebar] = useState<boolean>(true);
  const [theme, colorMode] = useMode();
  const Team = lazy(() => import("./pages/team"));
  const Invoices = lazy(() => import("./pages/invoices"));
  const Line = lazy(() => import("./pages/line"));
  const Contacts = lazy(() => import("./pages/contacts"));
  const Bar = lazy(() => import("./pages/bar"));
  const Pie = lazy(() => import("./pages/invoices/pie"));
  const Form = lazy(() => import("./pages/form"));
  const FAQ = lazy(() => import("./pages/faq"));
  const Geography = lazy(() => import("./pages/geography"));
  const Dashboard = lazy(() => import("./pages/dashboard"));
  const Calendar = lazy(() => import("./pages/calendar"));

  return (
    <ColorModeContext.Provider value={colorMode as any}>
      <ThemeProvider theme={theme as any}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />

            <Suspense>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/line" element={<Line />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/form" element={<Form />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
