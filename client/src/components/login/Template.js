import React from 'react';
import Divider from '@material-ui/core/Divider';
import Login from './Login';
import './login.css';

const SignInSide = ({ history }) => {
	return (
		<div className="container">
			<div className="wrapper">
				<div className="center">
					<div className="title-wrapper">
						<span className="title">Title</span>
					</div>
					<hr />
					<div className="text-wrapper">
						<span className="text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit delinti
							consequuntur nihil.
						</span>
						<form className="form" noValidate>
							<Login history={history} />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignInSide;
