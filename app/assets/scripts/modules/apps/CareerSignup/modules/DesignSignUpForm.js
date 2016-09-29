import React, { Component } from 'react';
import StateOption from './StateOption';

class DesignSignUpForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h2>Designer</h2>

        <form className="form-horizontal sign-up">
          <div className="form-group">
            <label htmlFor="name" className="col-sm-3 control-label">Name</label>
            <div className="col-sm-9">
              <input type="email" className="form-control" id="name"/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="state" className="col-sm-3 control-label">State</label>
            <div className="col-sm-9">
              <select className="form-control" id="state">
                {this.props.stateData.map(function(result, key) {
                  return <StateOption key={key} label={result.label} value={result.value} />;
                })}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="behance-id" className="col-sm-3 control-label">Behance ID</label>
            <div className="col-sm-9">
              <input type="email" className="form-control" id="behance-id"/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="wireframing" className="col-sm-3 control-label">What's your favorite wireframing tool?</label>
            <div className="col-sm-9">
              <input type="email" className="form-control" id="wireframing"/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="cover-letter" className="col-sm-3 control-label">Cover Letter</label>
            <div className="col-sm-9">
              <textarea className="form-control" rows="5" id="cover-letter"></textarea>
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-9">
              <button type="submit" className="btn btn-default">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default DesignSignUpForm
