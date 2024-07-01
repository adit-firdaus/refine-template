import { DevtoolsProvider, DevtoolsPanel } from "@refinedev/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Refine } from "@refinedev/core";
import mainDataProvider from "./refine/mainDataProvider";
import mainAuthProvider from "./refine/mainAuthProvider";
import mainRouterProvider from "./refine/mainRouterProvider";

function App() {
  return (
    (<BrowserRouter>
      <DevtoolsProvider>
        <Refine
          dataProvider={mainDataProvider}
          routerProvider={mainRouterProvider}
          authProvider={mainAuthProvider}
          options={{
            projectId: "SCiCz8-zfGDdY-qxcvNz"
          }}>
          <Routes>
            <Route path="/" element={<div>Hello World!</div>} />
          </Routes>
        </Refine>
        <DevtoolsPanel />
      </DevtoolsProvider>
    </BrowserRouter>)
  );
}

export default App;
