import * as React from "react";
import Content from "./components/content";
import "./components/style/app.less";

const App: React.FunctionComponent<any> = () => {
  return (
    <div className="root">
      <h2>简单列表</h2>
      <Content />
    </div>
  );
};
export default App;
