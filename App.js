/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React,{useContext} from 'react'
import 'react-native-gesture-handler';

import Home from './components/home';
import {FirebaseContext} from './provider'




const App = () =>{
  // const {collectionAddProduit, firestore} = useContext(FirebaseContext);
  
  // collectionAddProduit(
  //   {
  //     image :'https://firebasestorage.googleapis.com/v0/b/food-9503f.appspot.com/o/produits%2F4.png?alt=media&token=eb784d14-0ad5-425e-9e56-23a84bb61d24',
  //     name: 'Produit x',
  //     description: 'description',
  //     price:25,
  //     dateAdd:firestore.Timestamp.fromDate(new Date())
  //   }
  //   )
    return (
    <Home />
  );
};

export default App;
