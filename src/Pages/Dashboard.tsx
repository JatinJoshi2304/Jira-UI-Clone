import { useSelector } from "react-redux";
import NavbarComponent from "./../Components/NavbarComponent";
const Dashboard = () => {
  const state: any = useSelector((state) => state);

  return (
    <>
      <NavbarComponent />
      {state.auth.isAuthenticated ? (
        <div className="ml-65">
          <div className="main">Profile</div>
          <div className="continer">FullName : {state.auth.user?.fullName}</div>
          <div className="continer">Email : {state.auth.user?.email}</div>
          <div className="continer">
            Department : {state.auth.user?.department}
          </div>
          <div className="continer">Role : {state.auth.user?.role}</div>
          <div className="continer">
            Reporting Manager : {state.auth.user?.reportingManager}
          </div>
        </div>
      ) : (
        <div className="ml-65">Login to access</div>
      )}
    </>
  );
};

export default Dashboard;
