import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import ToolbarPresenter from './presenters/toolbar-presenter';
import FooterPresenter from './presenters/footer-presenter';

import {
  VictoryPie,
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryArea,
  VictoryStack,
  VictoryLegend,
  VictoryAxis
} from "victory-native";

class ReviewContainer extends React.Component {
  onBack = () => {
    Actions.pop();
  }

  renderDivider = (width='75%') => {
    return (
      <View style={ { marginTop: 10, marginBottom: 10, borderBottomColor: 'lightgrey', borderBottomWidth: 2, width:width } } />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarPresenter titleLeft="Re" titleRight="view" onBack={ this.onBack }/>
        <View style={styles.body}>
          <View style={styles.cardContainer}>
            <ScrollView>
              <View style={ chipStyles.body }>
                <Text style={ chipStyles.titleText}>Total Events</Text>
                <Text style={ { ...chipStyles.statusTextOrange, fontSize: 30 }}>32</Text>
                <Text style={ chipStyles.titleText}>Average Steps</Text>
                <Text style={ { ...chipStyles.statusTextOrange, fontSize: 30 } }>5192</Text>
                <Text style={ chipStyles.titleText}>Average Time</Text>
                <Text style={ { ...chipStyles.statusTextOrange, fontSize: 30 }}>96 min</Text>
                <Text style={ chipStyles.titleText}>Average Mood Improvement</Text>
                <Text style={ { ...chipStyles.statusTextOrange, fontSize: 30 }}>11%</Text>
              </View>

              <View style={ chipStyles.body }>
                <Text style={ { ...chipStyles.statusTextBlue, fontSize: 30 }}>Event Types</Text>
                <VictoryPie
                  colorScale={["tomato", "orange", "gold"]}
                  labelRadius={70}
                  padding={{ top: 20, bottom: 30, left: 50, right: 50 }}
                  style={{ labels: { fill: "white", fontSize: 15, fontWeight: "bold" } }}
                  data={[
                    { x: 1, y: 2, label: "Mixed" },
                    { x: 2, y: 3, label: "Indoor" },
                    { x: 3, y: 5, label: "Outdoor" }
                  ]}
                />
              </View>

              <View style={ {...chipStyles.body, paddingLeft: 15} }>
                <Text style={ { ...chipStyles.statusTextBlue, fontSize: 30 }}>Mood vs. Event Time</Text>
                <VictoryChart domainPadding={{y: 50}}>
                  <VictoryStack
                    colorScale={["tomato", "orange"]}
                    padding={{ top: 20, bottom: 20, left: 50, right: 50 }}
                    height={320}
                  >
                    <VictoryArea
                      data={[{x: 30, y: 65}, {x: 45, y: 73}, {x: 60, y: 79}, {x: 75, y: 83}, {x: 90, y: 85}, {x: 105, y: 88}, {x: 120, y: 90}]}
                    />
                    <VictoryArea
                      data={[{x: 30, y: 6}, {x: 45, y: 6.5}, {x: 60, y: 7}, {x: 75, y: 8}, {x: 90, y: 7.5}, {x: 105, y: 8}, {x: 120, y: 10}]}
                    />
                  </VictoryStack>
                  <VictoryAxis dependentAxis tickFormat={(t) => {return (t > 100 ? '' : t)}}/>
                  <VictoryAxis label="Event Time (min)"/>
                </VictoryChart>
                <VictoryLegend x={125} y={0}
                  height={30}
                  borderPadding={{ top: 5, left: 5 }}
                  colorScale={[ "tomato", "orange" ]}
                  orientation="horizontal"
                  symbolSpacer={5}
                  gutter={20}
                  data={[
                    { name: "Before" }, { name: "After" }
                  ]}
                />
              </View>

              <View style={ {...chipStyles.body, paddingLeft: 15} }>
                <Text style={ { ...chipStyles.statusTextBlue, fontSize: 30 }}>Mood vs. Sociableness</Text>
                <VictoryChart labels={["Non-social", "Middle", "Social"]}>
                  <VictoryGroup offset={20}
                    colorScale={"qualitative"}
                  >
                    <VictoryBar
                      data={[{ x: 'Non-social', y: 68 }, { x: 'Middle', y: 73 }, { x: 'Social', y: 80 }]}
                    />
                    <VictoryBar
                      data={[{ x: 'Non-social', y: 78 }, { x: 'Middle', y: 81 }, { x: 'Social', y: 90 }]}
                    />
                  </VictoryGroup>
                  <VictoryAxis dependentAxis tickFormat={(t) => {return (t > 100 ? '' : t)}}/>
                  <VictoryAxis label="Event Sociableness" tickFormat={(t) => {
                    switch (t) {
                      case 1.0:
                        return 'Non-socialable';
                      case 2.0:
                        return 'Middle';
                      case 3.0:
                        return 'Socialable';
                      default:
                        return '';
                    }
                  }}/>
                </VictoryChart>
              </View>

              {/* <View style={chipStyles.body}>
                <VictoryChart>
                  <VictoryGroup offset={20}
                    colorScale={"qualitative"}
                  >
                    <VictoryBar
                      data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]}
                    />
                    <VictoryBar
                      data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]}
                    />
                    <VictoryBar
                      data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }]}
                    />
                  </VictoryGroup>
                </VictoryChart>
              </View> */}
            </ScrollView>
          </View>
        </View>
        <FooterPresenter/>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
  // body: {
  //   flex: 1,
  //   alignItems: 'center'
  // },
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardContainer: {
    flex: 1,
    width: '95%',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 20,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  submitButtonBlue: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 45,
    paddingTop: 3,
    backgroundColor: '#092e4c',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  submitText: {
    fontFamily: 'Avenir-Black',
    color: 'white',
    fontSize: 25,
  },
};

const chipStyles = {
  body: {
    width: 325,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: '#ffffff',
  },

  titleText: {
    fontFamily: 'Avenir-Black',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },

  statusText: {
    fontFamily: 'Avenir-Black',
    color: 'darkgrey',
    fontSize: 20,
  },

  buttonText: {
    fontFamily: 'Avenir-Black',
    color: 'white',
    fontSize: 15,
  },

  submitButton: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 25,
    backgroundColor: 'darkgrey',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  headerFontStyle: {
    fontFamily: 'Avenir-Black',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
  },

  statusTextBlue: {
    fontFamily: 'Avenir-Black',
    fontSize: 20,
    color: '#092e4c'
  },

  statusTextOrange: {
    fontFamily: 'Avenir-Black',
    fontSize: 20,
    color: '#ee4e22'
  },

  statusTextWhite: {
    fontFamily: 'Avenir-Black',
    fontSize: 25,
    color: 'white'
  },
};


function mapStateToProps(state) {
  return {
    events: state.ReviewReducer.events,
    loading: state.ReviewReducer.loading,
  };
}


function mapDispatchToPropos(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToPropos)(ReviewContainer);
