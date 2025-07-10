"use client";

import { NestedComponent } from "./nested-component";

export function ClientComponent() {
  return (
    <div>
      ClientComponent
      <NestedComponent />
    </div>
  );
}
