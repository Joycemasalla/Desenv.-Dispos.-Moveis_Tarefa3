import { useState } from "react";
import { RegrasDaEntidade } from "../Business/RegrasNeogcio";
import { Entidade } from "../model/Entidade";

export function ControladoraViewModel() {

    const [nome, setNome] = useState("");
    const [listaEntidades, setListaEntidades] = useState<Entidade[]>([]); //cria a lista de entidades vazia

    //clicou no botão -> ViewModel chama Business -> Business adiciona entidade -> ViewModel atualiza lista -> Aparece na tela
    function adicionar() {
        const novaEntidade = RegrasDaEntidade.adicionarEntidade(nome);

        setListaEntidades([...novaEntidade]);
    }
    
    return {
        nome,
        setNome,
        listaEntidades,
        adicionar
    };
}