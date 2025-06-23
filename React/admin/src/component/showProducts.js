import { useEffect, useState } from "react";
//import "./asset/common.css";
//import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";

function ShowProducts() {
  const history = useHistory();
  const [emps, setemps] = useState([]);
  const [message, setmessage] = useState("");
   const headers = ['Sr.No', 'Name', 'Description', 'Price','Image','Type','T_id','Functions'];

  useEffect(() => {
    if (message != "") {
      if (message == "Record Removed Successfully!") {
        //Refresh the set of employees
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
          if (helper.readyState == 4 && helper.status == 200) {
            var result = JSON.parse(helper.responseText);
            setemps(result);
          }
        };
        helper.open("GET", "http://localhost:4001/getAllProducts");
        helper.send();
      }
      setTimeout(() => {
        setmessage("");
      }, 2000);
    }
  }, [message]);

  useEffect(() => {
    var helper = new XMLHttpRequest();
    helper.onreadystatechange = () => {
      if (helper.readyState == 4 && helper.status == 200) {
        var result = JSON.parse(helper.responseText);
        setemps(result);
        // console.log(result);
        //debugger;
      }
    };
    helper.open("GET", "http://localhost:4001/getAllProducts");
    helper.send();
  }, []);

 

  const removeRecord = (productId) => {
    var helper = new XMLHttpRequest();
    helper.onreadystatechange = () => {
      if (helper.readyState == 4 && helper.status == 200) {
        var result = JSON.parse(helper.responseText);
        if (result.affectedRows != undefined) {
          if (result.affectedRows > 0) {
            // debugger;
            setmessage("Record Removed Successfully!");
          } else {
            setmessage("We could not remove the record.!");
          }
        } else {
          setmessage("Something went wrong! Try Again!");
        }
      }
    };
    helper.open("DELETE", "http://localhost:4001/deleteProduct/" + productId);
    helper.send();
  };

  return (
    <div className="showproducts">
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
                   <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        removeRecord(emps.productId);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              
            })}
          </tbody>
        </table>
     
    </div>
  );
}

export default ShowProducts;

