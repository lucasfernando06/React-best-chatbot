import React from "react";

import Wrapper from "../../Wrapper";
import useTheme from "../../../../hooks/useTheme";

const Container = ({ children, ...rest }) => {
  const { theme } = useTheme();
  return (
    <Wrapper
      className="rbc-chat-header"
      style={{ background: theme.primaryColor }}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

export default Container;
