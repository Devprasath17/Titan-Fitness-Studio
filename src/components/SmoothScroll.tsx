import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SmoothScroll({ children }: Props) {
  return <>{children}</>;
}
