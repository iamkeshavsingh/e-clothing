import React from 'react';
import { connect } from 'react-redux';

import './colection-overview.scss';

import CollectionPreview from '../preview-collection/preview-collection';

const CollectionOverview = ({ collections }) => {
    return (
        <div className="collection-overview">
            {collections.map(({ id, ...items }) => <CollectionPreview key={id} {...items} />)}
        </div>
    );
};

const mapStateToProps = ({ shop: { collections } }) => ({
    collections: collections
});


export default connect(mapStateToProps)(CollectionOverview);