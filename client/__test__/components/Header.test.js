import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import { useSelector } from "react-redux";
const theme = createTheme();

jest.mock("next/navigation");
jest.mock("react-redux");
const pushMock = jest.fn();
useRouter.mockReturnValue({
  push: pushMock,
});
useSelector.mockReturnValue({
  push: pushMock,
});

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({
    push: jest.fn(),
  }),
}));

describe("Header Component", () => {
  it("Home Logo", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
  });

});
