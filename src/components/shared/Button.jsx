function Button({
  children,
  version = 'primary',
  type = 'button',
  isDisabled = false,
}) {
  return (
    <div>
      <button
        type={type}
        disabled={isDisabled}
        className={`btn btn-${version}`}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
