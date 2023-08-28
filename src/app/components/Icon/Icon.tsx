import Image from 'next/image';
import style from './Icon.module.scss';

export default function Icon({
  src,
  name,
  size = 40,
}: {
  src: string;
  name: string;
  size?: number;
}) {
  return (
    <Image
      width={size}
      height={size}
      src={src}
      alt={`${name} icon`}
      className={style.icon}
    />
  );
}
