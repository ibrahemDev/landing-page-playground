import React from 'react';

export function Page({
  is404,
  errorInfo,
}: {
  is404: boolean;
  errorInfo?: string;
}) {
  if (is404) {
    return (
      <>
        <h1>404 Page Not Found</h1>
        <p>This page could not be found.</p>
        <p>{errorInfo}</p>
      </>
    );
  }
  return (
    <>
      <h1>500 Internal Error</h1>
      <p>Something went wrong.</p>
    </>
  );
}
