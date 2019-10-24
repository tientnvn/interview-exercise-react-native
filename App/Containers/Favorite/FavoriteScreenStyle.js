import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')
import styled from 'styled-components'

const Container = styled.View`
  flex: 1;
  flexDirection: column;
  justifyContent: flex-start;
  alignItems: stretch;
  backgroundColor: #f5f5f5;
`;

const BackgroundView = styled.View`
  height: 150;
  backgroundColor: #2d2e32;
`

export {Container, BackgroundView}