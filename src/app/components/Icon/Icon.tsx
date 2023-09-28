import Image from 'next/image';
import style from './Icon.module.scss';

type icon = {
  src: string;
  name: string;
  size?: number;
  className?: string;
};

export default function Icon({ src, name, size = 40, className }: icon) {
  return (
    <Image
      width={size}
      height={size}
      src={src}
      alt={`${name} icon`}
      className={`${style.icon} ${className}`}
    />
  );
}
