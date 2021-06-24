/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import {
   SafeAreaView,
   ScrollView,
 } from 'react-native';
 
 import 'react-native-gesture-handler';
 import Header from '../header'
 import Menu from '../menu'
 import Foodlist from '../foodlist'
import { styles } from '../foodlist/style';
 
 
 
 const Home = () => {
   return (
 
     <SafeAreaView style={styles.container}>     
       <ScrollView style={styles.container}>
           <Header />
 
           <Menu/>
 
           <Foodlist />
 
           </ScrollView> 
     </SafeAreaView>
   );
 };
 
 export default Home;
 
