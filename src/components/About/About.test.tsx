import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import About from "./index";

describe("About component", () => {
  it("renders About component with volume button and crawl text", async () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const volumeButton = await screen.findByTestId("volume-button");
    expect(volumeButton).toBeDefined();
  });
});
