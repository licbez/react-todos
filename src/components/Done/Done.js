import React from 'react';
import { connect } from 'react-redux';
import List from '../List/List';
import { fetchTasks } from '../../actions/items';

class Done extends React.Component {
  componentDidMount() {
    this.props.fetchData({ done: true });
  }

  render() {
    return (
      <div>
        <List items={this.props.items}/>
      </div>
    );
  }
}


const mapStateToProps = ({ items, loading }) => ({ items, loading });

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (params) => dispatch(fetchTasks(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Done);
