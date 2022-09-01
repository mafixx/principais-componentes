import { Button, ToastAndroid, View } from "react-native";

export function ToastComponent(){
    return (
        <View>
            <Button title="Abrir Toast 01" onPress={() => ToastAndroid.show("Olá mundo", ToastAndroid.LONG)}/>
            <Button title="Abrir Toast 02" onPress={() => ToastAndroid.showWithGravity("Olá mundo", ToastAndroid.LONG, ToastAndroid.TOP)}/>
        </View>
    );
}