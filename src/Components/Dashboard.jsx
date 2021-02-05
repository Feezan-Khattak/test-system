import React from "react";
import DashboardStyle from "../Styles/DashboardStyle";

const Dashboard = () => {
	const dashboardStyle = DashboardStyle();
	return (
		<div className={dashboardStyle.mainContainer}>
			<div className={dashboardStyle.menuContainer}>
				<h1>Menu</h1>
				<p>
					This is Menu Part where Different section lie, like Dashboar, Build
					Test, Result
				</p>
			</div>
			<div className={dashboardStyle.bodyContainer}>
				<h1>Body</h1>
				<p>This is body part where different detail occures of the section.</p>
			</div>
		</div>
	);
};

export default Dashboard;
