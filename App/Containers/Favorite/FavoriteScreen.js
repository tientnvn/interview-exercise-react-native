import React from 'react'
import Swiper from 'react-native-deck-swiper'
import { Card } from 'App/Components/'
import { Container, BackgroundView } from './FavoriteScreenStyle'
import { AsyncStorage } from 'react-native';

class App extends React.Component {

  state = {
    users: []
  }

  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem('favoriteUsers');
      if (value !== null) {
        data = JSON.parse(value) 
        this.setState({users: data.favoriteUsers})
      }
    } catch (error) {

    }
    
  }

  render() {
    return (
      <Container>
        <BackgroundView/>
        {
          this.state.users.length !== 0 ? 
          <Swiper
            animateCardOpacity
            cards={this.state.users}
            renderCard={(user) => <Card user={user} />}
            cardIndex={0}
            backgroundColor="transparent"
            stackSize={2}
            infinite
            showSecondCard={true}
            animateOverlayLabelsOpacity
          /> : null
        }
        
      </Container>
    )
  }

}

export default App

