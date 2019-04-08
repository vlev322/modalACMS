import React from 'react';

import { modal } from '../../../logic/controllers/mediator';
import { Observer } from "./../observer";

export class Modal extends Observer<{ isOpen: boolean }> {
	protected store = modal;

	public render(): JSX.Element | null {
		if (!this.state.isOpen) return null;

		return (
			<div className='modal'>
				<div className='modal-header'>
					<span>Header modal window</span>
					<button onClick={this.store.close}>&#10006;</button>
				</div>
				{this.props.children}
			</div>
		)
	};
}
