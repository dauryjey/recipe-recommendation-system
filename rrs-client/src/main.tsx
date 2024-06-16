import React from "react"
import ReactDOM from "react-dom/client"
import "@/styles/globals.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Root } from "@/routes/root"
import { RandomMeal } from "./routes/randomMeal"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/randomMeal",
        element: <RandomMeal />,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
