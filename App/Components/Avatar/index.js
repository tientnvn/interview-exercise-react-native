import React from 'react'
import {AvatarContainer, AvatarView} from './style'


export default ({size = 144, gap = 4, avatar}) => {
    return (
        <AvatarContainer size={size}>
            <AvatarView size={size} gap={gap} source={{uri: avatar}}/>
        </AvatarContainer>
    )
}