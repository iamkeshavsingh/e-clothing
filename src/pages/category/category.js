import React from 'react';
import { connect } from 'react-redux';

import './category.scss';

import CollectionItem from '../../components/collection-item/collection-item';

const CateogoryPage = ({ collection }) => {
    const { title, items } = collection || {};
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items && items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = ({ shop: { collections } }, { match: { params: { category } } }) => {
    const collection = collections.find(collection => collection.routeName === category);
    return {
        collection: collection
    };
};

export default connect(mapStateToProps)(CateogoryPage);