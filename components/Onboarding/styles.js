import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    clothContainer: {
      position: 'relative',
      width: '100%',
      height: '100%',
      
      backgroundColor: '#f3f0ec'

  },
  buttonsContainer:{ 
    marginTop:'147%',
    marginBottom:'20%'
  },
  titles: {
    position: 'absolute',
    textAlign: 'center',
  },
  title1: {
    fontFamily: 'Fredoka',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 62,
    textAlign: 'center',
    color: '#000000',
    marginTop: '15%'
  },
  title2: {
    marginTop: '20%',
    marginLeft: '3%',
    marginRight:'30%',
    fontFamily: 'AbrilFatface-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 35,
    lineHeight: 62,
    color: '#5C514D',
},
  title3: {
    fontFamily: 'AbrilFatface-Regular',
    fontStyle: 'normal',
    fontWeight: '500',
    textAlign:'right',
    fontSize: 35,
    lineHeight: 62,
    color: '#5C514D',
    marginTop: '10%',
    marginRight:'3%',
    marginLeft: '30%'
  }

});
export default styles;