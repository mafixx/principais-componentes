import { Dimensions, Image, Platform, Text, View } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

export function DimensionsComponent(){
    return(
    <View>
        <Text>A altura da tela é: {screenHeight} px.</Text>
        <Text>A largura da tela é: {screenWidth} px.</Text>
        {
            Platform.OS === "ios" ?
            <Text>Esse app está sendo executado no iOS</Text> :
            <Text>Esse app está sendo executado no Android</Text>
        }
        <Image
            source={require("../assets/icon.png")}
            style={{width: screenWidth, height: 200}}  
        />
    </View>
    );
}