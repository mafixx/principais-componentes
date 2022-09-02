import { useState } from "react";
import { RefreshControl, ScrollView, Text } from "react-native";

export function RefreshComponent(){
    const [refreshing, setRefresh] = useState(false);
    function onRefresh(){
        setRefresh(true);
        // await axios.get("htps://servidor:8080/v2/clientes")
        setTimeout(() => {
            setRefresh(false);
        }, 2000)
    }

    return(
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}   
                />
            }
        >
            <Text>Puxe para baixo para atualizar</Text>        
        </ScrollView>
    );
}