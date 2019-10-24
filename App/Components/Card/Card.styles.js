import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

import styled from 'styled-components'

const CardContainer = styled.View`
  height: ${height - 300};
  backgroundColor: white;
  borderRadius: 5;
  shadowColor: black;
  shadowOffset: {
    width: 0,
    height: 2,
  };
  shadowRadius: 6;
  shadowOpacity: 0.3;
  elevation: 2;
`

const CardView = styled.View`
  backgroundColor: #f9f9f9;
  justifyContent: center;
  alignItems: center;
  borderRadius: 4;
  shadowColor: #000;
  shadowOffset: { width: 0, height: 2 };
  shadowOpacity: 0.8;
  shadowRadius: 2;
`
const DataBackground = styled.View`
  position: absolute;
  top: 0px;
  height: 300px;
  right: 0;
  left: 0;
  backgroundColor: #f5f5f5;
  borderRadius: 4;
`

const DataContainer = styled.View`
  position: absolute;
  top: 100px;
  height: 250px;
  right: 0;
  left: 0;
  backgroundColor: #ffffff;
  borderTopColor: #cdcdcd;
  borderTopWidth: 2px;
  borderRadius: 4;
`

export { CardView , DataBackground, DataContainer, CardContainer}
