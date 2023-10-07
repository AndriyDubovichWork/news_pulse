import { ReactElement } from 'react';
import style from './UserInput.module.scss';
import Title from '../../Title/Title';

export default function UserInput({
  title,
  input,
  wideArea,
  className,
}: {
  input: ReactElement<any, any>;
  title: string;
  wideArea?: string;
  className?: string;
}) {
  return (
    <div style={{ gridArea: wideArea }} className={className}>
      <Title title={title} withRectangle={false} />
      {input}
    </div>
  );
}
