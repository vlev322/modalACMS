import React, { Component, Children } from 'react';

export class Modal extends Component<{}, {}> {
	public render(): JSX.Element {
		return (
			<div className='modal-wrapper'>
				<div className='modal'>
					<div className='modal-header'>
						<span>Add new path</span>
						<button>&#10006;</button>
					</div>
					{this.props.children}
				</div>
			</div>
		)
	};
}