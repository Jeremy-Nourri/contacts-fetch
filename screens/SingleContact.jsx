import {Pressable, StyleSheet, Text, View, Linking} from 'react-native';
import {useLayoutEffect} from 'react';
import {Button} from 'react-native-paper';

const SingleContact = ({route, navigation}) => {
    const {name, address, phone, email} = route.params;

    const cleanPhone = phone.replace(/[^0-9]/g, '');

    useLayoutEffect(() => {
        navigation.setOptions({title: `${name}`});
    }, [name, navigation]);

    return (
        <>
            <View style={styles.contactContainer}>
                <Text style={styles.text}>Name: {name}</Text>
                <Text style={styles.text}>
                    Address: {address.street}, {address.suite}, {address.city}
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    labelStyle={styles.textButton}
                    contentStyle={{fontSize: 60}}
                    style={styles.button}
                    icon="phone"
                    mode="contained"
                    onPress={() => Linking.openURL(`tel:${cleanPhone}`)}>
                    Call
                </Button>
                <Button
                    labelStyle={styles.textButton}
                    contentStyle={{fontSize: 60}}
                    style={styles.button}
                    icon="email"
                    mode="contained"
                    onPress={() => Linking.openURL(`mailto:${email}`)}>
                    Send
                </Button>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    contactContainer: {
        backgroundColor: '#F3F3F4',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    text: {
        fontSize: 20,
        margin: 10,
        color: 'black',
    },
    buttonsContainer: {
        height: '20%',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 20,
    },
    button: {
        width: '70%',
        padding: 10,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default SingleContact;
