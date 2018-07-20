import React from 'react';
import { updateTask, removeTask } from '../../../actions/items';
import './ListItem.css';
import { connect } from 'react-redux';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.item.status,
      description: this.props.item.description,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick() {
    const { _id } = this.props.item;
    this.props.updateTask(_id, this.state);
  }

  handleDelete() {
    const { _id } = this.props.item;
    this.props.removeTask(_id);
  }

  handleDescription({ target }) {
    this.setState({ description: target.value });
  }

  handleStatus() {
    this.setState({ status: !this.state.status });
  }

  render() {
    const { status, description } = this.state;
    return (
      <div className="row">
        <div className="checkbox column">
          <input type="checkbox" className="align-bottom" onChange={this.handleStatus} defaultChecked={status}/>
        </div>
        <div className="column description">
          <input type="text" className="form-control" value={description} onChange={this.handleDescription}/>
        </div>
        <div className="column">
          <button type="button" onClick={() => this.handleClick()} className="btn-sm btn-success">Save</button>
        </div>
        <div className="column">
          <button type="button" className="btn-sm btn-danger" onClick={() => this.handleDelete()}>Delete</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (id, data) => dispatch(updateTask(id, data)),
    removeTask: (id) => dispatch(removeTask(id)),
  };
};

export default connect(null, mapDispatchToProps)(ListItem);
