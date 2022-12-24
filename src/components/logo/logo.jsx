import React, {useState, useEffect, useRef} from 'react'
import './logo.css'


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


const Logo = () =>{

	const [sidebar, setSidebar] = useState(false);
	const openMenu = () => setSidebar(!sidebar);
	const closeMenu = () => setSidebar(!sidebar);


	return(

		<>

			<div className='container-fluid'>
				<div className='row'>
					<div className='col-lg-12 flex-h-new5'>
						<div className='logo-bg rounded-lg mt-2 ml-5'>
							<div className='text-center big-text'>
								KRAK
							</div>

							<div className='small-text'>
								Physical & Online Academy
							</div>
						</div>

						<div className='w-70 input-field'>
							<div className='flex-h bg-light input px-3'>
								<input required type = "search" placeholder='Search Krak....' className = "p-3 border-0 w-100  d-block" />
								<i className='bi-search'></i>
							</div>

							<div className='w-15 ml-5'>
								<button className='logobtn'>
									Log In
								</button>
							</div>
						</div>

						<div className='w-100 icon'>
							<i className={sidebar ? '' : 'bi-filter-right text-dark mt-5 fa-2x d-md-none'} onClick={openMenu}></i>
						</div>
					</div>
				</div>
			</div>


			<div className={sidebar ? 'mob-navbar slideInLeft zindex' : 'd-none'}>
				<div className='flex-h-new5 px-3 py-4'>
					<div className='logo-bg rounded-lg mt-2'>
						<div className='text-center big-text'>
							KRAK
						</div>

						<div className='small-text'>
							Physical & Online Academy
						</div>
					</div>

					<div>
						<i className='bi-x text-white fa-2x d-md-none' onClick={closeMenu}></i>
					</div>
				</div>

				<div className='py-4 px-3'>
					{
						NAV_LINK.map((item,index)=>(

							<div className='my-5'>
								<a href={item.path} key={index} className='text-white'>{item.display}</a>
							</div>
						))
					}
				</div>

				<div className='w-70'>
					<div className='flex-h bg-light input px-3 ml-4'>
						<input required type = "search" placeholder='Search Krak....' className = "p-3 border-0 w-100  d-block" />
						<i className='bi-search'></i>
					</div>

					{/*<div className='w-100 ml-4'>
						<button className='moblogobtn'>
							Log In
						</button>
					</div>*/}
				</div>
			</div>
		</>
	)
}


export default Logo