export interface FlexProps extends FlexStyledProps {
  className?: string;
}

export interface FlexStyledProps {
  mb?: number;
  mt?: number;
  ml?: number;
  mr?: number;
  children: React.ReactNode;
  justify?: 'space-between' | 'center' | 'flex-start' | 'flex-end';
  align?: 'center' | 'flex-end' | 'flex-start' | 'baseline';
  direction?: 'column' | 'row';
  wrap?: 'nowrap' | 'wrap';
  overflow?: 'auto' | 'hidden' | 'visible';
  width?: string;
  height?: string;
}