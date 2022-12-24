import React, {useState, useEffect, useRef} from 'react'
import './services.css'


const Services = () =>{

	return(

		<>

			<div className='container-fluid service mt-100'>
				<div className='row justify-content-center'>
					<div className='col-lg-4 col-md-8 col-sm-8 col-8'>
						<div className='service-text'>
							WHAT WE DO
						</div>

						<div>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut
						</div>

						<div>
							<button className='servicebtn mt-5'>
								Log In
							</button>
						</div>
					</div>

					<div className='col-lg-3 col-md-7 col-sm-8 col-10 my-5'>
						<div className='shadow-sm card card-hover card1 my-2'>
							<div className='w-100 flex-h justify-content-center'>
								<img src='/images/brk3.jpg' width='100%' />
							</div>

							<div className='pl-20 my-3 blog-card-deet'>
								MEMBERSHIP
							</div>

							<div className='pl-20 pr-20 my-2'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut
							</div>
						</div>
					</div>

					<div className='col-lg-3 col-md-7 col-sm-8 col-10 my-2'>
						<div className='shadow-sm card rounded-lg my-2'>
							<div className='w-100 flex-h justify-content-center'>
								<img src='/images/brk4.jpg' width='100%' />
							</div>

							<div className='pl-20 my-3 blog-card-deet'>
								PUBLIC ACCESS PORTAL
							</div>

							<div className='pl-20 pr-20 my-2'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default Services