import Image from 'next/image';
import style from './Icon.module.scss';

export default function Icon({
  src,
  name,
  size = 40,
  className,
}: {
  src: string;
  name: string;
  size?: number;
  className?: string;
}) {
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
