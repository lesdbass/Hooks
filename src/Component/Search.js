import React, { useState } from "react";
const Search = ({searchMovie}) => {
  const [searchValue, setSearchValue] = useState("");
  const [src,setSrc]=useState("");

  const handleradio=(e)=>{

    setSrc( e.target.value);
 }

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
   
  }
const resetInputField = () => {
    setSearchValue("")
  }

return (
  <>
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
          
      </form>
      <div style={{textAlign:"center", margin:"10px"}}>
            <input type="radio"  value="titlesrc" id="titlesrc" onChange={handleradio} name="src" /><label className="rad" for="title">Title</label>
            <input type="radio"  value="ratingsrc" id="ratingsrc" onChange={handleradio} name="src"/><label className="rad" for="rating">Rating</label>
            <input type="button" value="Search" onClick={() => {searchMovie(searchValue,src);resetInputField();}} />
        </div>

      </>
    );
}
export default Search;