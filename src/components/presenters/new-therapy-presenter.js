import React from 'react';

import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';

export default class NewTherapyPresenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
      />,

      <FlatButton
        label="Ok"
        primary={true}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Create new therapy"
          open={this.state.open}
          actions={actions}
        >
          <DatePicker hintText="Start Date" />
          <DatePicker hintText="End Date" />
        </Dialog>
      </div>
    )
  }
}
