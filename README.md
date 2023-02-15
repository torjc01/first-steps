# Deploy da aplicação

Criar um arquivo .env no diretorio raiz da aplicação, e incluir as variáveis de ambiente para acesso ao banco de dados. 

**.env**  
```
# Variables d'environnement
MODE=DEV
SECRET=

# Variables d'environnement de la bd MySQL
MYSQL_HOST=localhost
MYSQL_PORT=3307
MYSQL_ROOT_PASSWORD=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=

# Variables d'environnement de l'outil pgadmin
PGADMIN_DEFAULT_EMAIL=
PGADMIN_DEFAULT_PASSWORD=
```

Em seguida, faça a instalação da aplicação:

```bash
$ npm install
```

Execução da aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Database 

**Minimo**
&codigo, titulo, subtitulo, tituloOriginal, autores, siglaISOIdioma, edicao, cidade, ano, genero, editora, estado, isActive

**Obra**
&codigo, titulo, subtitulo, tituloOriginal, subtituloOriginal, codigoStatus, timestampStatus, responsavelStatus, 

**Autor**
&codigo, nome, sobrenome, siglaISOPais, anoNascimento, biografia, codigoStatus, dataCriacao, dataModificacao, versao

Adicionar: nomeCompleto, titulosHonorificos


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

# Backups 

Para realizar o backup da base de dados mysql, a partir da linha de comando. 

**Backup**

docker exec {nome_container} /usr/bin/mysqldump -u root --password={pass} {nome_database} > {nome_arquivo_backup.sql}

**Restore** 

cat {nome_arquivo_backup.sql} | docker exec -i {nome_container} /usr/bin/mysql -u root --password={pass} ${nome_database}

**Copia**

docker cp {nome_container}:{/file/path/container} {/host/path/target}

**Executar linha de comando docker**

docker exec -it {nome_container} {/bin/bash}

# Referências

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

