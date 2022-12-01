import React from "react";
import { 
    View,
    Text,
    Image,
    ScrollView
} from "react-native";

export default function Start(){

    return(
        <ScrollView showVerticalScrollIndicator={false}>
            <View>
                <Image source={require("../../assets/icons/logo3.png")} />

                <Text>
                    Vamos transformar sua vida {"/n"} em um jogo, buscando sempre {"/n"} o mehor nivel.
                </Text>
            </View>
        </ScrollView>
    )
}