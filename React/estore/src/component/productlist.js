import { useEffect, useState } from "react";
// import "./asset/common.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useHistory, useNavigate, useParams } from "react-router-dom";
function Productlist() {
  const history = useNavigate("");
  const [emps, setemps] = useState([]);
  const [message, setmessage] = useState("");
 const headers = ['Sr.No', 'Name', 'Description', 'Price','Image','Type','T_id'];

  
  useEffect((result) => {
    
    var helper = new XMLHttpRequest();
    helper.onreadystatechange = () => {
      if (helper.readyState == 4 && helper.status == 200) {
        var result = JSON.parse(helper.responseText);
             console.log(result);
        if(result.status === 'success') {
          setemps(result.data);
        }
        // console.log(result);
        //debugger;
      }
    };
    helper.open("GET", "http://localhost:4001/getProducts/" + result);
    helper.send();
  }, []);

 


 
    return (
    <div>
      <span style={{ color: "orange" }}>{message}</span>
     <center>
      <h1>Product List</h1>
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
             {Array.from(emps).map((emps, idx) => {
              //debugger;
              return  <tr key={idx}>
                  <td>{emps.productId}</td>
                  <td>{emps.name}</td>
                  <td>{emps.description}</td>
                  <td>{emps.price}</td>
                  <td>{emps.image}</td>
                  <td>{emps.type}</td>
                  <td>{emps.t_id}</td>  
                  
                </tr>
              
            })}
          </tbody>
        </table>
     
    </div>
  );
}


export default Productlist;