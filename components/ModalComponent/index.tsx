import { useState } from "react";
import { Button, Modal, Text, TextInput, View } from "react-native";
import { ModalExemplo } from "./ModalExemplo";

export function ModalComponent(){
    const [isVisible, setIsVisible] = useState(false);

    function openModal(){
        setIsVisible(true);
    }
    
    return(
            <View>
                {isVisible && <ModalExemplo closeModal={() => setIsVisible(false)}/>}
                <Button onPress={openModal} title="Abrir modal" />
            </View>
        
    );
}

