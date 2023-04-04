import Home from "../pages/Home";
import Cupboard from "../pages/Cupboard";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false,
    },
    {
      path: "/cupboard",
      component: Cupboard,
      name: "Cupboard",
      protected: true,
    },
  ];

export default routes