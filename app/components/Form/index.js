import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { postNewTask } from '../../redux/modules/counter';

const Form = props => {
  return (
    <section>
      <div className="content container text-center">
        <h1>To-Do App!</h1>
        <form
          onSubmit={evt => {
            evt.preventDefault();
            props.postNewTask(evt.target.taskName.value);
            evt.target.taskName.value = '';
          }}
        >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Add New To-Do</label>
            <input
              autoComplete="off"
              name="taskName"
              placeholder="Enter new task"
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </section>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      postNewTask,
      changePage: () => push('/'),
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Form);
