import React, {useState, useEffect, useRef} from 'react'
import './newsletter.css'


const Newsletter = () =>{

	return(

		<>

			<div className='container pb-5 mt-100'>
				<div className='row justify-content-center'>
					<div className='col-lg-6'>
						<div className='newsletter-bg rounded'>
							<div className='newsletter-text'>
								Subscribe to our newsletter
							</div>

							<div className='newsletter-mintext'>
								Stay updated on our latest news. We promote only valuable mails and we will not spam you with irrelevant contents.
							</div>

							<div className='input-bg w-80'>
								<div>
									<input required type='mail' className='' placeholder='Enter your email address...' />
								</div>
								<div>
									<button className='subbtn rounded-lg'>
										Subscribe
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}


export default Newsletter