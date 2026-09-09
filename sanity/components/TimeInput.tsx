import { set, unset, type StringInputProps } from 'sanity';

/** A native, locale-aware time picker that stores an HH:mm value in Sanity. */
export function TimeInput(props: StringInputProps) {
  const { elementProps, onChange, value } = props;

  return (
    <input
      {...elementProps}
      type="time"
      value={value ?? ''}
      step={60}
      onChange={(event) => {
        const nextValue = event.currentTarget.value;
        onChange(nextValue ? set(nextValue) : unset());
      }}
    />
  );
}
