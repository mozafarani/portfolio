export default function Field({ label, children, className = "" }) {
  return (
    <div className={className.trim()}>
      {label ? (
        <label className="block text-xs font-medium uppercase tracking-widest text-mutedText">
          {label}
        </label>
      ) : null}
      <div className={label ? "mt-2" : ""}>{children}</div>
    </div>
  );
}
