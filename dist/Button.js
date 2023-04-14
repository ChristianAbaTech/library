import React from 'react';

const Button = ({
  text
}) => {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => console.log("click")
  }, text);
};

export default Button;