import { useEffect, useState } from "react";
// import "./asset/common.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useHistory, useParams } from "react-router-dom";
function ShowOrders() {
  const history = useHistory();
  const [emps, setemps] = useState([]);
  const [message, setmessage] = useState("");
  const headers = ['Sr.No', 'Quantity', 'Customer Id', 'Product Id'];

  
  useEffect(() => {
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
    helper.open("GET", "http://localhost:4001/getAllOrders");
    helper.send();
  }, []);

 


 
  return (
    
    <div className="showorders">
         
      <center>
      <h1>Order List</h1>
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
            {Array.from(emps).map((emps, idx) => {
              //debugger;
              return  <tr key={idx}>
                  <td>{emps.o_id}</td>
                  <td>{emps.quantity}</td>
                  <td>{emps.customerId}</td>
                  <td>{emps.addedprodid}</td>

                  
                  
                </tr>
                
              
            })}
          </tbody>
        </table>
      </div>
    
  );
}


export default ShowOrders;