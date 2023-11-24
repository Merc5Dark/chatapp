import React from "react";
// import GoogleSignin from "https://pbs.twimg.com/profile_images/1498641868397191170/6qW2XkuI_400x400.png";

const Welcome = () => {
  const googleSignIn = () => {
  };

  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      {/* <img src="/test.png" alt="ReactJs logo" width={50} height={50} /> */}
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;





