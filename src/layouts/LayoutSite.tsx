import React from 'react'
import SideBar from './SideBar/SideBar'
import Header from './Header/Header'

type Props = {
	children: any
}

const LayoutSite = (props: Props) => {
	return (
		<div className='flex h-full'>
			<div className='w-[270px] bg-black '>
				<SideBar />
			</div>
			<div className='w-[100%]'>
				<div className="">
					<Header />
				</div>
				<div className="bg-slate-500 h-full">{props.children}</div>
			</div>
		</div>
	)
}

export default LayoutSite
