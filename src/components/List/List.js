import React from 'react';
import ListItem from './ListItem/ListItem';
import Loader from 'react-loader-advanced';
import './List.css';

class List extends React.PureComponent {
  render() {
    return (
      <div className="container">
        { this.props.items.map((item, index) =>
          <Loader key={index} show={item.update || false} message="updating...">
            <ListItem  item={item}/>
          </Loader>
        )}
      </div>
    );
  }
}

export default List;
