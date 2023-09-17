// import React from "react";
// import { render, screen } from "@testing-library/react";
// import { ThemeProvider, createTheme } from "@mui/material";
// import { useRouter } from "next/navigation";
// import Header from "@/components/Header/Header";
// import { useSelector } from "react-redux";
// const theme = createTheme();

// jest.mock("next/navigation");
// jest.mock("react-redux");
// const pushMock = jest.fn();
// useRouter.mockReturnValue({
//   push: pushMock,
// });
// useSelector.mockReturnValue({
//   push: pushMock,
// });

// describe("Sidebar Component", () => {
//   beforeAll(() => {
//     global.innerWidth = 320;
//   });
//   it("Sidebar Logo", () => {
//     render(
//       <ThemeProvider theme={theme}>
//         <Header />
//       </ThemeProvider>
//     );
//     const headerLogo = screen.getByText("BrainStorming");
//     expect(headerLogo).toBeInTheDocument();
//   });

//   it("Home Text", () => {
//     render(
//       <ThemeProvider theme={theme}>
//         <Header />
//       </ThemeProvider>
//     );
//     const homeText = screen.getByText("Home");
//     const teamsText = screen.getByText("Teams");
//     const aboutText = screen.getByText("About");
//     expect(homeText).toBeInTheDocument();
//     expect(teamsText).toBeInTheDocument();
//     expect(aboutText).toBeInTheDocument();
//   });
// });
