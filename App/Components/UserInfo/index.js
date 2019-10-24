import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, ButtonBarView, Info, HightlightText, DesText } from './style'

const keys = [
    'name',
    'dob', 
    'location',
    'phone',
    'SSN', 
]

const icons = {
  name: 'user',
  dob: 'calendar', 
  location: 'map',
  phone: 'phone',
  SSN: 'lock'
}


export default class SwiperComponent extends Component {
  state = {
    position: 0,
    key: 'name'
  }

  renderInfo() {
      const {key} = this.state
      if( key === 'name') {
        return (
            <Info>
                <DesText>My name is</DesText>
                <HightlightText>{`${this.props.user[key].first} ${this.props.user[key].last}`}</HightlightText>
            </Info>
        )
      }
      if (key === 'dob') {
        return (
            <Info>
                <DesText>My birthday is</DesText>
                <HightlightText>{`${(new Date(this.props.user[key] * 1000)).toLocaleDateString()}`}</HightlightText>
            </Info>
        )
      }
      if (key === 'location') {
        return (
            <Info>
                <DesText>My address is</DesText>
                <HightlightText>{`${this.props.user[key].street}`}</HightlightText>
            </Info>
        )
      }
      if (key === 'phone') {
        return (
            <Info>
                <DesText>My phone number is</DesText>
                <HightlightText>{`${this.props.user[key]}`}</HightlightText>
            </Info>
        )
      }
      if (key === 'SSN') {
        return (
            <Info>
                <DesText>My SSN is</DesText>
                <HightlightText>{`${this.props.user[key]}`}</HightlightText>
            </Info>
        )
      }
  }

  render() {
    return (
      <Container>
        {
            this.renderInfo()
        }
        <ButtonBarView>
          {
            keys.map((key, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => this._onPress(key, index)}>
                <Icon name={icons[key]} size={30} color={this.state.position != index? "#cdcdcd": "#8fb55e"} />
              </TouchableOpacity>
            ))
          }
        </ButtonBarView>
      </Container>
    )
  }
  _onPress(key, index) {
      this.setState({position: index, key: key})
  }
  
}