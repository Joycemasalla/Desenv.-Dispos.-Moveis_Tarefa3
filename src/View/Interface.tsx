import React from "react";
import { View, Button, TextInput, Text, FlatList, StyleSheet } from "react-native";
import { ControladoraViewModel } from "../viewModel/Controladora";

export function Interface() {
    const viewModel = ControladoraViewModel();

    //view chama funcao adicionar -> viewmodel chama business -> business cria a entifdade -> view miodel atualiza lista

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Minha Lista</Text>

            <TextInput
                placeholder="Digite uma nova entidade para a lista"
                style={styles.input}
                value={viewModel.nome}
                onChangeText={viewModel.setNome} />

            <TextInput
                placeholder="Digite a descrição da entidade"
                style={[styles.input, styles.inputLast]}
                value={viewModel.descricao}
                onChangeText={viewModel.setDescricao} />

            <View style={styles.buttonWrapper}>
                <Button
                    title="Adicionar"
                    color="#C8A2C8"
                    onPress={viewModel.adicionar}
                />
            </View>

            <FlatList
                data={viewModel.listaEntidades}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.itemTitle}>{item.nome}</Text>
                        <Text style={styles.itemDesc}>{item.descricao}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12,
        textAlign: "center",
        color: "#333",
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        backgroundColor: "#fff",
    },
    inputLast: {
        marginTop: 8,
        marginBottom: 12,
    },
    buttonWrapper: {
        marginBottom: 16,
    },
    list: {
        paddingBottom: 20,
    },
    listItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        backgroundColor: "#fff",
        borderRadius: 4,
        marginBottom: 8,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: "600",
    },
    itemDesc: {
        color: "#666",
    },
});