import React, {useState, useEffect, useRef} from 'react'
import './about.css'


const About = () =>{

	return(

		<>

			<div className='container mt-100'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='about-text'>
							About Our <span className='sp-3'>Company</span>
						</div>
					</div>
				</div>
			</div>



			<div className='container mt-10'>
				<div className='row justify-content-center'>
					<div className='col-lg-6 abt-text'>
						<div>
							A brief introduction to KRAK
						</div>
						<div className='mt-40'>
							At KRAK, we aim to a friendly and transparent relationship between employers and employees
							<p>
								We guide jobseekers on getting started in their careers at all levels, provide opportunities from internships to job openings, career talks, articles and blog posts.
							</p>
							<p>
								We also provide a comprehensive and user friendly resume builder to help you create the resume that will help you land your dream job
							</p>
						</div>
						<div>
							<button className='logobtn2'>
								Log In
							</button>
						</div>
					</div>

					<div className='col-lg-6 aboutimg flex-v-new'>
						<img src='/images/brk2.jpg' className='' />
					</div>
				</div>
			</div>

		</>
	)
}


export default About