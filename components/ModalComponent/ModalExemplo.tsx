import { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Props ={
    closeModal: VoidFunction;
};

export function ModalExemplo(props: Props){
    const [text, setText] = useState("");

    return(
        <Modal
            visible={true}
            transparent={true}
            animationType="fade"
            onRequestClose={props.closeModal}
        >
            <Pressable style={styles.centeredView} onPress={props.closeModal}>
            <View style={styles.modalView}>
                <Text>Texto do Modal: {text}</Text>
                <TextInput onChangeText={setText} selectionColor="blue" style={styles.input}/>
                <Button onPress={props.closeModal} title="Fechar modal" />
            </View>
            </Pressable>
        </Modal>

    );
}

const styles = StyleSheet.create({
    centeredView:{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#000000cc"
    },
    modalView:{
        backgroundColor: "#fff",
        margin: 20,
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    input: {
        borderColor: "#000",
        borderWidth: 1,
        width: "100%",
        height: 30,
        fontSize: 16,
        marginVertical: 10,
        paddingHorizontal: 10,
    }
});

