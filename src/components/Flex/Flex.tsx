import type { FC, PropsWithChildren } from 'react';
import type { FlexProps } from './interfaces';

import './styles.css';

const rootClass = 'weather-flex';

export const Flex: FC<PropsWithChildren<FlexProps>> = ({
  mb,
  mt,
  ml,
  mr,
  children,
  justify,
  align,
  direction,
  wrap,
  overflow,
  width,
  height,
  className
}) => {
  const styles = {
    marginBottom: mb,
    marginTop: mt,
    marginLeft: ml,
    marginRight: mr,
    justifyContent: justify,
    alignItems: align,
    flexDirection: direction,
    flexWrap: wrap,
    overflow: overflow,
    width: width,
    height: height
  };
  return (
    <div
      style={ styles }
      className={ `${rootClass} ${className}` }
    >
      { children }
    </div>
  );
};
  