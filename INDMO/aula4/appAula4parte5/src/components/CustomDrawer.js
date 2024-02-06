import {View, Text, Image} from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export default function CustomDrawer(props){

    return(
        
        <DrawerContentScrollView {...props}>

            <View 
                style={{ width: '100%', alignItems: 'center', marginTop: 20}}
            >

                <Image 
                    source={require('../assets/perfil.png')} 
                    style={{width: 100, height: 100}}                    
                />

                <Text style={{fontWeight:'bold', marginTop: 20, marginBottom: 35}}>Thata Schmidt</Text>

            </View>

            <DrawerItemList {...props} />
            
        </DrawerContentScrollView>
    )
    
}