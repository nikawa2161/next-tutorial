"use client"; // Client components

import { useEffect } from "react";

export default function Error({
  error
}: {
  error: Error | null
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>予期せぬエラーが発生しました。</h1>
    </div>
  );
}