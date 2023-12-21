// CharacterComponent.test.js
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CharacterComponent from "./characterComponent";

describe("CharacterComponent", () => {
  const mockItem = {
    name: "Test Character",
    imageUrl: "test-image-url",
    tvShows: ["Show1", "Show2"],
    videoGames: ["Game1", "Game2"],
    enemies: ["Enemy1", "Enemy2"],
    sourceUrl: "http://example.com",
  };

  it("renders with correct content", () => {
    const { getByText, getByAltText } = render(
      <CharacterComponent item={mockItem} />
    );

    expect(getByText("Test Character")).toBeInTheDocument();
    //expect(getByAltText('Character Image for Test Character')).toBeInTheDocument();
    expect(getByText("Show1, Show2")).toBeInTheDocument();
    expect(getByText("Game1, Game2")).toBeInTheDocument();
    expect(getByText("Enemy1, Enemy2")).toBeInTheDocument();
  });

  it("does not render when item is null", () => {
    const { container } = render(<CharacterComponent item={null} />);

    expect(container.firstChild).toBeNull();
  });
});
