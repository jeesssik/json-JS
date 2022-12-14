
# Cómo leer un archivo JSON desde javascript

Existe un método estandar que podemos usar para leer un archivo JSON 
(ya sea uno local o uno subido a un servidor) y este es la API Fetch.

Por ejemplo, supongamos que tenemos un archivo local llamado
data.json que contiene la siguiente data json.





```javascript
{
    "id": 1,
    "title": "Hello World",
    "completed": false
}
```


Podemos leer este archivo con JavaScript usando el método Fetch:

```javascript
fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
```

En el código anterior ya podemos leer el archivo JSON.
Pero si lo ejecutamos en el explorador, nos va a dar
error de CORS porque este archivo no está en un servidor.

Para solucionar esto, vamos a usar Live Server desde nuestro
IDE para evitar este error.

En el caso de que el archivo JSON se encuentre en un serviror
remoto. La misma sintáxis nos va a funcionar.

```
fetch('https://server.com/data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

```


## Authors

- [@Jesica Rodríguez](https://www.github.com/jeesssik)

