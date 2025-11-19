import React, { useState } from "react";
import { Button } from "../components/ui";

// Simple Lego-style icons for illustration
function LegoDot({ color = "#fbbf24", size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" style={{marginBottom: -3}}>
      <rect x="4" y="4" width="14" height="14" rx="4" fill={color} stroke="#222" strokeWidth="1.5"/>
      <ellipse cx="11" cy="7.2" rx="3.8" ry="3.1" fill="#fff" opacity="0.6"/>
    </svg>
  );
}

export default function ExampleButtons() {
  const [loadingBtn, setLoadingBtn] = useState(false);

  return (
    <main style={{ maxWidth: 650, margin: "2rem auto", padding: "2rem" }}>
      <h2 style={{marginBottom: 12}}>Button Variants & <span style={{color: "#3b82f6"}}>Lego Style</span> Examples</h2>
      <div style={{ display: "flex", gap: "1em", flexWrap: "wrap", marginBottom: "2rem" }}>
        {/* Traditional children usage */}
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        {/* New 'text' prop (label only) */}
        <Button text="Text Primary" />
        <Button variant="secondary" text="Text Secondary" />
        <Button variant="ghost" text="Text Ghost" />
        {/* Both children+text: children takes precedence */}
        <Button text="Text Prop Overwritten">Child Precedence</Button>
      </div>

      <h4 style={{margin: "1.5em 0 0.5em"}}>Sizes</h4>
      <div style={{ display: "flex", gap: "1em", flexWrap: "wrap", marginBottom: "2rem" }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      <h4 style={{margin: "1.2em 0 0.5em"}}>Disabled / Loading</h4>
      <div style={{ display: "flex", gap: "1em", flexWrap: "wrap", marginBottom: "2rem" }}>
        <Button disabled>Disabled</Button>
        <Button variant="secondary" disabled>Disabled</Button>
        <Button variant="ghost" disabled>Disabled</Button>
        <Button loading>Loading</Button>
        <Button variant="secondary" loading>Loading</Button>
        <Button variant="ghost" loading>Loading</Button>
        <Button
          loading={loadingBtn}
          onClick={() => {
            setLoadingBtn(true);
            setTimeout(() => setLoadingBtn(false), 900);
          }}
        >
          Click to Load
        </Button>
      </div>

      <h4 style={{margin: "1.5em 0 0.5em"}}>Block, Squared, Elevate</h4>
      <div style={{ display: "grid", gap: "0.75em", gridTemplateColumns: "1fr", marginBottom: "2rem", maxWidth: 400 }}>
        <Button block squared>
          Block Squared
        </Button>
        <Button block variant="secondary" elevate>
          Block + Elevate
        </Button>
        <Button block variant="primary" squared elevate>
          Block + Squared + Elevate
        </Button>
      </div>

      <h4 style={{margin: "1.5em 0 0.5em"}}>With Icons (Lego Dot)</h4>
      <div style={{ display: "flex", gap: "1em", flexWrap: "wrap", marginBottom: "2rem" }}>
        <Button squared icon={<LegoDot color="#3b82f6" />}>Icon Left</Button>
        <Button squared block elevate icon={<LegoDot color="#06b6d4" />} size="lg">
          Lego Accent
        </Button>
        <Button variant="secondary" squared iconRight={<LegoDot color="#64748b" />}>Icon Right</Button>
        <Button variant="ghost" squared icon={<LegoDot color="#06b6d4" />} iconRight={<LegoDot color="#3b82f6" size={15}/>}>
          Icon Both
        </Button>
        <Button squared block elevate icon={<LegoDot color="#f43f5e" />} iconRight={<LegoDot color="#0ea5e9" />} size="md">
          Icon + Elevate Block
        </Button>
      </div>

      <h4 style={{margin: "1.2em 0 0.5em"}}>Accessibility</h4>
      <div>
        <Button ariaLabel="Accessible Label Example" onClick={() => alert("Clicked!")} size="md">
          Accessible Button (with aria-label)
        </Button>
      </div>
    </main>
  );
}
