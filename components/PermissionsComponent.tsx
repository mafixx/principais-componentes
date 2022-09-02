import { Button, Image, PermissionsAndroid, StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import * as ImageManipulator from "expo-image-manipulator";
import { useState } from "react";

export function PermissionComponent (){
    const [selectedImage, setSelectedImage] = useState<{localURI:string}>(null!);

    async function openImagePicker(){
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(permissionResult.granted === false){
            alert("Permissão para acessar a galera não foi concedida.")
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync();

        if(pickerResult.cancelled){
            return;
        }
        setSelectedImage({ localURI: pickerResult.uri});
    }

    async function requestCameraPermission(){
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: "Permissão da Câmera",
                message: "Necessita sua permissão",
                buttonNeutral: "Me pergunta depois",
                buttonPositive: "Ok",
                buttonNegative: "Cancelar"
            }
        );
            if(granted === PermissionsAndroid.RESULTS.GRANTED){
                console.log("Permissão concedida");
            } else {
                console.log("Permissão negada!");
            }
    
    }    
    async function openShareDialog(){
        const imageTemp = await ImageManipulator.manipulateAsync(selectedImage.localURI);
        await Sharing.shareAsync(imageTemp.uri);

    }
    return(
        <View>
            {/* <Text>Testar permissão</Text> */}
            {/* <Button title={"Solicitar permissão para acessar a câmera"} onPress={requestCameraPermission}/> */}
            {
                selectedImage?
            <Image
                source={{uri:selectedImage.localURI}} style={styles.image}/> :
            <Image source={require("../assets/icon.png")} style={styles.image} />
            }
            <Button title={"Solicitar permissão para abrir a galera de imagens"} onPress={openImagePicker}/>
            <Button title="Compartilhar Imagem" onPress={openShareDialog} disabled={!selectedImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200,
        resizeMode: "contain",
        alignItems: "center",
        justifyContent: "center"
    }
})