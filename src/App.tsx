import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Dashboard from "./components/create-dashboard";
import CreateTicket from "./components/create-ticket";
import ManageUsers from "./components/manage-users";
import CreateUser from "./components/create-user";
import ManageProjects from "./components/manage-project";
import EditTicket from "./components/edit-ticket";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  useOrganizationList,
} from "@clerk/clerk-react";
import Layout from "./components/layout";
import Landing from "./components/landing-page";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function ClerkOrganizationSetter() {
  // const { setActive, isLoaded: orgloaded } = useOrganizationList();

  // if (orgloaded) {
  //   console.log('loa')
  //   setActive({ organization: "org_2UhjcIz6i0lC37LTqhkzvI9lucA" });
  // }

  return (
    <Routes>
      <Route
        path="/"
        element={
            <Landing />
        }
      />
      <Route
        path="/dashboard"
        element={
          <>
            <SignedIn>
              <Layout>
                <Dashboard />
              </Layout>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/sign-in/*"
        element={<SignIn routing="path" path="/sign-in" />}
      />
      <Route
        path="/sign-up/*"
        element={<SignUp routing="path" path="/sign-up" />}
      />

      <Route
        path="/tickets/create"
        element={
          <>
            <SignedIn>
              <Layout>
                <CreateTicket />
              </Layout>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/manage-users"
        element={
          <>
            <SignedIn>
              <Layout>
                <ManageUsers />
              </Layout>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/users/create"
        element={
          <>
            <SignedIn>
              <Layout>
                <CreateUser />
              </Layout>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/manage-projects"
        element={
          <>
            <SignedIn>
              <Layout>
                <ManageProjects />
              </Layout>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/tickets/edit/:id"
        element={
          <>
            <SignedIn>
              <Layout>
                <EditTicket />
              </Layout>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
    </Routes>
  );
}

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <ClerkOrganizationSetter />
    </ClerkProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}
