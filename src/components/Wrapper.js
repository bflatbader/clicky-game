import React from 'react';
import '../styles/Wrapper.css';

function Wrapper(props) {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-1'></div>
				<div className={props.shake ? 'col-md-10 shake' : 'col-md-10'}>
					{props.children}
				</div>
				<div className='col-md-1'></div>
			</div>
		</div>
	);
}

export default Wrapper;
