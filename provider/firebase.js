import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

class Firebase {
    constructor(){
        this.auth = auth;
        this.firestore = firestore;
    }
    getMenu = (ordering) => firestore().collection('menu')
                                       .orderBy("position", ordering);
                                      

    getDataSort = (collection, champ, sort) => firestore().collection(collection)
                                                          .orderBy(champ, sort);

    collectionAddProduit = (data) => firestore().collection('produits').add(data);

                                     
}
export default Firebase