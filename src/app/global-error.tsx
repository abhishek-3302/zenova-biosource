"use client";

import { useEffect } from "react";
import { RotateCcw, TriangleAlert } from "lucide-react";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en" style={{ backgroundColor: "#071a42", color: "#f8fafc" }}>
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "grid",
          placeItems: "center",
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",
          padding: "3rem 1.5rem",
        }}
      >
        <main style={{ textAlign: "center", maxWidth: "32rem" }}>
          <div
            style={{
              width: 64,
              height: 64,
              margin: "0 auto",
              display: "grid",
              placeItems: "center",
              borderRadius: 18,
              border: "1px solid rgba(15,159,154,0.5)",
              background: "rgba(15,159,154,0.5)",
              color: "#18d0c9",
            }}
          >
            <TriangleAlert size={32} aria-hidden="true" />
          </div>
          <h1
            style={{
              margin: "2rem 0 0.75rem",
              fontSize: "2rem",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "0.9rem",
              lineHeight: 1.6,
              color: "#c9d6e8",
            }}
          >
            We ran into an unexpected error. Please try again — or head back to
            the home page while we sort it out.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <button
              type="button"
              onClick={unstable_retry}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: 999,
                border: 0,
                padding: "0.875rem 1.75rem",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                background: "linear-gradient(90deg,#18d0c9,#0f9f9a)",
                color: "#071a42",
                boxShadow: "0 10px 30px -10px rgba(15,159,154,0.5)",
              }}
            >
              <RotateCcw size={16} aria-hidden="true" />
              Try again
            </button>
          </div>
          {error.digest && (
            <p
              style={{
                marginTop: "2rem",
                fontSize: "0.625rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#a9bcd6",
              }}
            >
              Reference · {error.digest}
            </p>
          )}
        </main>
      </body>
    </html>
  );
}
