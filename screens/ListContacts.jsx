import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react';

const ListContacts = ({navigation}) => {
    const [usersList, setUsersList] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users',
            );
            const data = await response.json();
            setUsersList(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <View style={styles.container}>
                <FlatList
                    style={styles.flatlist}
                    data={usersList}
                    renderItem={({item}) => (
                        <Pressable
                            style={styles.button}
                            onPress={() => {
                                navigation.navigate('SingleContact', {
                                    name: item.name,
                                    address: item.address,
                                    phone: item.phone,
                                    email: item.email,
                                });
                            }}>
                            <Text style={styles.textItem}>{item.name}</Text>
                        </Pressable>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F4',
        alignItems: 'center',
    },
    flatlist: {
        width: '70%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    button: {
        borderRadius: 20,
        padding: 20,
        elevation: 2,
        backgroundColor: '#3A606E',
        color: 'white',
        marginTop: 20,
    },
    textItem: {
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ListContacts;
