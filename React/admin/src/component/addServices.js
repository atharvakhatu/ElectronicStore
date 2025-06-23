import "../common/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AddService() {
  const [emp, setEmp] = useState({ sd_id: "" , name: "", address: "", phone: "" });
  const [message, setmessage] = useState("");
  const [shouldCleanTextBoxes, setShouldCleanTextBoxes] = useState(false);

  const handleChange = (args) => {
    var copyOfCurrentEmpInState = { ...emp };
    copyOfCurrentEmpInState[args.target.name] = args.target.value;
    setEmp(copyOfCurrentEmpInState);
  };

  useEffect(() => {
    if (message != "") {
      setTimeout(() => {
        setmessage("");
      }, 2000);
    }
  }, [message]);

  useEffect(() => {
    if (shouldCleanTextBoxes == true) {
      setEmp({ sd_id: "", name: "", address: "", phone: "" });
    }
  }, [shouldCleanTextBoxes]);

  const addRecord = () => {
    var helper = new XMLHttpRequest();
    helper.onreadystatechange = () => {
      if (helper.readyState == 4 && helper.status == 200) {
        debugger;
        const {result} = JSON.parse(helper.responseText);
        console.log(result);
        if (result.affectedRows != undefined) {
          if (result.affectedRows > 0) {
            setmessage("Record Added Successfully!");
            setShouldCleanTextBoxes(true);
           // setEmp({ no: 0, name: "", address: "", phone: "" });
          } else {
            setmessage("We could not add the record.!");
            setShouldCleanTextBoxes(false);
          }
        } else {
          setmessage("Something went wrong! Try Again!");
          setShouldCleanTextBoxes(false);
        }
      }
    };
    helper.open("POST", "http://localhost:4001/addServices");
    helper.setRequestHeader("Content-Type", "application/json");
   // debugger;
    helper.send(JSON.stringify(emp));
  };

  const clearRecord = () => {
    setEmp({ sd_id: "" , name: "", address: "", phone: "" });
  };

  return (
    <div className="addservice">
      <center>
        <br></br>
        <br></br>
        <br></br>
        <table>
          <tbody>
            <tr>
              <td className="color">No</td>
              <td className="td">
                <input
                  type="text"
                  name="sd_id"
                  value={emp.sd_id}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td className="color">Name</td>
              <td className="td">
                <input
                  type="text"
                  name="name"
                  value={emp.name}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td className="color">Address</td>
              <td className="td">
                <input
                  type="text"
                  name="address"
                  value={emp.address}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="color">Phone</td>
              <td className="td">
                <input
                  type="text"
                  name="phone"
                  value={emp.phone}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="td">
                <button className="btn btn-primary" onClick={addRecord}>
                  Submit
                </button>
              </td>
              <td className="td">
                <button className="btn btn-danger" onClick={clearRecord}>
                  Reset
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan={"2"} className="color">
                <h6 style={{ color: "orange" }}>{message}</h6>
                <br></br>
                <br></br>
                <Link to={"/home"}> Go Home </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default AddService;