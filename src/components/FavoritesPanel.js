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
    height: PropTypes.number,
    visible: PropTypes.bool
  }

  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  render() {
    const favorites = this.props.favorites;
    const visibleStyle = {
      height: this.props.height ? this.props.height : '200px'
    };
    const hiddenStyle = {
      height: '0px'
    };
    let currentStyle = visibleStyle;
    if (this.props.visible !== undefined && this.props.visible === false) {
      currentStyle = hiddenStyle;
    }

    return (
      <div
        style={currentStyle} >
        <div
          className="variable-editor-title">
          {'Favorites'}
        </div>
        <ul className="favorite-items">
          {favorites.map((favorite, i) => {
            return (
              <li key={i}>
                <div className="favorite-item query">{'QUERY'}</div>
                <div className="favorite-item">{favorite.query}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
