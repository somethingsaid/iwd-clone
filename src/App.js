import React from "react";

import Layout from "./hoc/Layout/Layout";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import VideoBackground from "./components/VideoBackground/VideoBackground";

function App() {
  return (
    <div>
      <Layout>
        <Toolbar />
        <VideoBackground />
      </Layout>
    </div>
  );
}

export default App;
