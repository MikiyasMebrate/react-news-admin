let SelectOption = ({data, className, register}) => {
   const option = data.category.map((cat) => (
    <option value={cat.id}>{cat.title}</option>
   ))


  return (
    <>
      <select register className={className} aria-label="Default select example">
        <option selected>Open this select menu</option>
        {option}
      </select>
    </>
  );
};

export default SelectOption;
