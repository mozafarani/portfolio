const Card = ({ children, className }) => {
    return (
      <div className={`bg-card p-6 rounded-lg shadow-lg ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Card;
  