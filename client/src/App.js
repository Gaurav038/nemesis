import { Route, Routes, Navigate } from "react-router-dom";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import Signup from "./components/Singup";
import Login from "./components/Login";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<AllUsers />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			{user && <Route path="/add" exact element={<AddUser />} />}
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/add" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
