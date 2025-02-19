const Card = ({ children, className, ...props }) => {
  return (
    <div className={`bg-card p-6 rounded-2xl shadow-md transition-transform hover:scale-105 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
