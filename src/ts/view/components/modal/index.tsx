import React, { Component } from 'react';

export class Modal extends Component<{}, { isOpen: boolean }> {
	constructor(props: any) {
		super(props);
		this.state = { 
			isOpen: true 
		};
		this.close = this.close.bind(this);
		this.isOpen = this.isOpen.bind(this);
	}
	public render(): JSX.Element | null {
		return (
			this.isOpen()
		)
	};

	close() {
		this.setState({ isOpen: false })
	}
	isOpen() {
		return (
			this.state.isOpen ? this.modal() : null
		)
	}

	modal() {
		return (
			<div className='modal-wrapper'>
				<div className='modal'>
					<div className='modal-header'>
						<span>Header modal window</span>
						<button onClick={this.close}>&#10006;</button>
					</div>
					{this.props.children}
				</div>
			</div>
		)
	}
}
