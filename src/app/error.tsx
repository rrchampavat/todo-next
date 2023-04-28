"use client"; // Error components must be Client components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col mt-20 w-1/2 left-0 right-0 m-auto space-y-5">
      <h2 className="text-center">{error.message}</h2>
      {/* <h4>{JSON.stringify(error.stack, null, " ")}</h4> */}
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="bg-secondary text-primary p-2 rounded-sm w-auto mx-auto"
        type="button"
      >
        Try again
      </button>
    </div>
  );
}
