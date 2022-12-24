import React, {useState, useEffect, useRef} from 'react'
import './footer.css'


const Footer = () =>{

	return(

		<>

			<div className='container-fluid h-50 bg-default mt-100 pt-40 pb-20'>
				<div className='row footer justify-content-center'>
					<div className='col-lg-3 flex-h-new6 footer-1'>
						<div className='logo-bg rounded-lg mt-2 ml-5'>
							<div className='text-center big-text'>
								KRAK
							</div>

							<div className='small-text'>
								Physical & Online Academy
							</div>
						</div>

						<div className='footer-1-icons flex-v mt-5'>
							<div className='flex-h'>
								<div>
									<i className='bi-telephone text-white'></i>
								</div>
								<div className='ml-4 py-3 text-white'>
									09153396054	
								</div>
							</div>

							<div className='flex-h'>
								<div>
									<i className='bi-envelope  text-white'></i>
								</div>
								<div className='ml-4 py-3 text-white'>
									KRAkcompany@gmail.com
								</div>
							</div>

							<div className='flex-h'>
								<div className='flex-h'>
									<i className='bi-geo-alt text-white'></i>
									<div className='text-white ml-4'>
										Lagos,
									</div>
									<div className='text-white ml-1'>
										Nigeria
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-8 flex-h-new4 footer-2'>
						<div className='footer-2-service'>
							<div className='footer-header'>
								Quick Links
							</div>

							<div className='text-white footer-links'>
								<div className='mt-5'>
									Get Help	
								</div>

								<div className='mt-3'>
									Hire Talent
								</div>

								<div className='w-100 mt-3'>
									Resume Builder
								</div>
							</div>
						</div>

						<div className='footer-2-company'>
							<div className='footer-header'>
								Resources
							</div>

							<div className='text-white footer-links'>
								<div className='mt-5'>
									Blog	
								</div>

								<div className='w-100 mt-3'>
									About Us
								</div>
							</div>
						</div>

						<div className='footer-2-company'>
							<div className='footer-header'>
								My Account
							</div>

							<div className='text-white footer-links'>
								<div className='mt-5'>
									FAQs	
								</div>

								<div className='w-100 mt-3'>
									Contact Us
								</div>
							</div>
						</div>

						<div className='footer-2-company'>
							<div className='footer-header'>
								Contact Us
							</div>

							<div className='text-white footer-links'>
								<div className='mt-5'>
									Privacy Policy
								</div>

								<div className='w-100 mt-3'>
									Terms and conditions
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='footer-border mt-5'></div>

				<div className='mt-30 pr-50 pl-50'>
					<div className='footer-end mt-3 text-white'>
						<div className='flex-h end-icons mt-5'>
							<div>
								<i className='bi-twitter text-white'></i>
							</div>
							<div className='ml-4'>
								<i className='bi-facebook text-white'></i>
							</div>
							<div className='ml-4'>
								<i className='bi-linkedin text-white'></i>
							</div>
						</div>

						<div className='mt-5'>
							A product of KRAK
						</div>

						<div className='mt-5 text-center'>
							<i className='ri-copyright-line'></i> 2022 KRAK Ltd. All Rights Reserved
						</div>
					</div>
				</div>
			</div>

		</>
	)
}



export default Footer