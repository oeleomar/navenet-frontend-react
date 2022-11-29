import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/global-styles";

import { Page404 } from "./templates/Page404";
import { Setor } from "./templates/Setor";
import { Header } from "./components/Header";
import { Home } from "./templates/Home";
import { Processo } from "./templates/Processo";
import { LoginTemplate } from "./templates/LoginTemplate";
import { Admin } from "./templates/Admin";
import { AdminSetor } from "./templates/AdminSetor";
import { AdminCreateProcess } from "./templates/AdminCreateProcess";
import { AdmninEditProcess } from "./templates/AdminEditProcess";
import { AdminProcesso } from "./templates/AdminProcesso";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />

        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/setor/:setor" element={<Setor />} />
          <Route path="/setor/:setor/:id" element={<Processo />} />
          <Route path="/admin/auth" element={<LoginTemplate />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/setor/:setor" element={<AdminSetor />} />
          <Route path="/admin/setor/:setor/:id" element={<AdminProcesso />} />
          <Route
            path="/admin/setor/:setor/new"
            element={<AdminCreateProcess />}
          />
          <Route
            path="/admin/setor/:setor/:id/edit"
            element={<AdmninEditProcess />}
          />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
