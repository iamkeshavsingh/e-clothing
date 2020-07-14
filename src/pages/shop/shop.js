import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';


import CollectionOverview from '../../components/colection-overview/colection-overview';
import CateogoryPage from '../category/category';
import { firestore, transformCollectionToMap } from '../../firebase/firebase.util';
import { addInitData } from '../../store/shop/shop.action';
import Spinner from '../../components/spinner/spinner';

class ShopPage extends Component {

    unsubscribeFromSnapShot = null;

    componentDidMount() {
        const { addInitData } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(snapShot => {
            const collections = transformCollectionToMap(snapShot);
            addInitData(collections);
            this.stopLoader();
        });
    }

    render() {
        const { match } = this.props;
        return (
            <Spinner isLoading>
                {(startFn, stopFn) => {
                    this.startLoader = startFn;
                    this.stopLoader = stopFn;
                    return (
                        <div className="shop-page">
                            <Route exact path={`${match.path}`} component={CollectionOverview} />
                            <Route path={`${match.path}/:category`} component={CateogoryPage} />
                        </div>
                    )
                }}
            </Spinner>
        );

    }
}

const mapDispatchToProps = dispatch => ({
    addInitData: collections => dispatch(addInitData(collections))
});


export default connect(null, mapDispatchToProps)(ShopPage);