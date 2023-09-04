import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DashboardPage } from "./pages/Dashboard";
import {
  NotFoundPage,
} from "./pages/Static";
import { ROUTES } from "./constants";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Navigate to={ROUTES.DASHBOARD} />
  },
  {
    path: ROUTES.DASHBOARD,
    element: <DashboardPage />
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFoundPage />
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]);

const contextClass = {
  success: "bg-green-500",
  error: "bg-orange-500",
  info: "bg-blue-500",
  warning: "bg-brown-500",
  default: "bg-gray-500",
};

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
        className="md:w-[592px]"
        toastClassName={(args) => contextClass[args?.type || "default"] +
          " relative flex px-6 py-4 min-h-10 rounded-lg justify-between overflow-hidden cursor-pointer md:w-[592px] font-poppins text-base font-bold toast"
        }
      />
    </div>
  );
}

export default App;
