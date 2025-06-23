import { useEffect, useState } from "react";
// import "./asset/common.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useHistory, useParams } from "react-router-dom";
function ShowServices() {
  const history = useHistory();
  const [emps, setemps] = useState([]);
  const [message, setmessage] = useState("");
  const headers = ['Sr.No', 'Name', 'Address', 'Phone','Functions'];

  useEffect(() => {
    if (message != "") {
      if (message == "Record Removed Successfully!") {
        //Refresh the set of employees
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
          if (helper.readyState == 4 && helper.status == 200) {
            var result = JSON.parse(helper.responseText);
             console.log(result);
        if(result.status === 'success') {
          setemps(result.data);
        }
          }
        };
        helper.open("GET", "http://localhost:4001/getAllServices");
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
             console.log(result);
        if(result.status === 'success') {
          setemps(result.data);
        }
        // console.log(result);
        //debugger;
      }
    };
    helper.open("GET", "http://localhost:4001/getAllServices");
    helper.send();
  }, []);

  const navigateToAdd = () => {
    history.push("/create");
  };

  const removeRecord = (sd_id) => {
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
    helper.open("DELETE", "http://localhost:4001/deleteService/" + sd_id);
    helper.send();
  };

 
  return (
    
    <div className="showservice">
         <span style={{ color: "orange" }}>{message}</span>
      <center>
      <h1>Service List</h1>
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
                  <td>{emps.sd_id}</td>
                  <td>{emps.name}</td>
                  <td>{emps.address}</td>
                  <td>{emps.phone}</td>

                   <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        removeRecord(emps.sd_id);
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


export default ShowServices;
