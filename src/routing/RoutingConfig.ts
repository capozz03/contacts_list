import AuthPage from "../pages/Auth/AuthPage";
import ContactsPage from "../pages/Contacts/ContactsPage";
import { routes } from "../shared/helpers/routes";

type RoutingConfigType = {
  path: string;
  element: () => JSX.Element;
  private?: true;
}[];

export const RoutingConfig: RoutingConfigType = [
  { path: routes.auth, element: AuthPage },
  { path: routes.main, private: true, element: ContactsPage },
];
