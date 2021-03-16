import * as React from "react";
import "./style/dialog.less";

interface DialogProps {
  children?: React.ReactNode;
}
const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const { children } = props;
  return (
    <div>
      <div className="container">{children}</div>
      <div className="layer"></div>
    </div>
  );
};

export default Dialog;
