import React from 'react';
import { connect } from 'react-redux';

import './directory.scss';

import MenuItem from '../menu-item/menu-item';

const Directory = ({ sections }) => {

    return (
        <div className="directory-menu">
            {sections.map(section => <MenuItem key={section.id} {...section} />)}
        </div>
    );


}

const mapStateToProps = ({ directory }) => ({
    sections: directory
});

export default connect(mapStateToProps)(Directory);