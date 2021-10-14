import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../pages/shop/CollectionPreview";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import "./collection-overview.scss";

const CollectionOverview = ({ collections }) => {
	return (
		<div className="collection-overview">
			{collections.map((collection) => (
				<CollectionPreview
					key={collection.id}
					title={collection.title}
					items={collection.items}
				/>
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
