import React, { Component, Fragment } from "react";

import { Modal } from "./components/modal";

export class IndexView extends Component<{}, {}> {
	public render(): JSX.Element {
		return (
			<Fragment>
				<Modal><h1>Our Children</h1></Modal>
			</Fragment>
		);
	}
}
