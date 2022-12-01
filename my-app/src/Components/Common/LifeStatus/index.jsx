import React from "react";
import { 
    View,
    StyleSheet    
} from "react-native";

import LottieView from "lottie-react-native";

export default function LifeStatus(){

/*
    Status:
        100 - Máximo
        50 - Médio
        25 - Baixo
        00 - Curto (Game over)
        No robô, nós temos primeiro felicidade e depois saúde xx-xx
*/

return(
    <View style={styles.container}>
        <LottieView source={require("../../../assets/education/education-1.json")}
        autoPlay={true}
        loop={true}
        style={styles.educacaoAnimacao}
        />

        <LottieView source={require("../../../assets/money/money-100.json")}
        autoPlay={true}
        loop={true}
        style={styles.financasAnimacao}
        />

        <LottieView source={require("../../../assets/robot/robot-100-100.json")}
        autoPlay={true}
        loop={true} 
        style={styles.roboAnimacao}
        />

    </View>
);

}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
    },
    roboAnimacao: {
        width: 190,
        marginTop: 30,
        marginLeft: 25,
    },
    educacaoAnimacao: {
        width: 100,
        marginTop: 50,
        marginLeft: 5,
        position: "absolute",

    },
    financasAnimacao: {
        width: 100,
        marginTop: 50,
        marginLeft: 95,
        position: "absolute",
        
    },

});