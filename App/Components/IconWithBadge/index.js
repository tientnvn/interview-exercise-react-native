import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components'

const Badge = styled.View`
    position: absolute;
    right: -6;
    top: -3;
    backgroundColor: red;
    borderRadius: 8;
    width: 16;
    height: 16;
    justifyContent: center;
    alignItems: center;
`

const Container = styled.View`
    width: 24;
    height: 24;
    margin: 5px;
`

const BadgeText = styled.Text`
    color: white;
    fontSize: 10;
    fontWeight: bold;
`

export default class IconWithBadge extends React.Component {
    render() {
      const { name, badgeCount, color, size } = this.props;
      return (
        <Container>
          <Icon name={name} size={size} color={color} />
          {badgeCount > 0 && (
            <Badge>
                    <BadgeText>{badgeCount}</BadgeText>
            </Badge>
          )}
        </Container>
      );
    }
  }