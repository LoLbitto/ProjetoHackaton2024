CREATE DATABASE db_hackaton;

USE db_hackaton;

CREATE TABLE tbPessoa(
rg_Pessoa BIGINT,
nome_Pessoa VARCHAR(120),
dataNascimento_Pessoa DATE,
cpf_Pessoa BIGINT,
rendaFamiliarBruta_Pessoa DECIMAL(10,2),
qtdDependentes_Pessoa INT,

CONSTRAINT pk_tbPessoa PRIMARY KEY (cpf_Pessoa)
);