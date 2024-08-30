import React from "react"
import "./homepage.css"

const Homepage = () => {
	return (
		<>
			<div className="homepage">
				{/* Left Text Container */}
				<div className="text-container">
					<div className="wrapper">
						<h1>find Real Estate & get your dream</h1>
						<p>
							Find your dream home with us. Browse our listings for buying or
							renting properties.
						</p>

						{/* Boxes Section */}
						<div className="boxes">
							<div className="box">
								<h1>Buy</h1>
								<h2>Find properties for sale</h2>
							</div>
							<div className="box">
								<h1>Rent</h1>
								<h2>Browse rental listings</h2>
							</div>
							{/* Add more boxes as needed */}
						</div>
					</div>
				</div>

				{/* Right Image Container */}
				<div className="image-container">
					<img
						src="./bg.png"
						alt="Background"
					/>
				</div>
			</div>
		</>
	)
}

export default Homepage
