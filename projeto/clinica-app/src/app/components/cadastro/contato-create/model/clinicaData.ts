export interface Especialidade {
    id_especialidade: number;
    especialidade: string;

}

export interface Medico{

    id_medico: number;
	nome: string;
	crm: string;
	endereco: string;
	bairro: string;
	cep: string;
	cidade: string;
	estado: string;
	email: string;
	id_especialidade: Especialidade;

}
export interface Usuario{

    id_usuario: number;
    email: string;
    senha: string;

}