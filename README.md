# SendMeal - FakeAPI

_API Rest basada en JSON-Server para complemetar el laboratorio de DAM(Diseño de Aplicaciones Mobiles)_

## Comenzando :rocket:

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo._

Mira **Instalación** para conocer como desplegar el proyecto.

### Pre-requisitos :scroll:

_Realizar un git clone del proyecto._

_Tener [NodeJS](https://nodejs.org/es/download/) instalado._


## Despliegue :gift:

_Los siguientes pasos son para desplegar el proyecto_

```
git clone https://github.com/repo/url.git

cd repoName

npm start
```

## Comandos :pushpin:
`npm start` - Realiza la instalación de paquetes necesarios y levanta el servidor


`npm create-meals` - 
Realiza la creación inicial de la base de datos, con 30 platos y 0 pedidos por default.
###### (:warning: Si ya tienes platos o pedidos guardados, te los va a borrar.)

### Estructura de los datos

```
#Platos
{
    id
    titulo
    descripcion
    precio
    calorias
}

#Pedidos
{
    id
    platosId: [platoId <, platoId, ...>]
    ...
}

```
