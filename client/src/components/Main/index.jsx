import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	setTimeout(() => {
		localStorage.removeItem("token");
		window.location.reload();
	}, 300000);
	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
		<Link className="navbar-brand" to="/add">
			<button type="button" className="btn btn-md btn-success fw-bold">
			ADD User
			</button>
		</Link>

		<Link className="navbar-brand" to="/">
			<button type="button" className="btn btn-md btn-success fw-bold">
			  All Users
			</button>
		</Link>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>


		</div>
	);
};

export default Main;
