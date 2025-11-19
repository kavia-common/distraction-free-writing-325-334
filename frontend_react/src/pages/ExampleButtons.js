import React, { useState } from "react";
import { Button } from "../components/ui";

export default function ExampleButtons() {
  const [loadingBtn, setLoadingBtn] = useState(false);

  return (
    <main style={{ maxWidth: 600, margin: "2rem auto", padding: "2rem" }}>
      <h2>Button Variants & Examples</h2>
      <div style={{ display: "flex", gap: "1em", flexWrap: "wrap", marginBottom: "2rem" }}>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div style={{ display: "flex", gap: "1em", flexWrap: "wrap", marginBottom: "2rem" }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <div style={{ display: "flex", gap: "1em", flexWrap: "wrap", marginBottom: "2rem" }}>
        <Button disabled>Disabled</Button>
        <Button variant="secondary" disabled>Disabled</Button>
        <Button variant="ghost" disabled>Disabled</Button>
      </div>
      <div style={{ display: "flex", gap: "1em", flexWrap: "wrap", marginBottom: "2rem" }}>
        <Button loading>Loading</Button>
        <Button variant="secondary" loading>Loading</Button>
        <Button variant="ghost" loading>Loading</Button>
        <Button
          loading={loadingBtn}
          onClick={() => {
            setLoadingBtn(true);
            setTimeout(() => setLoadingBtn(false), 1000);
          }}
        >
          Click to Load
        </Button>
      </div>
      <div>
        <Button ariaLabel="Accessible Label Example" onClick={() => alert("Clicked!")} size="md">
          Accessible Button (with aria-label)
        </Button>
      </div>
    </main>
  );
}
