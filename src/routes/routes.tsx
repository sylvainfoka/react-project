import { RouterProvider, createBrowserRouter } from "react-router-dom"
import TodoPage from "../pages/TodoPage/todo.page"
import ProfilePage from "../pages/ProfilePage/profile.page"
import ErrorPage from "../pages/ErrorPage/error"
import Documents from "../components/Documents"
import FreelancePage from "../pages/FreelancePage/freelance.page"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Documents />,
    children: [

      {
        path: "/freelance",
        element:
          <FreelancePage />,
      },
      {
        path: "/todo",
        element:
          <TodoPage />,
      },
      {
        path: "/profile/:userTag",
        element: <ProfilePage />
      },
      {
        path: "*",
        element: <ErrorPage />
      },

    ]
  },

])

function RouteMap() {
  return <RouterProvider router={router} />
}

export default RouteMap