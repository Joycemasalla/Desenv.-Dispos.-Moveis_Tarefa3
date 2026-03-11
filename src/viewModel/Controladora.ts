import { useState } from "react";
import { RegrasDaEntidade } from "../business/RegrasNegocio";
import { Entidade } from "../model/Entidade";

export function ControladoraViewModel() {

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [listaEntidades, setListaEntidades] = useState<Entidade[]>([]); //cria a lista de entidades vazia

    //clicou no botão -> ViewModel chama Business -> Business adiciona entidade -> ViewModel atualiza lista -> Aparece na tela
    function adicionar() {
        try {
            const novaEntidade = RegrasDaEntidade.adicionarEntidade(nome, descricao);
            setListaEntidades([...novaEntidade]);
            setNome("");
            setDescricao("");
        } catch (error: any) {
            alert(error.message);
        }
    }

    return {
        nome,
        setNome,
        descricao,
        setDescricao,
        listaEntidades,
        adicionar
    };
}