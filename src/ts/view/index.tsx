import React, { Component, Fragment } from "react";

import { Modal } from "./components/modal";
import { JustForTest } from "./components/testArea";
import { Cover } from "./components/modal/cover";

export class IndexView extends Component<{}, {}> {
	public render(): JSX.Element {
		return (
			<Fragment>
				<JustForTest/>
				<Cover></Cover>
			</Fragment>
		);
	}
}
