import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';




function AllCategories() {

  const history = useNavigate();
  const [Categories, setcategories] = useState([]);
  const [emps, setemps] = useState([]);

  // const headers = ['Sr.No', 'Name', 'Description', 'Price','Image','Type','T_id'];

  const headers = ['Sr.No','Name'];

  // const [setproducts] = useState([]);




  useEffect(() => {
    var helper = new XMLHttpRequest();
    helper.onreadystatechange = () => {
      if (helper.readyState == 4 && helper.status == 200) {
        var result = JSON.parse(helper.responseText);
        console.log(result);
        if(result.status === 'success') {
          setcategories(result.data);
        }
        //debugger;
      }
    };
    helper.open("GET", "http://localhost:4001/getAllCategory");
    helper.send();
  }, []);

  


const ShowProductsbyId = (t_id) => {
    var helper = new XMLHttpRequest();
    helper.onreadystatechange = () => {
      if (helper.readyState == 4 && helper.status == 200) {
        var result = JSON.parse(helper.responseText);
         console.log(result);
        if(result.status === 'success') {
          setcategories(result.data);
          //history.push("/productlist")
        }
      }
    };
   helper.open("GET", "http://localhost:4001/getProducts/" + t_id);
    helper.send();
  };



  return (
    <div className="allcategories">
      <center>
      <h1>Category List</h1>
      </center>
          <table className="table table-bordered">
             <thead>
        <tr>
          {headers.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
          <tbody>
            {/* debugger; */}
            {Array.from(Categories).map((Categories, idx) => {
              debugger;
              return  <tr key={idx}>
                  <td>{Categories.t_id}</td>
                  <td><a onClick={() => {
                        ShowProductsbyId(Categories.t_id);
                      }}>{Categories.name}</a></td>
                  {/* <td>{Categories.description}</td>  
                  <td>{Categories.price}</td>
                  <td>{Categories.image}</td>
                  <td>{Categories.type}</td> 
                  <td>{Categories.t_id}</td>      */}
                </tr>
            })}
              
          </tbody>
        </table>
      </div>
    
  );
}

export default AllCategories;