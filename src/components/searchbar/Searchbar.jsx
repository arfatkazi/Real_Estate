import React, { useState } from "react"
import "./searchbar.css"
import { IoMdSearch } from "react-icons/io"

// Search types (buy or rent)
const types = ["buy", "rent"]

const Searchbar = () => {
	// State to handle search query
	const [query, setQuery] = useState({
		type: "buy",
		location: "",
		minprice: 0,
		maxprice: 0,
	})

	// Function to handle input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target
		setQuery((prev) => ({ ...prev, [name]: value }))
	}

	// Function to handle search type switch
	const SwitchType = (val) => {
		setQuery((prev) => ({ ...prev, type: val }))
	}

	// Function to handle form submission
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("Search query:", query)
		// Implement search logic or API call here
	}

	return (
		<div className="searchbar">
			{/* Type Selection (Buy/Rent) */}
			<div className="type">
				{types.map((type) => (
					<button
						key={type}
						onClick={() => SwitchType(type)}
						className={query.type === type ? "active" : "buttons"}
					>
						{type}
					</button>
				))}
			</div>

			{/* Search Form */}
			<form
				className="forms"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					name="location"
					placeholder="City location"
					value={query.location}
					onChange={handleInputChange}
				/>
				<input
					type="number"
					name="minprice"
					placeholder="Min price"
					min={0}
					max={10000000}
					value={query.minprice}
					onChange={handleInputChange}
				/>
				<input
					type="number"
					name="maxprice"
					placeholder="Max price"
					min={0}
					max={10000000}
					value={query.maxprice}
					onChange={handleInputChange}
				/>
				<button
					type="submit"
					className="search-icon"
				>
					<IoMdSearch />
				</button>
			</form>
		</div>
	)
}

export default Searchbar
