import React from "react"
const { render, screen } = require("@testing-library/react")
import Home from "@/components/Home/Home"
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/app/theme";

describe('Home Component', () => {
    it("Home Text",()=>{
        render(
            <ThemeProvider theme = {theme}>
                <Home/>
            </ThemeProvider>
        )
        const homeText1 = screen.getByText(/Think Then.../i)
        const homeText2 = screen.getByText(/Code It./i)
        expect(homeText1).toBeInTheDocument() 
        expect(homeText2).toBeInTheDocument() 
    })
    
    it("Home Image",()=>{
        render(
            <ThemeProvider theme = {theme}>
                <Home/>
            </ThemeProvider>
        )
        const homeImg = screen.getByAltText("home_background")
        expect(homeImg).toBeInTheDocument()
    })

    it("Home Image Shape",()=>{
        render(
            <ThemeProvider theme = {theme}>
                <Home/>
            </ThemeProvider>
        )
        const homeImgShape = screen.getByAltText("home_Image_shape")
        expect(homeImgShape).toBeInTheDocument()
    })
});
