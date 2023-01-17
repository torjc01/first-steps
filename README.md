# Deploy da aplicaçao

Criar um arquivo .env no diretorio raiz da aplicacao, e incluir as variaveis de ambiente para acesso ao banco de dados. 


# Database 

**Minimo**
&codigo, titulo, subtitulo, tituloOriginal, autores, siglaISOIdioma, edicao, cidade, ano, genero, editora, estado, isActive

**Obra**
&codigo, titulo, subtitulo, tituloOriginal, subtituloOriginal, codigoStatus, timestampStatus, responsavelStatus, 

**Autor**
&codigo, nome, sobrenome, siglaISOPais, anoNascimento, biografia, codigoStatus, dataCriacao, dataModificacao, versao

**Idioma**
&siglaISO, nome, nomeEn, nomeFr, nomeOriginal, codigoStatus, dataCriacao, dataModificacao, versao

**IndiceCatalogoSistematico**
&codigo, indiceCatalogo

**Pais**
&siglaISO, nome, nomeEn, nomeFr, nomeOriginal, codigoStatus, dataCriacao, dataModificacao, versao

**Editora** 
&codigo, nome, endereco, cidade, siglaISOPais, site, codigoStatus, dataCriacao, dataModificacao, versao

**Exemplar**
&codigo, codigoObra, numeroSequencialExemplar, edicao, ano, ISBN, codigoEditora, paginas, codigoTipoEncadernacao, codigoStatus, codigoMoedaCompra, precoCompra, codigoMoedaValor, valor, codigoStatus, dataCriacao, dataModificacao, versao

**Status**
&codigo, descricaoStatus

**User**
&codigo, nome, sobrenome, email, password, codigoStatus, dataCriacao, dataModificacao, versao

**TipoEncadernacao** 
codigoTipoEncadernacao, descricaoTipoEncadernacao






Referências

/present-proof/records/

https://ead.urcamp.edu.br/blog/dicas-tcc-referencia-abnt

https://auth0.com/blog/modern-full-stack-development-with-nestjs-react-typescript-and-mongodb-part-2/

https://blog.logrocket.com/full-stack-app-tutorial-nestjs-react/#defining-the-schema

https://blog.logrocket.com/containerized-development-nestjs-docker/

https://www.tomray.dev/nestjs-docker-production


https://www.nxp.com/docs/en/user-guide/141520.pdf

https://forum.arduino.cc/t/need-help-getting-pn532-module-v3-to-detect-p2p/349577




select a.nome, a.sobrenome, b.nome  from autor a, pais b where a.codigoPais = b.codigo order by b.nome, a.nome, a.sobrenome;

select codigo, titulo, autores, genero, ano from livro where genero like "%religiao%" order by ano;

