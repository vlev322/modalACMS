import React from "react";

import { cover } from '../../../logic/controllers/mediator';
import { Observer } from "./../observer";

export class Cover extends Observer<{ isOpen: boolean }> {
	protected store = cover;

	public render(): JSX.Element | null {
		if (!this.state.isOpen) return null;

		return (
			<div className='modal-wrapper' />
		)
	}
}