import React, { useState } from "react"
import "./navbar.css"
import { FaBarsStaggered } from "react-icons/fa6"

const Navbar = () => {
	const [open, setOpen] = useState(false)

	return (
		<nav>
			{/* Left Side - Logo and Main Navigation */}
			<div className="left">
				<a
					href="/"
					className="left-nav"
				>
					<img
						src="/logo.png"
						className="logo"
						alt="logo-img"
					/>
					<span className="title">RealEstate</span>
				</a>
				<div className="list">
					<a href="/">Home</a>
					<a href="/">About</a>
					<a href="/">Contact</a>
					<a href="/">Agents</a>
				</div>
			</div>

			{/* Right Side - Sign In/Up and Menu Toggle */}
			<div className="right">
				<a
					href="/"
					className="signin"
				>
					Sign In
				</a>
				<a
					href="/"
					className="signup"
				>
					Sign Up
				</a>

				{/* Mobile Menu List */}
				<div className={open ? "menu-list active" : "menu-list"}>
					<a href="/">Home</a>
					<a href="/">About</a>
					<a href="/">Contact</a>
					<a href="/">Agents</a>
					<a href="/">Sign In</a>
					<a href="/">Sign Up</a>
				</div>

				{/* Burger Menu Icon */}
				<div
					className="menu-icon"
					onClick={() => setOpen((prev) => !prev)}
				>
					<FaBarsStaggered />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
