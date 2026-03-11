import { Entidade } from "../model/Entidade";


export class RegrasDaEntidade{
    static listaEntidadesEstatica : Entidade[] = [];
    static contadorId = 1;

    static adicionarEntidade(nomeAdicionado : string, descricaoAdicionada : string) : Entidade[] {
        this.validarNome(nomeAdicionado, this.listaEntidadesEstatica);

        const novaEntidade : Entidade = {
            id: this.contadorId,
            nome: nomeAdicionado,
            descricao: descricaoAdicionada,
        }

        this.listaEntidadesEstatica.push(novaEntidade);
        this.contadorId++;
        return this.listaEntidadesEstatica;
    }

    static validarNome(nomeAdicionado: string, lista: Entidade[]) {
        if (nomeAdicionado.length <= 2){
            throw new Error("O nome deve ter mais de 2 caracteres");
        }
        if (lista.some(entidade => entidade.nome === nomeAdicionado)){
            throw new Error("O nome já existe na lista");
        }
    }
}