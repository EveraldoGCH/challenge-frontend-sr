"use client";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { type FC, type ReactNode } from "react";
import customThemeOptions from "@/utils/theme";

const MaterialUIThemeProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <MuiThemeProvider theme={customThemeOptions}>{children}</MuiThemeProvider>
);

export default MaterialUIThemeProvider;
