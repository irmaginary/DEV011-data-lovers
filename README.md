# Data Lovers de Rick & Morty (Dupla DL9: Amparo Madeth & Irma Solano)

## Índice

* [1. Presentación del producto](#1-presentación-del-producto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Diseño de la interfaz](#3-diseño-de-la-interfaz)
* [4. Comentarios sobre la usabilidad](#4-comentarios-sobre-la-usabilidad)


***

## 1. Presentación del producto

Este proyecto es una página web que permite visualizar un conjunto de set de datos para facilitar a las usuarias buscar la información que les interesa a través de un filtrado y ordenado de la data. Adicionalmente contiene información estadística sobre los datos de la base, que permite conocer cuántos personajes con género masculino, femenino e indefinido hay en la serie. Es interesante notar que la mayoría de estos son del género masculino.

Nuestra web trabaja con la data presentada en las siguientes fuentes:
* [Rick and Morty](src/data/rickandmorty/rickandmorty.json).
  Este set nos proporciona la lista de los personajes de la serie Rick and
  Morty. [API Rick and Morty](https://rickandmortyapi.com).
  - [Investigación con seguidores de Rick and Morty](src/data/rickandmorty/README.md)


## 2. Historias de usuario

Para organizar el proyecto nos basamos en Historias de Usuario que nos permitieran cumplir con las espectativas de usabilidad de los destinatarios finales. Estas fueron las siguientes:

* Como usuaria, cuando acceda a la página, debería ver una **lista de datos en tarjetas**:
  - Una página donde se muestren **tarjetas con la información** que requiera cada personaje
* Como usuaria necesito ver la información de los personajes en **tarjetas con imagen e información**
* Como usuaria deberia encontrar **elementos de navegación** para acceder a los datos:
  - **Botones** que me permitan **filtrar, ordenar y limpiar la información**
  - Un header que contenga 2 filtros para información por categoría y que permitan ordenar Ascendente o descendentemente la info
* Como usuaria me gustaria que tenga un **diseño responsivo** que se adapte a pantallas móviles

Cada una de estas Historias de Usuario se convirtieron en accionables para desarrollar en cada sprint del proyecto. Estas las fuimos monitoreando en un tablero de Miró: (https://miro.com/app/board/uXjVMlscEy4=/?share_link_id=130406911244) 


## 3. Diseño de la interfaz

Con base en las historias anteriores fuimos bocetando la forma en la que queríamos ver la información. Desarrollamos algunos modelos de baja y media fidelidad.

* Este fue el primero en Lucind: (https://lucid.app/lucidspark/033ad340-42ba-4cbc-9fdc-c55bc2e61a33/edit?invitationId=inv_f5cdaed4-a7c5-4f2f-9fdf-3012f87d22c4&page=0_0#)
* Este fue el segundo en Figma, que consideró la vista en un dispositivo móvil: (https://www.figma.com/file/JSupFpK72AmIzDm9ob5Ln0/Data-Lovers%2FR%26M-prototype?type=design&node-id=0%3A1&mode=design&t=kywJaAoO7IKULlME-1)

Con estos dos modelos comenzamos a trabajar y fuimos modificando el aspecto y los colores de acuerdo al desarrollo en código.


## 4. Comentarios sobre la usabilidad

Algunos de los botones y elementos del header que consideramos al inicio los removimos, pues la página quedó en una sóla vista que despliega toda la información.
Sobre los comentarios y la retroalimentación que nos dieron algunas compañeras, sugirieron que se utilizaran colores que hiceran más contraste con las imágenes y los colores usados en el arte de la serie, que suelen ser vibrantes y fluorescentes. Esto supuso un reto, sobretodo para lograr la legibilidad de títulos y elementos de la página.








