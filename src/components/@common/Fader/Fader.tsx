import React, { isValidElement, ReactNode } from 'react';

import Fade from './Fade';

interface Props {
  threshold?: number;
  children: React.ReactNode;
}

const Fader = ({ threshold = 0.25, children }: Props) => {
  const renderChildren = (children: ReactNode[] | ReactNode) => {
    // one child
    if (!Array.isArray(children) && isValidElement(children)) {
      return <Fade threshold={threshold}>{children}</Fade>;
    }

    // multiple children
    if (Array.isArray(children)) {
      return children.map((childElement, index) => {
        if (!isValidElement(childElement)) return;
        return (
          <Fade key={`fader-${index}`} threshold={threshold}>
            {childElement}
          </Fade>
        );
      });
    }
  };
  return <>{renderChildren(children)}</>;
};

export default Fader;
