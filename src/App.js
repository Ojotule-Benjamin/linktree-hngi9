import { FooterSection } from "./components/FooterSection";
import { Main } from "./components/Main";
import { SocialSection } from "./components/SocialSection";
import Contact from "./pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Main />
      <SocialSection />
      <FooterSection />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <SocialSection />,
      },
      {
        path: "/",
        element: <FooterSection />,
      },
    ],
  },
  {
    path: "/",
    element: <Main />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
