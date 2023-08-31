import React from "react";
const { render, screen, fireEvent } = require("@testing-library/react");
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/app/theme";
import Header from "@/components/Header/Header";
describe("Header Component", () => {
  describe("Header When Not Signed", () => {
    it("Check Number of Buttons", () => {
      render(
        <ThemeProvider theme={theme}>
          <Header signed={false} user_id={undefined} />
        </ThemeProvider>
      );
      const loginAndRegister = screen.getAllByTestId("auth_button");
      expect(loginAndRegister).toHaveLength(2);
    });
  });

  describe("Header When Signed", () => {
    it("Check User Button", () => {
      render(
        <ThemeProvider theme={theme}>
          <Header signed={true} user_id={"2"} />
        </ThemeProvider>
      );
      const userButton = screen.getByTestId("user_button");
      expect(userButton).toBeInTheDocument();
    });
  });
});
