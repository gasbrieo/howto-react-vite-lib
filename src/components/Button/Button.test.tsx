import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("should render properly", () => {
    const { getByText } = render(<Button>MyButton</Button>);

    expect(getByText("MyButton")).toBeInTheDocument();
  });
});
