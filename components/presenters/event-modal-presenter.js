import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Modal,
} from 'react-native';

export default class EventModalPresenter extends React.Component {
  render() {
    if (this.props.eventInfo) {
      return (
        <View>
          <Modal animationType="fade" transparent={true} visible={this.props.modalShow}>
            <View style={{marginTop: 20}}>
              <TouchableOpacity onPress={ this.props.onModalClose } style={{ height: 200 }}/>
              <View style={styles.modalContainer}>
                <View style={{marginTop: '40%', width: '100%', flex: 1}}>
                  {/* <View style={ chipStyles.body }>
                    <Text style={ chipStyles.titleText}>Where</Text>
                    <Text style={ chipStyles.statusText}>{ this.props.eventInfo.where }</Text>
                    <Text style={ chipStyles.titleText}>What</Text>
                      { this.props.eventInfo.what.map((item, index) => {
                        return (
                          <Text key={index} style={chipStyles.statusText}>{item}</Text>
                        )
                      }) }
                  </View> */}
                  {/* <TouchableOpacity style={ styles.submitButton } eventIdx={0} onPress={ this.props.onModalSubmit } >
                    <Text style={ styles.submitText }>Start!</Text>
                  </TouchableOpacity> */}
                </View>
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
    marginTop: 10,
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
    fontSize: 25,
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
};
