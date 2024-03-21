/** @format */

import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { social } from './data';
import logo from './logo.svg';
// import Sidebar from './Sidebar';
import { links } from './data';

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(true);

	//set up useRef below -One for the container , One for the link
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);

	const handleClick = () => {
		setShowLinks(!showLinks);
	};

	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		console.log(linksContainerRef.current.getBoundingClientRect().height);

		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = '0px';
		}
	}, [showLinks]);

	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<img
						src={logo}
						alt="logo"
					/>
					<button
						className="nav-toggle"
						onClick={handleClick}>
						<FaBars />
					</button>{' '}
				</div>
				<div
					className="links-container "
					ref={linksContainerRef}>
					<ul
						className="links"
						ref={linksRef}>
						{links.map((item, id) => {
							return (
								<>
									<li key={id}>
										<a href={item.url}>{item.text}</a>
									</li>
								</>
							);
						})}
					</ul>
				</div>

				<ul className="social-icons">
					{social.map((item, id) => {
						return (
							<>
								<li key={id}>
									<a href={item.url}>{item.icon}</a>
								</li>
							</>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
