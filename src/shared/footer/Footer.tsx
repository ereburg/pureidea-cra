import React from 'react'
import brand from '../../assets/images/brand/brand.svg'

function Footer(): JSX.Element {
	return (
		<div className='bg-red-50 container'>
			Footer is working
			<img src={brand} alt='Alt' />
		</div>
	)
}

export default Footer
