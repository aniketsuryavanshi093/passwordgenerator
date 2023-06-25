import React, { useCallback,  } from "react";
import "./search.scss";

type SearchProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>
  placeholder ? : string
  value: string
  generateImageHandler: () => void;
}

const Search = ({ setValue, placeholder , value, generateImageHandler }:SearchProps) => {
  const handleChanges = useCallback((val : React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(val.target.value.trim());
  }, []);
  return (
    <div className=" text_primary w-100">
      {/* <i className="fa-solid fa-magnifying-glass search-icon " /> */}
      <div className="search wrapper justify-content-end flex-column">
      <textarea
        value={value}
        placeholder={placeholder || "Search..."}
        className='dashboard-header_search form-control '
        onChange={handleChanges}
      />
      {value.length > 1 && (
        <i
          className="fa-solid fa-xmark cp searchclose"
          onClick={() => {
            setValue("");
          }}
        />
      )}
      <button type="button" className="btn btn-success my-3 " onClick={generateImageHandler}>Generate Image</button>
      </div>
    </div>
  );
};

export default Search;
