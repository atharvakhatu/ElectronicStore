import { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

function AllService() {

  const [service, setservices] = useState([]);

  const headers = ['Sr.No', 'Name', 'Address', 'Phone'];

  useEffect(() => {
    var helper = new XMLHttpRequest();
    helper.onreadystatechange = () => {
      if (helper.readyState == 4 && helper.status == 200) {
        var result = JSON.parse(helper.responseText);
        console.log(result);
        if(result.status === 'success') {
          setservices(result.data);
        }
        //debugger;
      }
    };
    helper.open("GET", "http://localhost:4001/getAllServices");
    helper.send();
  }, []);

  return (
    <div className="allservices">
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
            {Array.from(service).map((services, idx) => {
              //debugger;
              return  <tr key={idx}>
                  <td>{services.sd_id}</td>
                  <td>{services.name}</td>
                  <td>{services.address}</td>
                  <td>{services.phone}</td>
                  
                </tr>
                
              
            })}
          </tbody>
        </table>
      </div>
    
  );
}

export default AllService;