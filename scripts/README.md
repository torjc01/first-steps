# Scripts

## Procedimento para backup 

Para execuçao do backup, executar o utilitario `mysqldump`: 

```
mysqldump --databases test > dump-yyyymmddhhmmss.sql
```

Ref: https://dev.mysql.com/doc/refman/8.0/en/mysqldump-sql-format.html

Para recarregar o dump criado com o método acima, executar o comando: 

```
mysql < dump-yyyymmddhhmmss.sql
```

Ref: https://dev.mysql.com/doc/refman/8.0/en/reloading-sql-format-dumps.html


## Script `backup.sh`


O script de backup depende de um segredo, que sera guardado em um arquivo externo, que sera protegido e guardado dos olhares indevidos. 

- Crie o arquivo para a guarda do segredo, e mude os seus flags de segurança para 600, para permitir a leitura e escrita somente ao seu proprietario:

```
touch env.sh
chmod 600 env.sh
```

- Edite o arquivo `env.sh` e inclua a linha seguinte, informando seu usuario e sua senha apos o sinal de igual: 

```bash
export MYSQL_USER=
export MYSQL_PASSWORD=
```

- No arquivo de script, antes de necessitar utilizar as variaveis acima, faça o script reconhecer os valores, com o comando seguinte: 

```bash
source env.sh
```

- Finalmente, adicione o nome do arquivo de segredos `env.sh` ao arquivo `.gitignore` para evitar que os segredos sejam expostos no site de gestao de codigo fonte