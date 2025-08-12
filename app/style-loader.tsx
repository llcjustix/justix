"use client";

import React from "react";

export const StyleLoader = () => (
  <>
    <link rel="icon" href="/favicon.png" sizes="any" />
    {/* eslint-disable-next-line @next/next/no-css-tags */}
    <link rel="preload" href="/globals.css" as="style" />
    {/* eslint-disable-next-line @next/next/no-css-tags */}
    <link
      rel="stylesheet"
      href="/globals.css"
      media="print"
      onLoad={(e: React.SyntheticEvent<HTMLLinkElement>) => {
        e.currentTarget.media = "all";
      }}
    />
    <noscript>
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link rel="stylesheet" href="/globals.css" />
    </noscript>
  </>
);
