import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    clothContainer: {
      position: 'relative',
      width: '98%',
      height: '100%',
      
      backgroundColor: '#f3f0ec'

  },
  buttonsContainer:{ 
    marginTop:'40%',
    marginBottom:'20%'
  },
  text_til: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 62,
    color: '#5C514F',
    marginLeft:'4%',marginBottom: '-5%'
  },
  titles: {
    position: 'absolute',
    textAlign: 'center',
    marginLeft:'3%'
  },
  entry_container: {
    marginTop:'48%',
    alignContent:'center',
    justifyContent:'center',
    marginLeft:'5%'
  },
  email_input: {
    width: 280,
    height: 50,
    backgroundColor: '#ffff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25, 
    fontSize: 16,
    shadowColor: 'grey',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  pass_input: {
    width: 280,
    height: 50,
    backgroundColor: '#ffff',
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 25, 
    fontSize: 16,
    shadowColor: 'grey',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  }
});
export default styles;