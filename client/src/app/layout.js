"use client";
import "./globals.css";
import { ModeProvider } from "@/context/ModeContext";
import { TeamModalProvider } from "@/context/TeamModalContext";
import { DrawerProvider } from "@/context/DrawerContext";
import Main from "./Main/Main";
import { theme } from "./theme";
import { BackLoadingProvider } from "@/context/BackLoadingContext";
import { CarouselProvider } from "@/context/CarouselContext";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { LoadingButtonProvider } from "@/context/LoadingButtonContext";
import { ThemeProvider } from "@mui/material/styles";
import { ProfileModalProvider } from "@/context/ProfileModalContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="App for help student to share our ideas with our teams"
        />
        <title>BrainStorming</title>
      </head>
      <body>
        <Provider store={store}>
          <LoadingButtonProvider>
            <ModeProvider>
              <CarouselProvider>
                <BackLoadingProvider>
                  <TeamModalProvider>
                    <ProfileModalProvider>
                      <DrawerProvider>
                        <ThemeProvider theme={theme}>
                          <Main>{children}</Main>
                        </ThemeProvider>
                      </DrawerProvider>
                    </ProfileModalProvider>
                  </TeamModalProvider>
                </BackLoadingProvider>
              </CarouselProvider>
            </ModeProvider>
          </LoadingButtonProvider>
        </Provider>
      </body>
    </html>
  );
}
