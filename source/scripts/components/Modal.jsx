import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {queryToString} from '../helpers';


const Modal = React.createClass({
	componentDidMount() {
		const {routing} = this.props;

		this.root.addEventListener('click', (event) => {
			const {target: {classList}} = event;

			if (classList.contains('modal') || classList.contains('modal__close')) {
				const queryString = queryToString(routing.query, ['modal']);
				hashHistory.push(routing.pathname + queryString);
			}
		});
	},

	render() {
		const {props} = this;
		return (
			<div ref={(root) => (this.root = root)} className="modal">
				<div className="modal__window">
					<div className="modal__close" />
					<div className="modal__content">
						<h2 className="modal__titl">{props.title}</h2>
						{props.children}
					</div>
				</div>
			</div>
		);
	},
});

function mapStateToProps(state) {
	return {
		routing: state.routing.locationBeforeTransitions,
	};
}

export default connect(mapStateToProps)(Modal);
