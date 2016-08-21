import React from 'react';
import {connect} from 'react-redux';
import {hashHistory, Link} from 'react-router';


const Modal = React.createClass({
	componentDidMount() {
		this.root.addEventListener('click', (event) => {
			const {target, currentTarget} = event;

			if (currentTarget === target) {
				hashHistory.push(this.props.prevUrl);
			}
		});
	},

	render() {
		const {props} = this;
		return (
			<div ref={(root) => (this.root = root)} className="modal">
				<div className="modal__window">
					<Link to={this.props.prevUrl} className="modal__close" />
					<div className="modal__content">
						<h2 className="modal__title">{props.title}</h2>
						{props.children}
					</div>
				</div>
			</div>
		);
	},
});

export default connect()(Modal);
