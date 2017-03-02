/**
 *  Copyright (c) Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';


/**
 * FavoritesPanel
 *
 * A panel saving favorite queries
 */
export class FavoritesPanel extends React.Component {

  static propTypes = {
    favorites: PropTypes.array,
    favoritesStyle: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  render() {
    return (
      <ul style={this.props.favoritesStyle} className="favorite-items">
        {this.props.favorites.map((favorite, i) => {
          return (
            <li key={i}>
              <div className="favorite-item query">{'QUERY'}</div>
              <div className="favorite-item">{favorite.query}</div>
            </li>
          );
        })}
      </ul>
    );
  }
}
