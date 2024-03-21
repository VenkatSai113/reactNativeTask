import { useEffect, useState } from "react"
import { View,Text,StyleSheet, ScrollView,Image} from "react-native"

const Home=()=>{
    const [images,setImages]=useState([])
    useEffect(()=>{
        const getGalleryImages = async () => {
            const apiUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s';
        
            const response = await fetch(apiUrl);
            const data = await response.json();
        
            console.log(data.photos.photo);
            setImages(data.photos.photo)
        };
        
        getGalleryImages();
        
    },[])
    return(
        <ScrollView>
        <View style={styles.mainView}>
            {images.map(eachItems=>
              <Image
              source={{ uri: `${eachItems.url_s}` }}
              style={styles.imageStyles}
            />  )}
        </View>
        </ScrollView>
    )
}
export default Home
const styles=StyleSheet.create({
    mainView:{
        height:'100vh',
        width:'100vw',
        
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
        alignItems:'baseline'

    },imageStyles:{
        height:100,
        width:100,
        margin:10
    }
})