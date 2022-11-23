import React from "react";

function login() {
  return (
    <>
      <div className="title">login</div>
      <style jsx>
        {`
          .title {
            font-size: 2rem;
            color: blue;
          }
        `}
      </style>
    </>
  );
}

// getServerSideProps => SSR
// getStaticPaths => SSG
// getStaticProps => SSG

export default login;
