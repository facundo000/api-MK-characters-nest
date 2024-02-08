<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar el repositorio

1. Clonar repositorio.
2. Ejecutar:
```
npm install
```
3. Tener instalado Nest CLI/.
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos.
```
docker-compose up -d
```

5. Clonar el archivo __.example.env__ y renombrar la copia a __.env__

6. Llenar las variables de entorno definidas en el __.env__

7. Ejecutar la aplicacion en dev:
```
npm run start:dev
```

8. Reconstruir base de datos con la semilla SEED (caso de no tener nada en BD)
```
http://localhost:3000/api/v1/seed
```

Datos extraídos de la API: https://www.giantbomb.com/api/

# Buil de Producción
1. Crear el archivo ```.env.prod ```
2. Llenar las variables de entorno
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
4. Correr la imagen de Docker
```
 docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
 ```

## Stack usado

1. MongoDB
2. NestJS
3. Docker