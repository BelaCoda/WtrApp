import propTypes from 'prop-types'
import { Text, View } from 'react-native';
import {ALLstyles} from './all_styles.js';
import {Ionicons} from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";


const weatherOptions = {


    Clear:{
        iconName:'sunny-outline',
        gradient:['#7384f5','#8091ff','#d1d7ff',],
        color:'yellow',
        message:'солнечно'
    },
    Clouds:{
        iconName:'cloud-outline',
        gradient:['#ece9e6','#ffffff'],
        color:'white',
        message:'облачно'
    },
    Rain : {
        iconName:'rainy',
        gradient:['#1f1c2c','#928dab'],
        color:'gray',
        message:'дождь'
    },
    Snow:{
        iconName:'snow-outline',
        gradient:['#e6dada','#274046'],
        color:'white',
        message:'снег'
    },
    Drizzle:{
        iconName:'rainy-outline',
        gradient:['#bdc3c7','#2c3e50'],
        color:'gray',
        message:'морось'
    },
    Thunderstorm:{
        iconName:'thunderstorm-outline',
        gradient:['#bdc3c7','#2c3e50'],
        color:'gray',
        message:'гроза'
    },
    Mist:{
        iconName:'cloud',
        gradient:['#bdc3c7','#2c3e50'],
        color:'#d6d6d6',
        message:'небльш. туман'
    },
    Smoke:{
        iconName:'cloud',
        gradient:['#bdc3c7','#2c3e50'],
        color:'gray',
        message:'дым'
    },
    Haze:{
        iconName:'cloud',
        gradient:['#bdc3c7','#2c3e50'],
        color:'#d6d6d6',
        message:'туман'
    },
    Dust:{
        iconName:'cloud',
        gradient:['#bdc3c7','#2c3e50'],
        color:'#d6d6d6',
        message:'пыль'

    },
    Fog:{
        iconName:'cloud',
        gradient:['#bdc3c7','#2c3e50'],
        color:'gray',
        message:'больш. туман'
    },
    Sand:{
        iconName:'cloud',
        gradient:['#bdc3c7','#2c3e50'],
        color:'gray',
        message:'песок'
    },
    Ash:{
        iconName:'cloud',
        gradient:['#606c88','#3f4c6b',],
        color:'gray',
        message:'пепел'
    },
    Squall:{
        iconName:'cloud',
        gradient:['#bdc3c7','#2c3e50'],
        color:'gray',
        message:'шквал'
    },
    Tornado:{
        iconName:'cloud',
        gradient:['#141e30','#243b55'],
        color:'gray',
        message:'торнадо'
    },
    
     
}


export default function Weather({temp,pressure,condition,temp_max,temp_min}){
    

    return (
        

      <View style={ALLstyles.main2}>
             
             <View style={ALLstyles.halfcont}> 
             
                    <Ionicons style={ALLstyles.foricon}  name={weatherOptions[condition].iconName} size={90} color={weatherOptions[condition].color} />
                    <Text style={ALLstyles.fortepm}>{temp} °С</Text>
             
              </View> 
              <LinearGradient colors={weatherOptions[condition].gradient} style={ALLstyles.halfcont2}> 
                    
                     <View style={ALLstyles.halfcont31}> 
                        <Text style={ALLstyles.main2text1}>основное    :    {weatherOptions[condition].message}</Text>
                     </View>

                     <View style={ALLstyles.halfcont3}> 
                        <Text style={ALLstyles.main2text}>давление    :    {pressure} гПа</Text>
                    </View>

                    <View style={ALLstyles.halfcont3}> 
                        <Text style={ALLstyles.main2text}>max. темп.  :  {temp_max} °С</Text>
                    </View>

                    <View style={ALLstyles.halfcont3}> 
                        <Text style={ALLstyles.main2text}>min. темп.  :   {temp_min} °С</Text> 
                    </View>
               
                </LinearGradient> 
        </View> 
             
               
    );


}


Weather.propTypes = {

   temp:propTypes.number.isRequired,
   temp_max:propTypes.number.isRequired,
   temp_min:propTypes.number.isRequired,
   pressure:propTypes.number.isRequired,
   condition:propTypes.oneOf(['Thunderstorm','Drizzle','Rain','Snow','Mist','Smoke','Haze','Dust','Fog','Sand','Ash','Squall','Tornado','Clear','Clouds']).isRequired,

}
