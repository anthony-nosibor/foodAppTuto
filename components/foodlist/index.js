import React, {useState, useContext, useEffect} from 'react'
import { ActivityIndicator,View, Text, StyleSheet, FlatList, Image } from 'react-native'
import Product from '../foodlist/product'
import {styles} from './style'
import {FirebaseContext} from '../../provider'
import { ListItem } from 'react-native-elements/dist/list/ListItem'

const renderProduct = (item) => {
    return(
        <Product
        image={item.image}
        title={item.name}
        price={item.price}
        description={item.description}
        onPress={()=> console.log('hi')}
        
        />
    )
}

const Foodlist = () => {

const [products , setProducts ] =useState([]) ;
const [isloading, setIsLoading ] = useState([]) ;
const {getDataSort} = useContext(FirebaseContext);
console.log(getDataSort);

useEffect(() => {
  setIsLoading(true); //chargement
  const productSubscriber = getDataSort("produits","price","asc")
  
                    .onSnapshot(datasnapShot=>{
                    let productData = [];
                    
                    datasnapShot.forEach(data=>{
                    productData = [...productData, {id : data.id, ...data.data()}]
                    
       })
        setProducts(productData);
        // console.log("set ProductData", products)
        setTimeout(() =>setIsLoading(false), 5000);
   })
   // console.log('use Effect');
   return () => productSubscriber()
}, [])

    return (
        <View>
            <Text style={styles.viewFoodList}>Nos Burgers :</Text>

            { (products.length > 0 && !isloading) ?
            <FlatList
                data = {products}
                numColumns = {2}
                renderItem = {renderProduct}
                keyExtractor = {item => item.id}
             /> 
            :<ActivityIndicator size="small" color="#0000ff" />}
        </View>

    )
}

export default Foodlist
