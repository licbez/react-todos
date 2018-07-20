import React from 'react';
import Loader from 'react-loader-advanced';

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    this.props.createTask(this.state.text);
    this.setState({ text: '' });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Loader show={false} message="creating...">
          <div className="form-group">
            <h4>Create task:</h4>
            <textarea className="form-control" value={this.state.text} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <button className="btn btn-success" onClick={this.handleSubmit} type="button" value="Submit">Submit</button>
          </div>
        </Loader>
      </div>
    );
  }
}

export default CreateTask;
