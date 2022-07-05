import React, { useEffect } from "react";
import api from "./services/api";
import { ContextHolder } from "@frontegg/rest-api";

import { useAuth, useLoginWithRedirect } from "@frontegg/react";

export default function Home() {
  const { user, isAuthenticated } = useAuth();

  const loginWithRedirect = useLoginWithRedirect();

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;

    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  return (
    <>
      {isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>

          <div>
            <span>Logged in as: {user?.name}</span>
          </div>

          <div>
            <button onClick={() => alert(user.accessToken)}>
              What is my access token?
            </button>
          </div>

          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </>
  );
}
