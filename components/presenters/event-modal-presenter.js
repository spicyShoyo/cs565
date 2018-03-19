import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Modal,
  ScrollView
} from 'react-native';

const CORN = "Corn!";
const MUSIC = "Music Festival!";
const SINGLE = "Single's Night!";
const LAKE = "Squirrels!";

export default class EventModalPresenter extends React.Component {
  renderHighlightLine = (textLeft, textMid, textRight) => {
    return (
      <View style={{
        alignItems: 'center',
        flexDirection: 'row',
      }}>
        <Text style={ chipStyles.statusTextBlue }>{textLeft} </Text>
        <Text style={ chipStyles.statusTextOrange }>{textMid}</Text>
        <Text style={ chipStyles.statusTextBlue }> {textRight}</Text>
      </View>
    )
  }
  renderHighlight = (steps, outside) => {
    return (
      <View style={ chipStyles.body }>
        { this.renderHighlightLine("You walked", steps, "steps.") }
        { this.renderHighlightLine("You spent", outside, "out there.") }
      </View>
    );
  }

  renderLake = (eventInfo) => {
    return (
      <View>
        <View style={ chipStyles.body }>
          <View style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            <Text style={ chipStyles.statusTextBlue }>You met with </Text>
            <Text style={ chipStyles.statusTextOrange }>5</Text>
            <Text style={ chipStyles.statusTextBlue }> squirrels! 🐿🐿</Text>
          </View>
        </View>

        <View style={ chipStyles.body }>
          <View style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            <Text style={ chipStyles.statusTextBlue }>Selfie you took with the lake ⬇</Text>
          </View>
        </View>

        <View style={ {
          ...chipStyles.body,
          backgroundColor: '#29a4dd',
          height: 300,
          width: 325,
          alignItems: 'center',
          justifyContent: 'center'
        } }>
          <Text style={ chipStyles.statusTextWhite }>Fake photo</Text>
        </View>
      </View>
    );
  }

  renderCorn = (eventInfo) => {
    return (
      <View>
        <View style={ chipStyles.body }>
          <View style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            <Text style={ chipStyles.statusTextBlue }>You ate </Text>
            <Text style={ chipStyles.statusTextOrange }>2</Text>
            <Text style={ chipStyles.statusTextBlue }> corn dogs! 🌽🌽</Text>
          </View>
        </View>

        <View style={ chipStyles.body }>
          <View style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            <Text style={ chipStyles.statusTextBlue }>The name of the band:</Text>
          </View>
        </View>

        <View style={ chipStyles.body }>
          <View style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            <Text style={ {...chipStyles.statusTextOrange, fontSize: 60} }>Sweetcorn</Text>
          </View>
        </View>
      </View>
    );
  }

  renderSingle = (eventInfo) => {
    return (
      <View>
        <View style={ chipStyles.body }>
          <View style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            <Text style={ chipStyles.statusTextBlue }>You drank </Text>
            <Text style={ chipStyles.statusTextOrange }>martini</Text>
            <Text style={ chipStyles.statusTextBlue }>!</Text>
          </View>
        </View>

        <View style={ chipStyles.body }>
          <View style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            <Text style={ chipStyles.statusTextBlue }>You talked to:</Text>
          </View>
        </View>

        <View style={ chipStyles.body }>
          <View style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            <Text style={ {...chipStyles.statusTextOrange, fontSize: 60} }>Alex</Text>
          </View>
        </View>
      </View>
    );
  }

  renderMusic = (eventInfo) => {
    return (
      <View>
        <View style={ chipStyles.body }>
          <View style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            <Text style={ chipStyles.statusTextBlue }>You listend to:</Text>
          </View>
        </View>

        <View style={ chipStyles.body }>
          <View style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            <Text style={ {...chipStyles.statusTextOrange, fontSize: 60} }>Sweetcorn</Text>
          </View>
        </View>

        <View style={ chipStyles.body }>
          <View style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            <Text style={ chipStyles.statusTextBlue }>The genre:</Text>
          </View>
        </View>

        <View style={ chipStyles.body }>
          <View style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            <Text style={ {...chipStyles.statusTextOrange, fontSize: 60} }>Metal</Text>
          </View>
        </View>
      </View>
    );
  }

  renderEvent = (eventInfo) => {
    switch (eventInfo.title) {
      case CORN:
        return this.renderCorn(eventInfo);
      case MUSIC:
        return this.renderMusic(eventInfo);
      case SINGLE:
        return this.renderSingle(eventInfo);
      case LAKE:
        return this.renderLake(eventInfo);
      default:
        return this.renderLake(eventInfo);
    }
  }

  render() {
    if (this.props.eventInfo) {
      return (
        <View>
          <Modal animationType="fade" transparent={true} visible={this.props.modalShow}>
            <View style={{marginTop: 20}}>
              <TouchableOpacity onPress={ this.props.onModalClose } style={{ height: 200 }}/>
              <View style={styles.modalContainer}>
                <ScrollView style={{marginLeft: 10, width: '100%', flex: 1}}>
                  <View style={ chipStyles.body }>
                    <Text style={ chipStyles.statusTextOrange }>{ this.props.eventInfo.title }</Text>
                  </View>
                  <View style={ chipStyles.body }>
                    <Text style={ chipStyles.titleText}>Where</Text>
                    <Text style={ chipStyles.statusText}>{ this.props.eventInfo.where }</Text>
                    <Text style={ chipStyles.titleText}>What</Text>
                      { this.props.eventInfo.what.map((item, index) => {
                        return (
                          <Text key={index} style={chipStyles.statusText}>{item}</Text>
                        )
                      }) }
                    <Text style={ chipStyles.titleText}>When</Text>
                    <Text style={ chipStyles.statusText}>{ this.props.eventInfo.when }</Text>
                  </View>
                  { this.renderHighlight(this.props.eventInfo.steps, this.props.eventInfo.outside) }
                  { this.renderEvent(this.props.eventInfo) }
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
      )
    } else {
      return (<View/>)
    }
  }
}

const styles = {
  container: {
    flex: 1,
  },
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

  modalContainer: {
    marginLeft:9.5,
    height: 402,
    width: '95%',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 20,
    borderRadius: 10,
    backgroundColor: '#ee4e22',
    alignItems: 'center',
  },
  spinner: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
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
