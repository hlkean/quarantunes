import React from "react";
import { useStitchAuth } from "./../components/stitchAuth";
import Room  from "./../components/room";

export default function Welcome(props) {
    const {
        isLoggedIn,
        currentUser,
        actions: { handleLogout, handleAnonymousLogin,  },
      } = useStitchAuth();
    return (
        <div>
            {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
            {isLoggedIn ? <Room /> : <div><p>Logged Out</p><button onClick={handleAnonymousLogin}>Login</button></div>}
        </div>
    )
}