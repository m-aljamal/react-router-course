import React from "react";

const Delayed = ({ children, wait = 500 }) => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const timeout = window.setTimeout(() => setShow(true), wait);
    return () => clearTimeout(timeout);
  }, [wait]);
  return show ? children : null;
};

const Loading = () => {
  return (
    <Delayed>
      <div className="loading center" />
    </Delayed>
  );
};

export default Loading;
