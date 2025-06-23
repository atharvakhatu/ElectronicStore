import 'bootstrap/dist/css/bootstrap.min.css';
import '../common/index.css'

function Header(props) {
  const returnUI = () => {
    if (props.loggedInUser == "Guest") {
      return <div style={{ float: "right" }} className="margin ">Welcome {props.loggedInUser}</div>;
    } else {
      return (
        <div style={{ float: "right" }}>
          Welcome {props.loggedInUser}
          <button
            className="btn btn-warning"
            onClick={() => {
              props.logout();
            }}
          >
            Sign out
          </button>
        </div>
      );
    }
  };
  return (
    <div className='heading'>
      
      
      {returnUI()}
    
    </div>
  );
}

export default Header;
