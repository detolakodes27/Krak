import React, {useState, useEffect, useRef} from 'react'
import './education.css'


const Education = () =>{

	return(

		<>
			<div className='container education'>
				<div className='row justify-content-center'>
					<div className='col-lg-6'>
						<div className='pr-50 education-text'>
							ALL TYPES OF A-LEVEL PROGRAMS
						</div>

						<div className='education-text-small'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut
						</div>

						<div>
							<button className='edubtn mt-5'>
								Log In
							</button>
						</div>
					</div>

					<div className='col-lg-6'>
						<div className='edu-img'>
							<img src='/images/brk5.jpg' />
						</div>
					</div>
				</div>
			</div>


		</>

	)
}


export default Education