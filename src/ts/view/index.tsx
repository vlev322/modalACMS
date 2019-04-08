import React, { Component, Fragment } from "react";

import { Modal } from "./components/modal";

export class IndexView extends Component<{}, {}> {
	public render(): JSX.Element {
		return (
			<Fragment>
				<button>Open modal</button>
				<Modal><h1>Hello this is window #1</h1></Modal>
				<Modal><h1>Hello this is window #2</h1></Modal>
				<Modal><h1>Hello this is window #3</h1></Modal>
			</Fragment>
		);
	}
}
