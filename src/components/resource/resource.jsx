import React, {useState, useEffect, useRef} from 'react'
import './resource.css'


const Resource = () =>{

	return(

		<>
			<div className='container resource mt-100'>
				<div className='row justify-content-center'>

					<div className='col-lg-6'>
						<div className='res-img'>
							<img src='/images/brk3.jpg' width='80%' />
						</div>
					</div>

					<div className='col-lg-6'>
						<div className='pr-50 resource-text'>
							PUBLIC RESOURCE
						</div>

						<div className='resource-text-small'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut
						</div>

						<div>
							<button className='resbtn mt-5'>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>


		</>

	)
}


export default Resource