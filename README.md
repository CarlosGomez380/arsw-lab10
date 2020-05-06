# Arsw-lab10

Para este informe haremos la comparación del mismo caso en diferentes condiciones. Para esto tener en cuenta que el caso de prueba fue con el numero 80.000 al cual se le va a calcular su serie de fibonacci.

## Condición número 1

En este primer ejercicio, calcularemos la serie de fibonacci del caso ya dicho por primera vez sin habar calculado ningún número antes.

![](https://github.com/CarlosGomez380/arsw-lab10/blob/master/Images/80000%20case.PNG)

![](https://github.com/CarlosGomez380/arsw-lab10/blob/master/Images/80000ResponseError.PNG)

![](https://github.com/CarlosGomez380/arsw-lab10/blob/master/Images/80000CauseError.PNG)

### Conclusión 

Como se pudo observar en las imagenes, la respuesta es error 500, debido a que demoró 30 minutos tratando de calcular la respuesta y hubo un tipo de time out por parte del host.

## Condición número 2

Para éste, se fueron calculando y guardando valores de 5.000 en 5.000 hasta llegar al 80.000 que es el valor que quermos comparar.

![](https://github.com/CarlosGomez380/arsw-lab10/blob/master/Images/80000%20case.PNG)

![](https://github.com/CarlosGomez380/arsw-lab10/blob/master/Images/80000Load.PNG)

### Conclusión 

Se puede ver y analizar que el tiempo se reduce considerablemente, ya no son 30 minutos sino 30 segundos lo que se demora para calcular la serie de fibonacci. Esto gracias a que al hacer el calculo del valor 80.000 ya se encontraban guardados los valores del 0 hasta 75.000 permitiendo que solo sea necesario calcular los últimos 5.000 numeros. Por tanto, la suposición propuesta en clase es correcta, si se quieren hacer peticiones que consuman demasiados recursos (como en la primera condición) es mejor hacer casos de pre carga que permirtan facilitar el proceso y reducir tiempos.

## Condición número 3

Por último, "calcularemos" ,o en otras palabras, consultaremos el valor del caso propuesto. Con el fin de ver cuanto puede tardar y cual será la diferencia entre los tiempos una vez ya se tiene guardado el valor en la base de datos Redis.

![](https://github.com/CarlosGomez380/arsw-lab10/blob/master/Images/80000%20case.PNG)

![](https://github.com/CarlosGomez380/arsw-lab10/blob/master/Images/80000Cache.PNG)

### Conclusión

Se demuestra que una vez calculado el valor, no importa que tan grande sea, a la hora de volver a calcular o consultar los tiempos serán considerablemente reducidos. Ahora el tiempo que demoró nuestra petición POST no fueron minutos ni segundo fueron milisegundos. Un tiempo importante si se ve en problemas de mayor rango. 

# Aplicando coleccion de 10 casos 

Para este nuevo experimento, se creo una colección con 10 diferentes casos que van sumando de 10.000 en 10.000. Esta colección se corre en dos consolas de manera concurrente y gracias a Newman. Se resalta que antes de iniciar este experimento se borraron los valores y llaves de la base de datos Redis.

![](https://github.com/CarlosGomez380/arsw-lab10/blob/master/Images/NewmanCases.PNG)

![](https://github.com/CarlosGomez380/arsw-lab10/blob/master/Images/NewmanResponses.PNG)

Los tiempos son variables, pero extrañamente se calcularon rápidamente cada caso, como suposición, se debe a que como las dos consolas trabajan para la misma base de datos fueron almacenando y utilizando valores conjuntamente 
