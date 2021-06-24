import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator,View, Text, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import { styles } from './style';
import { FirebaseContext } from '../../provider';



const MenuTitle = ({data}) => {
    console.log()
    return (
    <View style={styles.viewMenu2} >
        <Text>{data.name}</Text>
    </View>
    )
}

const Menu = () => {

     const [menuLists, setMenu ] = useState([]) ;
     const [isloading, setIsLoading ] = useState([]) ;
     const {getMenu} = useContext(FirebaseContext);
     console.log(getMenu);

    useEffect(() => {
       setIsLoading(true); //chargement
       const menuSubscriber = getMenu("desc")
       
        .onSnapshot(datasnapShot=>{
            let menuData = [];

            datasnapShot.forEach(data=>{
                menuData.push({id : data.id, ...data.data()})
                console.log("menuData :", menuData);
            })
            setMenu(menuData);
            //  console.log("datasnapShot :", datasnapShot)
            setTimeout(() =>setIsLoading(false), 5000);
        
        })
        // console.log('use Effect');
        return () => menuSubscriber()
    }, [])
    return (
        <View  >
            
            <Divider />
                    <Text style={{
                            fontSize:30,
                            fontWeight:"bold"
                        }}>
                        La bonne adresse !!!
                    </Text>
                        <Divider />
                    <ScrollView horizontal
                                showsHorizontalScrollIndicator={false}>
                                   { (menuLists.length > 0 && !isloading) ? menuLists.map( (data) =>
                                   <MenuTitle data={data} key={data.id}/> 
                                   ):<ActivityIndicator size="small" color="#0000ff" />}
                    </ScrollView>

           
        </View>
    )
}

export default Menu
