import { useSelector } from "react-redux";
import NavbarComponent from "./../Components/NavbarComponent";
const Dashboard = () => {
  const state: any = useSelector((state) => state);

  return (
    <>
      <NavbarComponent />
      {state.auth.basicUserInfo.user ? (
        <div className="ml-65">
          <div className="main">Profile</div>
          <div className="continer">
            FullName : {state.auth.basicUserInfo.user.fullName}
          </div>
          <div className="continer">
            Email : {state.auth.basicUserInfo.user.email}
          </div>
          <div className="continer">
            Department : {state.auth.basicUserInfo.user.department}
          </div>
          <div className="continer">
            Role : {state.auth.basicUserInfo.user.role}
          </div>
          <div className="continer">
            Reporting Manager : {state.auth.basicUserInfo.user.reportingManager}
          </div>
        </div>
      ) : (
        <div className="ml-65">Login to access</div>
      )}
    </>
  );
};

export default Dashboard;
