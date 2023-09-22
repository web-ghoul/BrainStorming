import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material";
import Home from "@/components/Home/Home";
import { useRouter } from "next/navigation";
const theme = createTheme();

jest.mock("next/navigation");
const pushMock = jest.fn();
useRouter.mockReturnValue({
  push: pushMock,
});
describe.skip("Home Component", () => {
  it("Home Text", () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
    const headingElement1 = screen.getByText(/Think Then.../i);
    const headingElement2 = screen.getByText(/Code It/i);
    expect(headingElement1).toBeInTheDocument();
    expect(headingElement2).toBeInTheDocument();
  });
  it("Home Image", () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
    const homeImg = screen.getByAltText("home_background");
    expect(homeImg).toBeInTheDocument();
  });

  it("Home Image Shape", () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
    const homeImgShape = screen.getByAltText("home_Image_shape");
    expect(homeImgShape).toBeInTheDocument();
  });
});
