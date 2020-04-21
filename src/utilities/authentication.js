import { AnonymousCredential } from "mongodb-stitch-browser-sdk";
import { app } from "./stitch";
import { setContext } from "apollo-link-context";
  
async function getAccessToken(credential) {
    const { accessToken } = app.auth.user && app.auth.activeUserAuthInfo;
    return accessToken;
}

export function loginAnonymous() {
    // Allow users to log in anonymously
    const authorizationHeaderLink = setContext(async (_, { headers }) => {  
    const accessToken = await getAccessToken();

      return {
        headers: {
          ...headers,
          Authorization: `Bearer ${accessToken}`,
        },
      };
    });
    return authorizationHeaderLink;
}
  
export function hasLoggedInUser() {
    // Check if there is currently a logged in user
    return app.auth.isLoggedIn;
}
  
export function getCurrentUser() {
    // Return the user object of the currently logged in user (if there is one)
    return app.auth.isLoggedIn ? app.auth.user : null;
}
  
export function logoutCurrentUser() {
    // Logout the currently logged in user (if there is one)
    const user = getCurrentUser();
    if (user) {
      return app.auth.logoutUserWithId(user.id);
    }
}
