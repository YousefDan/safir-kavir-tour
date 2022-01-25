import "./search-form.scss";

const SearchForm = () => {
  return (
    <form className="search-form">
        <i className="fas fa-search"></i>
      <input type="search" placeholder="جستجو در بین مقاله ها ..." />
    </form>
  );
};

export default SearchForm;
