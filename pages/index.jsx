import React from 'react';

import Layout from '../components/layouts/Main';

export default () => (
  <Layout>
    <div className="alert alert-primary">
      <h1>Wilkommen bei Bundestag.io!</h1>
    </div>
    <style jsx>
      {`
        h1 {
          color: yellow;
        }
      `}
    </style>
  </Layout>
);