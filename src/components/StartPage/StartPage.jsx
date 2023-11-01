import React from 'react';

export default function StartPage({ launchApp }) {
  return (
    <>
      <p>Logo</p>
      <h1>Welcome to Uno To Do!</h1>
      <p>
        Start using the best to-do app, you can create and manage your To Do lists to improve your organization.
      </p>
      <button onClick={launchApp}>
        Get started
      </button>
    </>
  )
}