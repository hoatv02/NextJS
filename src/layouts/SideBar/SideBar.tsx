import React from 'react'

type Props = {}

const SideBar = (props: Props) => {
	return (
		<div className="flex flex-col justify-between text-white h-[100vh]">
			<div className="">
				<div className="logo">
					<img src="https://ap.poly.edu.vn/images/logo.png" alt="" />
				</div>
				<div className="menuLists ">
					<ul>
						<li>Home</li>
						<li>Search</li>
						<li>Your Library</li>
					</ul>
				</div>
				<div className="">
					<ul>
						<li>Create Playlists</li>
						<li>Liked Songs</li>
					</ul>
				</div>
			</div>
			<div className="">
				<p>Cookies</p>
				<button className="border border-2-red px-4 py-1 rounded-3xl">English</button>
			</div>
		</div>
	)
}

export default SideBar
