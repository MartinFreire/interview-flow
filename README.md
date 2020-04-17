# Interview Test - App del Clima

## Resumen

Aplicación del clima desarrollada en React y NestJs, ambas utilizando Typescript.

NestJs es un framework para backend que utiliza la filosofía de Angular (no AngularJs) para ordenar el codigo en forma de módulos, controladores y servicios para que interactúen en forma ordenada aprovechando los decoradores de Typescript. 

El frontend tiene como diseño una página principal que muestra en un cuadro el reporte del clima actual y en una tabla el reporte de los proximos dias, tal cual se recibe de la API de openweathermap.org

### Consideraciones Pendientes

#### En el backend faltaria:
Agrupar en carpetas o módulos lo referente a la api de openweathermap.org, por una cuestión de orden. Queda pendiente al ser una app de pocos archivos.
 
Realizar pruebas de los endpoint con argumentos, para ello es necesario agregar más ejemplos en el mock.

#### En el frontend faltaria:

Realizar pruebas sobre los componentes que dependen de las llamadas a servidor

Realizar pruebas sobre los componentes CityPage, Current y Frontend a fin de evaluar si muestran la información recibida correctamente.

