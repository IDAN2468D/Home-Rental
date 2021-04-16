import React from 'react';
import { ScrollView, StyleSheet, Text, ImageBackground, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

function DetailsScreen({ navigation, route }) {
    const item = route.params;
    return (
        <ScrollView
            contentContainerStyle={{
                backgroundColor: COLORS.white,
                paddingBottom: 20,
            }}
        >
            <StatusBar barStyle="light-content" translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground style={style.headerImage} source={item.image}>
                <View style={style.header}>
                    <Icon
                        name="arrow-back-ios"
                        size={28} color={COLORS.white}
                        onPress={navigation.goBack}
                    />
                    <Icon
                        name="bookmark-border"
                        size={28} color={COLORS.white}
                    />
                </View>
            </ImageBackground>
            <View>
                <View style={style.iconContainer}>
                    <Icon name="place" size={28} color={COLORS.white} />
                </View>
                <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
                    <Text style={{ fontSize: 12, fontWeight: "400" }}>{item.location}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    headerImage: {
        height: 400,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        overflow: "hidden"
    },
    header: {
        marginTop: 60,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        justifyContent: "space-between",
    },
    iconContainer: {
        position: "absolute",
        height: 60,
        width: 60,
        backgroundColor: COLORS.primary,
        top: -30,
        right: 20,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default DetailsScreen
