import React from 'react'
import { shape, object } from 'prop-types'
import { CardView , DataBackground, CardContainer} from './Card.styles'
import AvatarView from 'App/Components/Avatar'
import UserInfo from 'App/Components/UserInfo'

const Card = ({ user }) => (
  <CardContainer>
    <CardView>
      <DataBackground/>
      <UserInfo user={user}/>
      <AvatarView avatar={user.picture}/>
    </CardView>
  </CardContainer>
)

Card.propTypes = {
  user: shape({
    name: object,
  }).isRequired,
}

export default Card
