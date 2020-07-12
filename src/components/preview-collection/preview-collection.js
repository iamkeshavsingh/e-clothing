import React from 'react';

import './preview-collection.scss';
import CollectionItem from '../collection-item/collection-item';

const PreviewCollection = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1>{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((_, idx) => idx < 4)
                    .map(({ id, ...others }) => <CollectionItem key={id} {...others} />)}
            </div>
        </div>
    );
};

export default PreviewCollection;