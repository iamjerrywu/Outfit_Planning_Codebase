import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 45
  },
  button: {
    position: 'relative',
    width: '150%',
    marginHorizontal:'15%',
    backgroundColor: '#5C514D',
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'AbrilFatface-Regular',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 62,
    textAlign: 'center',
    color: '#EBE9E7',
    textTransform: 'uppercase',
    
  },
  
});

export default styles;