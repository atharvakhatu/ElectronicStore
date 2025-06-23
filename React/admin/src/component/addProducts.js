import "../common/index.css";
//import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//  const headers = ['Sr.No', 'Name', 'Description', 'Price','Image','Type','T_id','Functions'];

function AddProduct() {
  const [emp, setEmp] = useState({ productId: "", name: "", description: "" ,price: "", image: "", type: "", t_id: ""});
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
      setEmp({ productId: "", name: "", description: "" ,price: "", image: "", type: "", t_id: "" });
    }
  }, [shouldCleanTextBoxes]);

  const addRecord = () => {
    var helper = new XMLHttpRequest();
    helper.onreadystatechange = () => {
      if (helper.readyState == 4 && helper.status == 200) {
        debugger;
        var result = JSON.parse(helper.responseText);
        if (result.affectedRows != undefined) {
          if (result.affectedRows > 0) {
            setmessage("Record Added Successfully!");
            setShouldCleanTextBoxes(true);
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
    helper.open("POST", "http://localhost:4001/addProducts");
    helper.setRequestHeader("Content-Type", "application/json");
    debugger;
    helper.send(JSON.stringify(emp));
  };

  const clearRecord = () => {
    setEmp({ productId: "", name: "", description: "" ,price: "", image: "", type: "", t_id: ""});
  };

  return (
    <div className="addproducts">
      <center>
        <br></br>
        <br></br>
        <br></br>
        <table>
          <tbody>
            <tr>
              <td className="color">Product Id</td>
              <td className="td">
                <input
                  type="text"
                  name="productId"
                  value={emp.productId}
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
              <td className="color">Description</td>
              <td className="td">
                <input
                  type="text"
                  name="description"
                  value={emp.description}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="color">Price</td>
              <td className="td">
                <input
                  type="text"
                  name="price"
                  value={emp.price}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="color">Image</td>
              <td className="td">
                <input
                  type="text"
                  name="image"
                  value={emp.image}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="color">Type</td>
              <td className="td">
                <input
                  type="text"
                  name="type"
                  value={emp.type}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="color">Category Id</td>
              <td className="td">
                <input
                  type="text"
                  name="t_id"
                  value={emp.t_id}
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

export default AddProduct;

