import React from 'react';
import { connect } from 'react-redux';
import CreateTask from './CreateTask/CreateTask';
import List from '../List/List';
import { fetchTasks, createTask } from '../../actions/items';

class Todos extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <CreateTask createTask={this.props.createTask}/>
        <hr/>
        <List items={this.props.items}/>
      </div>
    );
  }
}


const mapStateToProps = ({ items }) => ({ items });

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchTasks()),
    createTask: (description) => dispatch(createTask(description)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
