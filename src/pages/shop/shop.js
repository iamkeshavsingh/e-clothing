import React from 'react';
import { Route } from 'react-router-dom';


import CollectionOverview from '../../components/colection-overview/colection-overview';
import CateogoryPage from '../category/category';

const ShopPage = ({ match }) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:category`} component={CateogoryPage} />
        </div>
    );
}


export default ShopPage;