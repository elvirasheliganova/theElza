import React from 'react'
import { View, Text, Dimensions, ImageBackground } from 'react-native'
import { useFonts,  AbrilFatface_400Regular  } from '@expo-google-fonts/abril-fatface';
import AppLoading from 'expo-app-loading';


const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height

const Project = () => {
  let [fontsLoaded] = useFonts({
    AbrilFatface_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={{flex: 1 , width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{flex: 1, width: '70%', height: '80%', backgroundColor: '#E5E5E5', justifyContent: 'center', alignItems: 'center', 
      }}>
        <View style={{ flexDirection: 'row', height: '75%', width: '100%', paddingHorizontal: windowWidth / 15,  }}>
          <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center', paddingRight: windowWidth / 40 }}>
            <Text style={{fontSize: 30, fontWeight: 'bold',fontFamily: 'AbrilFatface_400Regular',  color: '#847577', paddingBottom: 20}}>Project 1</Text>
            <Text style={{fontFamily: 'AbrilFatface_400Regular',  color: '#847577', textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed laoreet purus. Praesent a orci ac ante commodo porta ut tristique lorem. Morbi non suscipit nibh. Morbi nec sodales magna, at pellentesque dolor. Nulla porta suscipit dapibus. In feugiat nulla libero, vel blandit purus suscipit nec. Vestibulum ante ipsum primis.</Text>

          </View>
          <ImageBackground 
          source={{uri: 'https://images.unsplash.com/photo-1639389016237-85a1a16f76d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNnxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'}}
          style={{ height: '80%', width: '50%',  justifyContent: 'center', alignItems: 'center', alignSelf: 'center' 
        }}
          imageStyle={{ height: '100%', width: '100%', opacity: 0.3, justifyContent: 'center', alignItems: 'center',   }}
          >
            <View style={{paddingHorizontal: 20, paddingVertical: 50,  backgroundColor: '#E5E5E5', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: 'AbrilFatface_400Regular',  color: '#645355', fontSize: 26}}> Project </Text>
              <Text style={{fontFamily: 'AbrilFatface_400Regular',  color: '#645355', fontSize: 26}}> Video</Text>
            </View>
          </ImageBackground>

        </View>
        
      </View>
      
    </View>
  )
}}

export default Project
