const InputGroup = ({ label, input }) => {
  return (
    <div className="input-group">
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default InputGroup;
