import React from 'react';

import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    textAlign: "center",
    verticalAlign: "middle",
  },
  gridList: {
    width: 800,
    height: 1000,
    overflowY: 'auto',
  },
  tabs: {
    width: '100%',
  }
};

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
      <div style={styles.root}>
        <Tabs style={styles.tabs}>
          <Tab label="Basic Information">
            <div>
              <TextField hintText="Title" />
              <DatePicker hintText="Start Date" container="inline" mode="landscape" />
              <DatePicker hintText="End Date" container="inline" mode="landscape"/>
            </div>
          </Tab>
          <Tab label="Basic Information">
            <div>
              <TextField hintText="Title" />
              <DatePicker hintText="Start Date" container="inline" mode="landscape" />
              <DatePicker hintText="End Date" container="inline" mode="landscape"/>
            </div>
          </Tab>
          <Tab label="Basic Information">
            <div>
              <TextField hintText="Title" />
              <DatePicker hintText="Start Date" container="inline" mode="landscape" />
              <DatePicker hintText="End Date" container="inline" mode="landscape"/>
            </div>
          </Tab>

        </Tabs>

        {/* <GridList
          cols={1}
          cellHeight={300}
          padding={1}
          style={styles.gridList}
        >
          <GridTile>
            <Card>
              <CardHeader
                title="CardHeader Title"
                subtitle="CardHeader Subtitle"
              />
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <TextField hintText="Title" />
              <DatePicker hintText="Start Date" container="inline" mode="landscape" />
              <DatePicker hintText="End Date" container="inline" mode="landscape"/>
            </Card>
          </GridTile>
          <GridTile>
            <Card>
              <CardHeader
                title="CardHeader Title"
                subtitle="CardHeader Subtitle"
              />
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <TextField hintText="Title" />
              <DatePicker hintText="Start Date" container="inline" mode="landscape" />
              <DatePicker hintText="End Date" container="inline" mode="landscape"/>
            </Card>
          </GridTile>
        </GridList> */}

        {/* <Dialog
          title="Create new therapy"
          open={this.state.open}
          actions={actions}
        >
          <TextField hintText="Title" />
          <DatePicker hintText="Start Date" container="inline" mode="landscape" />
          <DatePicker hintText="End Date" container="inline" mode="landscape"/>
        </Dialog> */}
      </div>
    )
  }
}
