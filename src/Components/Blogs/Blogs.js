import React from "react";

const Blogs = () => {
  return (
    <div className="my-5 container container-fluid">
      <div className="first">
        <h1>1</h1>
        <p>
          <span className="fw-bold">Authorization: </span>Authorization is the
          information a user has access to. Like if a user want to create,
          delete his account he need to provide some informations and data. He
          has access to it. This is called authorization.{" "}
        </p>
        <p>
          <span className="fw-bold">Authentication: </span>Authentication is the
          process of verification. When the user authorized the data, we need to
          check the data if they are valid or not. This checking process is
          authentication
        </p>
      </div>
      <div className="second">
        <h1>2</h1>
        <p>
          Firebase is an authentication system built by Google. Firebase is by
          default providing me the authentication, authorization and other
          stuffs. These things are so much difficult and timeworthy to build
          from the scratch. Firebase is making my life easier to manage because
          its giving me the login, signup system without extra hassle. I have
          Octa if i need to find an alternative of firebase.
        </p>
      </div>
      <div className="third">
        <h1>3</h1>
        <p>
          Firebase is an authentication system. Rather than authentication
          firebase also provides to deploy website, firestore, cloud messaging,
          cloud storage and even realtime databases.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
