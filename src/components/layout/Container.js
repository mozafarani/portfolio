export default function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-content px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
