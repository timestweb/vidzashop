interface DividerProps {
  className?: string;
}

export default function Divider({ className }: DividerProps) {
  return (
    <div className={`flex border-r border-surface-divided ${className}`}></div>
  );
}
