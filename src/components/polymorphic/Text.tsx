import React from 'react';

type TextOwnProps<E extends React.ElementType> = {
  as?: E;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
};

/*
There is a room for name collisions and duplicate types
So We need to omit props which are already being used in TextOwnProps
 */

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

function Text<E extends React.ElementType = 'div'>({
  as,
  size,
  color,
  children,
}: TextProps<E>) {
  const Component = as || 'div';
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
}
export default Text;
