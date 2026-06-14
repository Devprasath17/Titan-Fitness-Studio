import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = '' }: Props) {
  return (
    <div className={`relative overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
}
