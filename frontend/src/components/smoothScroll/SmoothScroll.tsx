"use client";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScroll = ({ children }: React.PropsWithChildren) => {
  return (
    <ReactLenis options={{ duration: 2 }} root>
      {children}
    </ReactLenis>
  );
};

export { SmoothScroll };
