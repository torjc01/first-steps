# Deploy da aplicaçao

Criar um arquivo .env no diretorio raiz da aplicacao, e incluir as variaveis de ambiente para acesso ao banco de dados. 


# Database 

**Minimo**
codigo*, titulo, subtitulo, tituloOriginal, autores, siglaISOIdioma, edicao, cidade, ano, genero, editora, estado, isActive

**Obra**
codigo, obra, titulo, subtitulo, tituloOriginal, subtituloOriginal, codigoStatus, timestampStatus, responsavelStatus, 

**Autor**
codigo, nome, sobrenome, codigoPais, anoNascimento, biografia

**Idioma**
siglaISO, nome, nomeEn, nomeFr, nomeOriginal

**IndiceCatalogoSistematico**
codigo, indiceCatalogo

**Pais**
codigo, siglaISO, nome, nomeEn, nomeFr, nomeOriginal

**Editora** 
codigo, nome, endereco, cidade, codigoPais, site

**Exemplar**
codigoObra, edicao, ano, ISBN, codigoEditora, paginas, codigoTipoEncadernacao, codigoStatus, precoCompra, codigoMoedaCompra, valor, codigoMoedaValor


Referências
https://ead.urcamp.edu.br/blog/dicas-tcc-referencia-abnt


select a.nome, a.sobrenome, b.nome  from autor a, pais b where a.codigoPais = b.codigo order by b.nome, a.nome, a.sobrenome;

select codigo, titulo, autores, genero, ano from livro where genero like "%religiao%" order by ano;

