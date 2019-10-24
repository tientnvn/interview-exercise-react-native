import styled from 'styled-components'


const AvatarContainer = styled.View`
  position: absolute;
  top: 16px;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  right: auto;
  left: auto;
  backgroundColor: #ffffff;
  border: 2px solid #cdcdcd;
  borderRadius: ${props => props.size/2};
  justifyContent: center;
  alignItems: center;
`

const AvatarView = styled.Image`
  width: ${({size, gap}) => size - (gap * 2)}px;
  height: ${({size, gap}) => size - (gap * 2)}px;
  resizeMode: stretch;
  borderRadius: ${({size, gap}) => (size - (gap * 2)) / 2};
  margin: ${({gap}) => gap}px;
`

export {AvatarContainer, AvatarView}