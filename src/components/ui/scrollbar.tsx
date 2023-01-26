import cn from 'classnames';
import {
  OverlayScrollbarsComponent,
  OverlayScrollbarsComponentProps,
} from 'overlayscrollbars-react';

interface ScrollbarProps extends OverlayScrollbarsComponentProps {
  style?: React.CSSProperties;
  className?: string;
  autoHide?: 'never' | 'scroll' | 'leave' | 'move';
}

export const Scrollbar = ({
  options,
  style,
  className,
  autoHide = 'scroll',
  ...props
}: React.PropsWithChildren<ScrollbarProps>) => {
  return (
    <OverlayScrollbarsComponent
      options={{
        className: cn('os-theme-thin', className),
        scrollbars: {
          autoHide: autoHide,
        },
        ...options,
      }}
      style={style}
      {...props}
    />
  );
};