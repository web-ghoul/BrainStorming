import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "@/components/Home/Home";
import { ThemeProvider, createTheme } from "@mui/material";
import { useRouter } from "next/navigation";
const theme = createTheme();

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Home Component", () => {
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

  it("Home Button", async () => {
    // Mock useRouter inside the test case
    useRouter.mockReturnValue({
      push: jest.fn(),
    });

    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );

    const startButtonElement = screen.getByTestId("start_button");
    expect(startButtonElement).toBeInTheDocument();
    fireEvent.click(startButtonElement);

    // Wait for the navigation to complete
    await waitFor(() => {
      expect(useRouter().push).toHaveBeenCalledWith("/teams");
    });
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
