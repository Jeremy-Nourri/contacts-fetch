import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useState, useEffect} from 'react';
import { getCityAndCountry } from '../utils/getCityAndCountry';
import Geolocation from '@react-native-community/geolocation';

const Home = () => {

    const [informations, setInformations] = useState({city: '', country:''});
    const [coordinates, setCoordinates] = useState({longitude:'', latitude:''});

    useEffect(() => {
        Geolocation.requestAuthorization();
        Geolocation.getCurrentPosition(position => {
            setCoordinates({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude,
            });
        },
        error => console.log(error),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        console.log(coordinates);
      }, []);

    const handlePress = async () => {
        console.log('i press');
        const data = await getCityAndCountry(coordinates.latitude, coordinates.longitude);
        setInformations({city: data.LocalizedName, country: data.Country.LocalizedName});
    };


    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>Vous étes à :</Text>
            {
                !informations.city && !informations.country ?
                <Text style={styles.text}>Cliquez sur le bouton pour vous géolocaliser</Text>
                :
                (
                    <>
                        <Text style={styles.text}>Pays: {informations.country}</Text>
                        <Text style={styles.text}>Ville :{informations.city}</Text>
                    </>

                )
            }


            <Pressable
                onPress={handlePress}
                style={styles.button}
            >
                <Text style={styles.textButton}>Géolocaliser</Text>
            </Pressable>
        </View>
    );
};
export default Home;
const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        margin: 10,
        marginTop: 20,
        alignItems: 'center',
        fontSize: 20,
    },
    textButton: {
        fontSize: 20,
    },
});
