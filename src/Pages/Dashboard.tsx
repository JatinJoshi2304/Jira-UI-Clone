import { useSelector } from "react-redux";

const Dashboard = () => {
  const state: any = useSelector((state) => state);
  return (
    <>
      <div className="main">Profile</div>
      <div className="continer">FullName : {state.profile.fullName}</div>
      <div className="continer">Email : {state.profile.email}</div>
      <div className="continer">Department : {state.profile.department}</div>
      <div className="continer">Role : {state.profile.role}</div>
      <div className="continer">
        Reporting Manager : {state.profile.reportingManager}
      </div>
    </>
  );
};

export default Dashboard;
