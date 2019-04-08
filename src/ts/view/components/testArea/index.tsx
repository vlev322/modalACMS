import React, { Component, Fragment } from "react";

import { Modal } from "../modal";
import { modal } from "../../../logic/controllers/mediator";

export class JustForTest extends Component<{}, {}> {
	public render(): JSX.Element {
		return (
			<Fragment>
				<button onClick={modal.open}>Open modal</button>
				<Modal><h1>Hello this is window #1</h1></Modal>				
			</Fragment>
		);
	}
}
