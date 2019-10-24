import React from 'react'
import Swiper from 'react-native-deck-swiper'
import { connect } from 'react-redux'
import { Card } from 'App/Components/'
import { Container, BackgroundView } from './HomeScreen.styles'
import ExampleActions from 'App/Stores/Example/Actions'
import { AsyncStorage } from 'react-native';

class App extends React.Component {

  async componentDidMount() {
    this._fetchUser()
  }

  render() {
    return (
      <Container>
        <BackgroundView/>
        <Swiper
            animateCardOpacity
            cards={[]}
            renderCard={() => <Card user={this.props.user} />}
            cardIndex={0}
            backgroundColor="transparent"
            stackSize={2}
            infinite
            showSecondCard={false}
            animateOverlayLabelsOpacity
            onSwiped={() => this._fetchUser()}
            onSwipedRight={() => this._onSwipedRight()}
          />
      </Container>
    )
  }

  _fetchUser() {
    this.props.fetchUser()
  }
  _onSwipedRight() {
    this._storeData(this.props.user)
  }

  _storeData = async (user) => {
    try {
      const value = await AsyncStorage.getItem('favoriteUsers');
      console.log(value)
      let data = {favoriteUsers: []}
      if (value !== null) {
        data = JSON.parse(value) 
      }
      data.favoriteUsers.push(user)
      await AsyncStorage.setItem('favoriteUsers', JSON.stringify(data));
    } catch (error) {
      console.log(error)
    }
  };
}


const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

