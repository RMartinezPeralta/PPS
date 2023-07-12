import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../User/Authcontext";
import { getUsers } from "../Service/Api";
import UserObject from "./UserObject";
import LoadingScreen from "../Loadingscreen";

const Admin = () => {
  const { currentToken } = useContext(AuthContext);
  const [userList, setUserList] = useState([]);
  const userListHandler = (List) => {
    setUserList(List);
  };
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const response = await getUsers(currentToken);
    console.log("Response: ", response);
    userListHandler(response);
    setLoading(false);
  };

  const usersMapped = userList.map((user) => <UserObject key={user.id} userData={user} />);

  useEffect(() => {
    fetchData();
  }, []);
  return <div className="Admin_page"> {loading === true ? <LoadingScreen /> : <div className="Product_list"> {usersMapped}</div>}</div>;
};
export default Admin;
