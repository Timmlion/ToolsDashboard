import * as Icons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface IconMapperProps extends LucideProps {
  name: string;
}

export const IconMapper = ({ name, ...props }: IconMapperProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    return <Icons.HelpCircle {...props} />;
  }

  return <IconComponent {...props} />;
};
