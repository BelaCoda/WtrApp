import React from 'react';
import { Text, View } from 'react-native';
import {ALLstyles} from './all_styles.js';


export default function Loading() {


    return (<View style={ALLstyles.main}>


          <Text style={ALLstyles.fortext} >Загрузка текущей погоды...</Text>
          
          <View style={ALLstyles.forimage}>
            
            <View style={ALLstyles.for3view}>
                
                <Text style={ALLstyles.fortext2}>getLocation = async () ={'>'} {'{'}</Text>
                <Text  style={ALLstyles.fortext2p}>                        
                        try {' {'}
                        await Location.requestForegroundPermissionsAsync();
                        const {'{'}coords:{' {'}latitude,longitude{'}}'} = await L.Location.getCurrentPositionAsync();
                        this.setState({'{'}isLoading : false{'}'}) ;
                </Text> 
                
            </View>
           

            <View style={ALLstyles.for3view}>
              
              <Text style={ALLstyles.fortext2ptp}>   {'}'}  catch (error) {'{'}</Text>
                <Text style={ALLstyles.fortext2pl}>Alert.alert('Can't locate!',':('));
                    {'}'}
                {'}'}componentDidMount()
                
                
                </Text><Text style={ALLstyles.fortext2pl}>{'{'}
                    this.getLocation();
                {'}'} 
                </Text>
           
            </View>
            
            
            <View style={ALLstyles.for3view}>
               <Text style={ALLstyles.fortext2pdtp17pdlf20}>render(){'{'}</Text><Text style={ALLstyles.fortext2pl}>
                    const {'{'}isLoading{'}'} = this.state;</Text>
                    <Text style={ALLstyles.fortext2pl}>return (</Text> 
                      <Text style={ALLstyles.fortext2pll}>isLoading ? {'<'}Loading /{'>'} : null</Text>
                    
                     <Text style={ALLstyles.fortext2pl}>)</Text> 
                <Text style={ALLstyles.fortext2}>{'}'}</Text> 
                
            </View>

          </View>

    </View>);

    
}
