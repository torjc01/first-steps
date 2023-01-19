
- Créer le nouveau projet nestjs 

```bash
	nest new exp-port-e-backend
	cd exp-port-e-backend
```

- Installer les dépendences: 

```bash
	npm install --save @nestjs/typeorm typeorm mysql2 @nestjs/swagger
```
- Changer le fichier main.js pour ajouter swagger 

```ts
	const config = new DocumentBuilder()
	    .setTitle('Expérimentation Port-e')
	    .setDescription('API pour soutenir l application port-e ')
	    .setVersion('1.0')
	    .addTag('port-e')
	    .build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);
```

- Créer repertoire utils et fichier constants.ts

```bash
	export const secret = 's038-pwpppwpeok-dffMjfjriru44030423-edmmfvnvdmjrp4l4k';
	export const MYSQL_USER='juliozohar'
	export const MYSQL_PASSWORD='Achtung@2023'
	export const MYSQL_DATABASE='porte'
```

- Adicionar constants.ts au `.gitignore`

- Créer la database `porte` dans l'application de l'outil d'admin.

```sql
	CREATE DATABASE PORTE; 
	USE PORTE; 
```

- Modifier le fichier `src/app.module.ts` et ajouter `imports forRoot`: 

```ts
	imports: [
		TypeOrmModule.forRoot({
		type: 'mysql',
		host: 'localhost',
		port: 3306,
		username: MYSQL_USER,
		password: MYSQL_PASSWORD,
		database: MYSQL_DATABASE,
		entities: [],
		synchronize: true,
		autoLoadEntities: true,
		}),
	],
```

- Créer un nouveau resource

```
	nest g resource <nom resource>
```

	- modifier entity: mettre les décorations et champs de table 
	
	- modifier controller: adapter le nom de la route; harmoniser le nom de la clé primaire avec celui de l'entity;
	
	- modifier module: adicionar imports (TypeOrmModule.forFeature) et exports 
	
	- modifier service: implementer les métodes de la bd; ajouter le constructor qu'il faut

```ts

  constructor(@InjectRepository(Personne)
	private personneRepository: Repository<Personne>
  ){}

  create(createPersonneDto: CreatePersonneDto) {
    return this.personneRepository.save(createPersonneDto);
  }

  findAll() {
    return this.personneRepository.find(); 
  }

  findOne(codePersonne: number) {
    return this.personneRepository.findOneBy({codePersonne});
  }

  update(codePersonne: number, updatePersonneDto: UpdatePersonneDto) {
    return this.personneRepository.update(codePersonne, updatePersonneDto); 
  }

  remove(codePersonne: number) {
    return this.personneRepository.delete(codePersonne);
  }
```

## HTTP

Ajouter fichier de requêtes http: 

```http
#/*
#* Copyright (c) 2022 Gouvernement du Québec
#* Auteur: Julio Cesar Torres 
#* SPDX-License-Identifier: LiLiQ-R-v.1.1
#* License-Filename: /LICENSE
#*/
##############################################################
# Requetes http backend NestJs
##############################################################
# Avant usage, il faut renseigner les champs X-API-Key des 
# endpoints qui seront utilisés. 
# 
### Définition des variables globales 
@hostname = http://localhost:3000


# ============================================================================
#    Entity: personne
#    Endpoint: /personne
# ============================================================================

####
#### Selects all personne 
#### 
GET {{hostname}}/personne HTTP/1.1
X-API-Key: 
Content-Type: application/json


####
#### Create a new personne 
#### 
POST {{hostname}}/personne HTTP/1.1
X-API-Key: 
Content-Type: application/json

[
    {  
		"nom" : "Torres", 
		"prenom" : "Julio", 
		"direction": "Direction de l'Innovation", 
		"poste" : "Dev fullstack" 
    }
]


####
#### Create a new batch of personne 
#### 
POST {{hostname}}/personne HTTP/1.1
X-API-Key: 
Content-Type: application/json

[
    {  
		"nom" : "", 
		"prenom" : "", 
		"direction": "", 
		"poste" : "" 
    }  
]

```

