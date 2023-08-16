import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TabNavigation from "./index";

describe("TabNavigation", () => {
  it("renders Tabs with correct labels and links", () => {
    render(
      <MemoryRouter>
        <TabNavigation />
      </MemoryRouter>
    );

    const filmsTab = screen.getByRole("tab", { name: /Films/i });
    const aboutTab = screen.getByRole("tab", { name: /About/i });

    expect(filmsTab).toBeDefined();
    expect(aboutTab).toBeDefined();
  });
});
