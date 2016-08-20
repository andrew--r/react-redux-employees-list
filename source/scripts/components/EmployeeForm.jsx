import React from 'react';


const EmployeeForm = React.createClass({
	componentWillMount() {
		const {props} = this;

		this.setState({
			firstName: props.firstName || '',
			lastName: props.lastName || '',
			position: props.position || '',
			description: props.description || '',
		});
	},

	handleInput(event) {
		const newState = {};
		const inputId = event.currentTarget.getAttribute('id');
		newState[inputId] = event.currentTarget.value;
		this.setState(newState);
	},

	isValid() {
		const {state} = this;
		const invalid = (value) => typeof value === 'string' && !value.trim().length;
		return !Object
			.keys(state)
			.map((key) => state[key])
			.filter(invalid)
			.length;
	},

	handleSubmit(event) {
		const {props} = this;
		event.preventDefault();

		if (this.isValid() && typeof props.onSubmit === 'function') {
			props.onSubmit(Object.assign({}, this.state));
		}
	},

	render() {
		const {state} = this;

		return (
			<form onSubmit={this.handleSubmit}>
				<p className="input">
					<label
						className="input__label input__label--required-field"
						htmlFor="firstName"
					>Имя</label>
					<input
						type="text"
						id="firstName"
						className="input__field"
						value={state.firstName}
						onChange={this.handleInput}
					/>
				</p>
				<p className="input">
					<label
						className="input__label input__label--required-field"
						htmlFor="lastName"
					>Фамилия</label>
					<input
						type="text"
						id="lastName"
						className="input__field"
						value={state.lastName}
						onChange={this.handleInput}
					/>
				</p>
				<p className="input">
					<label
						className="input__label input__label--required-field"
						htmlFor="position"
					>Должность</label>
					<input
						type="text"
						id="position"
						className="input__field"
						value={state.position}
						onChange={this.handleInput}
					/>
				</p>
				<p className="input">
					<label
						className="input__label input__label--required-field"
						htmlFor="description"
					>Описание</label>
					<textarea
						id="description"
						className="input__field"
						value={state.description}
						onChange={this.handleInput}
					/>
				</p>
				<input type="submit" value="Сохранить" />
			</form>
		);
	},
});

export default EmployeeForm;
