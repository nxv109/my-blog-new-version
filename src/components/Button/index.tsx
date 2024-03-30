import React from 'react';

import './styles.scss';

type TProps = {
  children: React.ReactNode;
};

function Button({ children }: TProps) {
  return <button className="button">{children}</button>;
}

export default Button;
