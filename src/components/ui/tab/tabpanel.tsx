import { FC } from 'react';

type Props = {
  children: React.ReactNode;
};
const TabPanel: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default TabPanel;
