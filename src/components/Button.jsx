export default function Button({ onDisable, handleClick, children, style }) {
  return (
    <button
      className={`bg-accent text-primary ${style} font-subHeading py-[2px] disabled:bg-accent/30 disabled:text-primary/40`}
      disabled={onDisable === null}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
