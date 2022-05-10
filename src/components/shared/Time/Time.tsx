
// TODO separate component for state?
export enum TimeState {
  INACTIVE = 'inactive',
  NORMAL = 'normal',
  ACTIVE = 'active',
}

export interface TimeProps {
  h: number|string;
  m: number|string;
  style?: string;
}

const pad = (data: number|string): string => data.toString().padStart(2, '0');

export const Time = (props: TimeProps) => {
  const { h, m, style } = props;
  return (
    <span>{pad(h)}:{pad(m)}</span>
  );
};
