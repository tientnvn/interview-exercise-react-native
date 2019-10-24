import styled from 'styled-components'


const Container = styled.View`
    flex: 1;
    position: absolute;
    top: 100;
    bottom: 0;
    height: 250px;
    right: 0;
    left: 0;
    backgroundColor: #fff;
`

const ButtonBarView = styled.View`
    flex: 1;
    flexDirection: row;
    position: absolute;
    bottom: 0;
    right: 64;
    left: 64;
    justifyContent: space-around;
`

const Info = styled.View`
    position: absolute;
    top: 100;
    left: 0;
    right: 0;
    justifyContent: center;
    alignItems: center;
    flexDirection: column;
`

const HightlightText = styled.Text`
    color: black;
    fontWeight: 800;
    fontSize: 24;
    textAlign: center;
`

const DesText = styled.Text`
    color: #cdcdcd;
    fontWeight: 400;
    fontSize: 18;
    textAlign: center;
`

export { Container, ButtonBarView, Info, HightlightText, DesText }