"use client"; // Client components

import React, { useState, useEffect, useCallback } from 'react';

interface FallbackProps {
  error: Error | null;
}

interface Props {
  Fallback: React.ComponentType<FallbackProps>;
  children: React.ReactNode;
}

const useErrorBoundary = () => {
  const [error, setError] = useState<Error | null>(null);
  const trowError = useCallback((error: Error) => {
    setError(error);
  }, []);

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  return [trowError, setError] as const;
};

const ErrorBoundary = ({ Fallback, children }: Props) => {
  const [throwError, resetError] = useErrorBoundary();

  useEffect(() => {
    resetError(null);
  }, [children, resetError]);

  try {
    return children as JSX.Element;
  } catch (error) {
    throwError(error as Error);
    return <Fallback error={error as Error} />;
  }
};

export default ErrorBoundary;
