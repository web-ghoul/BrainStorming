"use client";
import "./globals.css";
import "./app.css";
import { ModeProvider } from "@/context/ModeContext";
import { TeamModalProvider } from "@/context/TeamModalContext";
import { DrawerProvider } from "@/context/DrawerContext";
import Main from "./Main/Main";
import { BackLoadingProvider } from "@/context/BackLoadingContext";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { LoadingButtonProvider } from "@/context/LoadingButtonContext";
import { ProfileModalProvider } from "@/context/ProfileModalContext";
import { SparkModalProvider } from "@/context/SparkModalContext";
import { ExtensionsProvider } from "@/context/ExtensionsContext";
import { ChosenDataViewProvider } from "@/context/ChosenDataViewContext";
import MyThemeProvider from "@/context/MyThemeContext";
import { useContext } from "react";

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
          <MyThemeProvider>
            <ExtensionsProvider>
              <ChosenDataViewProvider>
                <SparkModalProvider>
                  <LoadingButtonProvider>
                    <ModeProvider>
                      <BackLoadingProvider>
                        <TeamModalProvider>
                          <ProfileModalProvider>
                            <DrawerProvider>
                              <Main>{children}</Main>
                            </DrawerProvider>
                          </ProfileModalProvider>
                        </TeamModalProvider>
                      </BackLoadingProvider>
                    </ModeProvider>
                  </LoadingButtonProvider>
                </SparkModalProvider>
              </ChosenDataViewProvider>
            </ExtensionsProvider>
          </MyThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
