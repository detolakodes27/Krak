import React, {useState, useEffect, useRef} from 'react'
import './hero.css'



const NAV_LINK = [
	
	{
		path:'/',
		display: 'Home'
	},
	{
		path:'/',
		display:'About Us'
	},
	{
		path:'/',
		display:'Services'
	},
	{
		path:'/',
		display:'Membership'
	},
	{
		path:'/',
		display:'Resources'
	},
	{
		path:'/',
		display:'Testimonials'
	},	
	{
		path:'/',
		display:'Contact Us'
	},
]

const Hero = () =>{

	return(

		<>

			<div className='hero'>

				<div className='w-100 p-4 flex-h links'>
					{
						NAV_LINK.map((item,index)=>(

							<div className='alinks'>
								<a href={item.path} key={index} className='pr-20 pl-20 text-white'>{item.display}</a>
							</div>
						))
					}
				</div>

				<div className='hero-text text-white'>

					<div className='hero-text-big'>
						WELCOME TO KRAK
					</div>

					<div className='w-70 mt-2'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</div>

					<div className='mt-3'>

						<button className='primarybtn rounded-lg'>
							<a href=''>
								Sign Up
							</a>
						</button>

						<button className='secondarybtn ml-4 rounded-lg'>
							<a href=''>
								Resources
							</a>
						</button>
					</div>
				</div>
			</div>

		</>

	)
}


export default Hero