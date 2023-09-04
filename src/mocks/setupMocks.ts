import { setupWorker } from "msw";
import { ENABLE_MOCKS } from "../constants";
import { testHandlers } from "./handlers/testHandlers";

function setupWorkers(): void {
  const worker = setupWorker(
    ...(ENABLE_MOCKS.testHandlers ? testHandlers : []),
  );
  worker.start();
}

// enable service worker only in develop mode and if mocking is enabled
if (process.env.NODE_ENV !== "production" && Object.values(ENABLE_MOCKS).find(v => v)) {
  setupWorkers();
}
