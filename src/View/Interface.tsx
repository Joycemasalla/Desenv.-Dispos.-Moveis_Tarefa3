import { View, Button, TextInput, Text } from "react-native";
import { ControladoraViewModel } from "../viewModel/Controladora";
import { FlatList } from "react-native";

export function Interface() {
    const viewModel = ControladoraViewModel();

    //view chama funcao adicionar -> viewmodel chama business -> business cria a entifdade -> view miodel atualiza lista

    return (
        <View style={{ flex: 1, backgroundColor: "blue" }}>
            <TextInput
                placeholder="Digite uma nova entidade para a lista"
                value={viewModel.nome}
                onChangeText={viewModel.setNome} />
            <Button
                title="Adicionar"
                onPress={viewModel.adicionar}
            />

            <FlatList
                data={viewModel.listaEntidades}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}>
                        <Text style={{ fontSize: 18 }}>{item.nome}</Text>
                        <Text style={{ color: "#666" }}>{item.descricao}</Text>
                    </View>
                )}
            />
        </View>
    )
}