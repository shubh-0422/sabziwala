import React, { useEffect, useState } from "react";

import { Container, Row,Col,Image,Dropdown,DropdownButton } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {InputGroup,FormControl,FormGroup,Glyphicon} from 'react-bootstrap';
import './style.scss';
const Search = () => {
  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    result: [],
    searched: false
  });

  const { categories, category, search, result, searched } = data;

  // const loadCategories = () => {
  //   getCategories().then(data => {
  //     // if (data.error) {
  //     //   console.log(data.error);
  //     // }
  //     // else {
  //     //   setData({ ...data, categories: data });
  //     // }
  //   });
  // };

  useEffect(() => {
    // loadCategories();
  }, []);

  const searchSubmit = e => {
    e.preventDefault();
    // searchData();
  };

  const handleChange = name => event => {
    setData({ ...data, [name]: event.target.value, searched: false });
  };

  const searchMessage = (searched,result) =>{
    if(searched && result.length>0){
      return `Found ${result.length} products`
    }
    if(searched && result.length < 1){
      return ` No product found`
    }
  }

  const searchProducts = (result = []) => {
    return (
      <div>
        <h2 className="mt-4 mb-4">
        {searchMessage(searched,result)}
        </h2>
<div className="row">
       
      </div>
      </div>
      
    );
  };

  const searchForm = () => (
    // <form onSubmit={searchSubmit}>
    //   <span className="input-group-text">
    //     <div className="input-group input-group-lg">
    //       <div className="input-group-prepend">
    //         <select className="btn mr-2" onChange={handleChange("category")}>
    //           <option value="All">All</option>
    //           {categories.map((c, i) => (
    //             <option key={i} value={c._id}>
    //               {c.name}
    //             </option>
    //           ))}
    //         </select>
    //       </div>
    //       <input
    //         type="search"
    //         placeholder="Search by name"
    //         onChange={handleChange("search")}
    //         className="form-control"
    //       />
    //     </div>
    //     <div className="btn input-group-append" style={{ border: "none" }}>
    //       <button className="input-group-text">Search</button>
    //     </div>
    //   </span>
    // </form>

    <FormGroup>
        <InputGroup className="search">
            <FormControl className="search-text"
                type="text"
                placeholder="Search "/>
                <InputGroup.Append >
                    <InputGroup.Text className="search-icon"><Link>
                        <img className="serach-icon-image" src="https://img.icons8.com/ios/30/000000/search--v1.png"/></Link> 
                    </InputGroup.Text>
                </InputGroup.Append>
        </InputGroup>
</FormGroup>
  );
  return (
    <div className="row">
      <div className="container mb-3">{searchForm()}</div>
      <div className="container fluid">{searchProducts(result)}</div>
    </div>
  );
};

export default Search;
