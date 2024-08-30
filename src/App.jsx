import React from "react"
import Homepage from "./routes/homepage/Homepage"
import Navbar from "./components/navbar/Navbar"
const App = () => {
	return (
		<>
			<div className="layout">
				<div className="navbar">
					<Navbar />
				</div>

				<div className="content">
					<Homepage />
				</div>
			</div>
		</>
	)
}

export default App
