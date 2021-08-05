import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends React.Component {

    render() {

        return (
            <View>
                <ImageBackground source={require('../assets/space.gif')}>
                    <Image style={styles.headImage} source={require('../assets/main-icon.png')} />
                    <Text style={styles.heading}>Stellar App</Text>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Space Crafts</Text>
                        <Image style={styles.image} source={require('../assets/space_crafts.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Daily Pic</Text>
                        <Image style={styles.image} source={require('../assets/daily_pictures.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Star Map</Text>
                        <Image style={styles.image} source={require('../assets/star_map.png')} />
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        )

    }


}

const styles = StyleSheet.create({

    heading: {

        color: "#661111",
        alignSelf: "center",
        fontSize: 40,
        fontFamily: "cursive"

    },

    textInput: {

        borderWidth: 3,
        borderRadius: 20,
        width: 200,
        marginTop: 50,
        alignSelf: "center",
        textAlign: "center",
        fontFamily: "cursive"

    },

    image: {

        marginTop: 50,
        width: 200,
        height: 200
    },

    headImage: {

        alignSelf: "center",
        marginTop: 50,
        width: 200,
        height: 200

    },


    text: {

        textAlign: "center",
        fontFamily: "cursive",
        color: "#000000",

    },

    button: {

        marginTop: 50,
        alignSelf: "center",
        backgroundColor: "#661111",
        width: 100,
        height: 30,
        borderRadius: 50,
        justifyContent: "center"

    }

})
