import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroSection from "../home/HeroSection";

describe("Hero Component", () => {
    test("renders hero image", () =>{
        render(<HeroSection/>);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/homeHero.png")
        
    });
})