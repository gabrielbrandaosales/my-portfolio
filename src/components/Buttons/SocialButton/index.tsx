import { IconProps } from 'react-feather';

import styles from './style.module.scss';
import { AnchorHTMLAttributes, CSSProperties, HTMLAttributes } from 'react';

type Color =
  | `rgb(${number}, ${number}, ${number})`
  | `rgba(${number}, ${number}, ${number}, ${number})`
  | `hsl(${number}, ${number}, ${number}`
  | `#${string}`;

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: React.ElementType<IconProps>;
  color?: Color;
  text?: string;
  hoverColor?: Color;
}

export function SocialButton(props: Props) {
  const { icon: Icon, color, text, hoverColor = '#70DA1C', ...rest } = props;

  return (
    <a
      className={styles.container}
      {...rest}
      style={
        {
          '--color': color,
          '--hover-color': hoverColor,
        } as CSSProperties
      }>
      <Icon className={styles.icon} size={30} />
      <p style={{ margin: '6px 0 0 0' }}>{text}</p>
      <div className={styles.bar} />
    </a>
  );
}
