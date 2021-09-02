import React from "react";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu/MenuItem";
import "./directory.scss";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { connect } from "react-redux";

const Directory = ({ sections }) => (
	<div className="directory-menu">
		{sections.map(({ id, ...otherSectionProps }) => {
			return <MenuItem key={id} {...otherSectionProps} />;
		})}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
