const bancoPreguntas = [
    // ===== SINGLETON: 4 PREGUNTAS =====
    {
        patron: "Singleton",
        semana: 6,
        pregunta:
            "Una aplicación requiere que todos sus módulos accedan a una " +
            "única instancia de configuración. ¿Qué patrón satisface este requisito?",
        opciones: [
            "Singleton",
            "Prototype",
            "Builder",
            "Composite"
        ],
        correcta: 0,
        explicacion:
            "Singleton garantiza una única instancia de una clase y " +
            "proporciona un punto de acceso a ella."
    },
    {
        patron: "Singleton",
        semana: 6,
        pregunta:
            "¿Qué combinación corresponde a una implementación básica " +
            "de Singleton con creación diferida?",
        opciones: [
            "Constructor público, atributo de instancia y método clone().",
            "Constructor privado, referencia estática privada y método estático de acceso.",
            "Constructor protegido, colección de objetos y método agregar().",
            "Interfaz de productos y varias fábricas concretas."
        ],
        correcta: 1,
        explicacion:
            "El constructor privado restringe la creación externa. " +
            "La referencia estática almacena la instancia y el método " +
            "estático la crea cuando es necesaria y permite acceder a ella."
    },
    {
        patron: "Singleton",
        semana: 6,
        pregunta:
            "Las variables a y b hacen referencia a la misma instancia " +
            "Singleton. Después de ejecutar a.setIdioma(\"Inglés\"), " +
            "¿qué devuelve b.getIdioma(), si no se realizan otras modificaciones?",
        opciones: [
            "El idioma anterior.",
            "null.",
            "Inglés.",
            "Una nueva instancia de configuración."
        ],
        correcta: 2,
        explicacion:
            "Ambas variables apuntan al mismo objeto, por lo que " +
            "acceden al mismo atributo idioma."
    },
    {
        patron: "Singleton",
        semana: 6,
        pregunta:
            "¿Cuál de las siguientes afirmaciones sobre Singleton es correcta?",
        opciones: [
            "Todos sus atributos deben declararse final.",
            "Su estado nunca puede modificarse.",
            "Todos sus métodos deben ser estáticos.",
            "La unicidad de la instancia no implica que su estado sea inmutable."
        ],
        correcta: 3,
        explicacion:
            "Singleton controla la cantidad de instancias. " +
            "La inmutabilidad es una propiedad diferente: impide " +
            "modificar el estado después de la creación."
    },

    // ===== PROTOTYPE: 4 PREGUNTAS =====
    {
        patron: "Prototype",
        semana: 6,
        pregunta:
            "Un sistema necesita generar nuevos objetos copiando otros " +
            "que ya están configurados. ¿Qué patrón resulta más apropiado?",
        opciones: [
            "Facade",
            "Prototype",
            "Singleton",
            "Adapter"
        ],
        correcta: 1,
        explicacion:
            "Prototype permite crear objetos nuevos a partir de " +
            "la copia de objetos existentes."
    },
    {
        patron: "Prototype",
        semana: 6,
        pregunta:
            "Dada la instrucción Estudiante copia = original;, " +
            "¿cuál es el resultado?",
        opciones: [
            "Se crea una copia profunda del objeto.",
            "Se invoca automáticamente el método clone().",
            "Se copia la referencia y ambas variables apuntan al mismo objeto.",
            "Se crea un objeto independiente mediante el constructor."
        ],
        correcta: 2,
        explicacion:
            "La asignación entre variables de referencia no crea " +
            "un objeto nuevo; copia la referencia existente."
    },
    {
        patron: "Prototype",
        semana: 6,
        pregunta:
            "Una clase Estudiante implementa Cloneable. ¿Qué instrucción " +
            "permite devolver una copia superficial mediante Object.clone()?",
        opciones: [
            "return (Estudiante) super.clone();",
            "return this;",
            "return instancia;",
            "return null;"
        ],
        correcta: 0,
        explicacion:
            "super.clone() crea una copia superficial. El cast " +
            "permite devolver la referencia como Estudiante."
    },
    {
        patron: "Prototype",
        semana: 6,
        pregunta:
            "Un método clone() declara throws CloneNotSupportedException. " +
            "¿Cómo debe tratar esta excepción un método que lo invoca?",
        opciones: [
            "Puede ignorarla sin capturarla ni declararla.",
            "Debe eliminar implements Cloneable.",
            "Debe convertir todos los atributos en estáticos.",
            "Debe capturarla con try-catch o declararla mediante throws."
        ],
        correcta: 3,
        explicacion:
            "CloneNotSupportedException es una excepción comprobada. " +
            "El método que la recibe debe manejarla o declararla."
    },

    // ===== FACTORY: 4 PREGUNTAS =====
    {
        patron: "Factory",
        semana: 7,
        pregunta:
            "Una clase centraliza la creación de notificaciones. Su método " +
            "estático recibe un tipo y devuelve una implementación de " +
            "Notificacion, como Correo o SMS. ¿Qué solución representa?",
        opciones: [
            "Builder",
            "Composite",
            "Factory simple",
            "Decorator"
        ],
        correcta: 2,
        explicacion:
            "Una fábrica simple selecciona e instancia un producto " +
            "concreto según los parámetros recibidos."
    },
    {
        patron: "Factory",
        semana: 7,
        pregunta:
            "NotificacionCorreo y NotificacionSMS implementan Notificacion. " +
            "¿Qué tipo de retorno permite a crearNotificacion() devolver " +
            "cualquiera de estas implementaciones mediante un contrato común?",
        opciones: [
            "Notificacion",
            "void",
            "NotificacionSMS",
            "String"
        ],
        correcta: 0,
        explicacion:
            "La interfaz Notificacion es el tipo común que permite " +
            "trabajar con las distintas implementaciones."
    },
    {
        patron: "Factory",
        semana: 7,
        pregunta:
            "En una fábrica simple de notificaciones, ¿qué componente " +
            "debe contener la selección entre new NotificacionCorreo() " +
            "y new NotificacionSMS()?",
        opciones: [
            "La interfaz del producto.",
            "El método getter del mensaje.",
            "Un decorador del producto.",
            "La clase fábrica."
        ],
        correcta: 3,
        explicacion:
            "La fábrica centraliza la selección y creación de " +
            "los productos concretos."
    },
    {
        patron: "Factory",
        semana: 7,
        pregunta:
            "Un método estático de una fábrica ejecuta new Producto() " +
            "cada vez que se invoca. ¿Cuál afirmación es correcta?",
        opciones: [
            "Devuelve siempre la misma instancia por ser estático.",
            "Crea una instancia nueva en cada invocación.",
            "Implementa Singleton automáticamente.",
            "No puede devolver objetos que implementen interfaces."
        ],
        correcta: 1,
        explicacion:
            "static permite invocar el método desde la clase; " +
            "no obliga a devolver una única instancia. Cada new " +
            "crea un objeto nuevo."
    },

    // ===== ABSTRACT FACTORY: 4 PREGUNTAS =====
    {
        patron: "Abstract Factory",
        semana: 7,
        pregunta:
            "Una aplicación debe crear sillas y sofás de estilo moderno " +
            "o victoriano, manteniendo la coherencia de estilo entre " +
            "los productos creados. ¿Qué patrón corresponde?",
        opciones: [
            "Singleton",
            "Abstract Factory",
            "Adapter",
            "Prototype"
        ],
        correcta: 1,
        explicacion:
            "Abstract Factory proporciona operaciones para crear " +
            "familias de productos relacionados sin especificar " +
            "sus clases concretas en el cliente."
    },
    {
        patron: "Abstract Factory",
        semana: 7,
        pregunta:
            "Una fábrica abstracta debe producir familias de muebles " +
            "compuestas por sillas y sofás. ¿Qué operaciones debe declarar?",
        opciones: [
            "setIdioma() y getInstancia().",
            "clonar() y equals().",
            "crearSilla() y crearSofa().",
            "enviarMensaje() e imprimir()."
        ],
        correcta: 2,
        explicacion:
            "La fábrica abstracta declara una operación para cada " +
            "tipo de producto que integra la familia."
    },
    {
        patron: "Abstract Factory",
        semana: 7,
        pregunta:
            "Un cliente utiliza MueblesFactory. Si recibe una " +
            "MueblesVictorianosFactory en lugar de una " +
            "MueblesModernosFactory, ¿qué ocurre con sus posteriores " +
            "llamadas a crearSilla() y crearSofa()?",
        opciones: [
            "Obtiene productos de la familia victoriana.",
            "Obtiene una única instancia compartida de todos los muebles.",
            "Deja de utilizar las interfaces de los productos.",
            "Transforma automáticamente los muebles creados anteriormente."
        ],
        correcta: 0,
        explicacion:
            "La fábrica concreta determina la familia de los nuevos " +
            "productos. Los objetos creados anteriormente no se modifican."
    },
    {
        patron: "Abstract Factory",
        semana: 7,
        pregunta:
            "¿Qué diferencia describe correctamente una fábrica simple " +
            "y Abstract Factory?",
        opciones: [
            "La fábrica simple no puede crear objetos.",
            "Abstract Factory tiene como objetivo clonar objetos.",
            "La fábrica simple prohíbe el uso de interfaces.",
            "La fábrica simple selecciona un producto; Abstract Factory " +
            "ofrece la creación de familias de productos relacionados."
        ],
        correcta: 3,
        explicacion:
            "Una fábrica simple centraliza la elección de un producto. " +
            "Abstract Factory proporciona una abstracción para crear " +
            "varios tipos de productos de una misma familia."
    },

    // ===== BUILDER: 3 PREGUNTAS =====
    {
        patron: "Builder",
        semana: 7,
        pregunta:
            "Un sistema construye computadoras mediante pasos como " +
            "configurar procesador, memoria y almacenamiento. Debe " +
            "permitir distintas configuraciones con el mismo proceso. " +
            "¿Qué patrón resulta más apropiado?",
        opciones: [
            "Adapter",
            "Facade",
            "Singleton",
            "Builder"
        ],
        correcta: 3,
        explicacion:
            "Builder separa el proceso de construcción de la " +
            "representación final del producto."
    },
    {
        patron: "Builder",
        semana: 7,
        pregunta:
            "En la estructura clásica de Builder, ¿cuál es la " +
            "responsabilidad del Director?",
        opciones: [
            "Clonar el producto terminado.",
            "Coordinar la secuencia de pasos mediante un builder.",
            "Garantizar una única instancia del producto.",
            "Implementar las interfaces de todos los productos."
        ],
        correcta: 1,
        explicacion:
            "El Director organiza los pasos de construcción. " +
            "El builder concreto implementa cómo se ejecuta cada paso."
    },
    {
        patron: "Builder",
        semana: 7,
        pregunta:
            "¿Cuál es la diferencia principal entre una fábrica simple " +
            "y Builder?",
        opciones: [
            "Ambos garantizan una única instancia.",
            "Builder convierte interfaces incompatibles.",
            "La fábrica selecciona qué producto crear; Builder " +
            "organiza su construcción por pasos.",
            "La fábrica añade responsabilidades envolviendo objetos."
        ],
        correcta: 2,
        explicacion:
            "La fábrica centraliza la selección y creación de un " +
            "producto concreto. Builder se centra en su construcción gradual."
    },

    // ===== ADAPTER: 4 PREGUNTAS =====
    {
        patron: "Adapter",
        semana: 8,
        pregunta:
            "Un sistema espera la operación reproducir(), pero una " +
            "biblioteca existente ofrece playFile(). Se necesita " +
            "integrarla sin modificar su código. ¿Qué patrón corresponde?",
        opciones: [
            "Adapter",
            "Facade",
            "Builder",
            "Composite"
        ],
        correcta: 0,
        explicacion:
            "Adapter traduce las operaciones de la interfaz esperada " +
            "a las operaciones que ofrece la clase existente."
    },
    {
        patron: "Adapter",
        semana: 8,
        pregunta:
            "¿Qué estructura corresponde a un Adapter basado en composición?",
        opciones: [
            "Una clase que hereda obligatoriamente del cliente.",
            "Una clase que contiene únicamente métodos estáticos.",
            "Una fábrica que crea familias de productos.",
            "Una clase que implementa la interfaz esperada y contiene " +
            "una referencia al objeto adaptado."
        ],
        correcta: 3,
        explicacion:
            "El adaptador cumple el contrato del cliente y " +
            "delega las operaciones en el objeto adaptado."
    },
    {
        patron: "Adapter",
        semana: 8,
        pregunta:
            "¿Cuál es el propósito principal de Adapter?",
        opciones: [
            "Representar jerarquías de elementos y grupos.",
            "Permitir la colaboración entre interfaces incompatibles.",
            "Crear objetos mediante la copia de otros.",
            "Garantizar que el estado de un objeto sea inmutable."
        ],
        correcta: 1,
        explicacion:
            "Adapter permite utilizar una clase existente a través " +
            "de la interfaz que necesita el cliente."
    },
    {
        patron: "Adapter",
        semana: 8,
        pregunta:
            "ReproductorAdapter implementa reproducir(String archivo) " +
            "y contiene un ReproductorExterno con playFile(String archivo). " +
            "¿Qué instrucción debe utilizar para delegar la reproducción?",
        opciones: [
            "getInstancia();",
            "new Carpeta();",
            "externo.playFile(archivo);",
            "this.clone();"
        ],
        correcta: 2,
        explicacion:
            "La operación esperada por el cliente se traduce en " +
            "una llamada al método del objeto adaptado."
    },

    // ===== FACADE: 3 PREGUNTAS =====
    {
        patron: "Facade",
        semana: 8,
        pregunta:
            "Una operación realizarCompra() coordina las clases " +
            "Inventario, Pago y Envio para simplificar su uso desde " +
            "el cliente. ¿Qué patrón representa?",
        opciones: [
            "Prototype",
            "Decorator",
            "Facade",
            "Abstract Factory"
        ],
        correcta: 2,
        explicacion:
            "Facade proporciona una interfaz sencilla para " +
            "operaciones que involucran varias clases de un subsistema."
    },
    {
        patron: "Facade",
        semana: 8,
        pregunta:
            "¿Cuál es la responsabilidad principal de CompraFacade " +
            "en un sistema con Inventario, Pago y Envio?",
        opciones: [
            "Coordinar las operaciones de las clases del subsistema.",
            "Clonar cada clase del subsistema.",
            "Garantizar una única instancia de cada producto.",
            "Añadir extras mediante una cadena de envoltorios."
        ],
        correcta: 0,
        explicacion:
            "La fachada simplifica el acceso al subsistema " +
            "delegando y coordinando sus operaciones."
    },
    {
        patron: "Facade",
        semana: 8,
        pregunta:
            "¿Qué afirmación distingue correctamente Facade de Adapter?",
        opciones: [
            "Facade clona objetos y Adapter los construye por pasos.",
            "Ambos garantizan una única instancia.",
            "Adapter requiere siempre más clases que Facade.",
            "Facade simplifica el uso de un subsistema; Adapter " +
            "hace compatible una interfaz con otra."
        ],
        correcta: 3,
        explicacion:
            "Facade se centra en simplificar el acceso. " +
            "Adapter se centra en resolver incompatibilidades de interfaz."
    },

    // ===== DECORATOR: 4 PREGUNTAS =====
    {
        patron: "Decorator",
        semana: 9,
        pregunta:
            "Una cafetería necesita combinar extras opcionales como " +
            "leche y chocolate, agregando precio y descripción sin crear " +
            "una clase por cada combinación. ¿Qué patrón corresponde?",
        opciones: [
            "Decorator",
            "Prototype",
            "Abstract Factory",
            "Singleton"
        ],
        correcta: 0,
        explicacion:
            "Decorator permite añadir responsabilidades mediante " +
            "objetos envoltorio que pueden combinarse."
    },
    {
        patron: "Decorator",
        semana: 9,
        pregunta:
            "¿Qué relación caracteriza al decorador base en una " +
            "estructura Decorator?",
        opciones: [
            "Hereda exclusivamente del componente concreto.",
            "Crea todos los componentes mediante un método estático.",
            "Contiene obligatoriamente una lista de componentes.",
            "Cumple la interfaz del componente y contiene una " +
            "referencia a otro componente."
        ],
        correcta: 3,
        explicacion:
            "Al compartir la interfaz y contener otro componente, " +
            "puede envolver tanto al objeto básico como a otro decorador."
    },
    {
        patron: "Decorator",
        semana: 9,
        pregunta:
            "Cafe.getPrecio() devuelve 5. ConLeche añade 2 al precio " +
            "del objeto envuelto y ConChocolate añade 3. ¿Qué devuelve " +
            "new ConChocolate(new ConLeche(new Cafe())).getPrecio()?",
        opciones: [
            "5",
            "10",
            "3",
            "8"
        ],
        correcta: 1,
        explicacion:
            "Los precios se acumulan mediante la delegación: " +
            "5 del café, 2 de la leche y 3 del chocolate."
    },
    {
        patron: "Decorator",
        semana: 9,
        pregunta:
            "BebidaDecorator.getPrecio() devuelve el precio de la bebida " +
            "envuelta. ¿Qué debe devolver ConLeche.getPrecio() para " +
            "agregar un costo de 2?",
        opciones: [
            "return 2;",
            "return 0;",
            "return super.getPrecio() + 2;",
            "return new Cafe().getPrecio();"
        ],
        correcta: 2,
        explicacion:
            "El decorador conserva el precio del objeto envuelto " +
            "y añade el costo de su responsabilidad adicional."
    },

    // ===== COMPOSITE: 3 PREGUNTAS =====
    {
        patron: "Composite",
        semana: 9,
        pregunta:
            "Un sistema administra archivos y carpetas. Cada carpeta " +
            "puede contener archivos y otras carpetas, y ambos tipos " +
            "deben consultarse mediante una operación común. " +
            "¿Qué patrón corresponde?",
        opciones: [
            "Composite",
            "Factory",
            "Adapter",
            "Builder"
        ],
        correcta: 0,
        explicacion:
            "Composite permite representar estructuras de árbol " +
            "y tratar elementos individuales y grupos de forma uniforme."
    },
    {
        patron: "Composite",
        semana: 9,
        pregunta:
            "Archivo y Carpeta implementan la interfaz Elemento. " +
            "¿Qué tipo de colección permite a Carpeta almacenar " +
            "archivos y subcarpetas mediante esa interfaz?",
        opciones: [
            "List<Archivo>",
            "List<String>",
            "List<Main>",
            "List<Elemento>"
        ],
        correcta: 3,
        explicacion:
            "La interfaz Elemento es el tipo común de archivos " +
            "y carpetas; permite almacenar ambos en la misma colección."
    },
    {
        patron: "Composite",
        semana: 9,
        pregunta:
            "En una estructura Composite de archivos y carpetas, " +
            "¿cómo debe calcular una carpeta su tamaño total?",
        opciones: [
            "Devolviendo siempre cero.",
            "Sumando el resultado de getTamano() de cada elemento contenido.",
            "Clonando cada archivo antes de consultarlo.",
            "Consultando únicamente el primer archivo."
        ],
        correcta: 1,
        explicacion:
            "El compuesto delega en sus hijos y acumula sus resultados. " +
            "Las subcarpetas aplican el mismo procedimiento recursivamente."
    }
];

// ===== ELEMENTOS DE LA PÁGINA =====

const inicio = document.getElementById("inicio");
const examen = document.getElementById("examen");
const formulario = document.getElementById("formulario");
const contenedorPreguntas = document.getElementById("preguntas");
const resultado = document.getElementById("resultado");

const botonComenzar = document.getElementById("btn-comenzar");
const botonEntregar = document.getElementById("btn-entregar");

const progresoTexto = document.getElementById("progreso-texto");
const progreso = document.getElementById("progreso");
const aviso = document.getElementById("aviso");
const tiempo = document.getElementById("tiempo");

// ===== ESTADO DEL SIMULACRO =====

let preguntasActuales = [];
let respuestas = [];
let entregado = false;
let temporizador = null;
let momentoInicio = 0;

// Mezcla una copia del arreglo sin modificar el original.
function mezclar(arreglo) {
    const copia = [...arreglo];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}

function comenzarSimulacro() {
    preguntasActuales = mezclar(bancoPreguntas)
        .slice(0, 4)
        .map(pregunta => ({
            ...pregunta,
            opcionesMezcladas: mezclar(
                pregunta.opciones.map((texto, indice) => ({
                    texto,
                    esCorrecta: indice === pregunta.correcta
                }))
            )
        }));

    respuestas = Array(preguntasActuales.length).fill(null);
    entregado = false;

    inicio.hidden = true;
    examen.hidden = false;
    resultado.hidden = true;
    resultado.replaceChildren();

    botonEntregar.disabled = false;
    aviso.textContent = "";

    dibujarPreguntas();
    actualizarProgreso();
    iniciarTiempo();

    examen.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function dibujarPreguntas() {
    contenedorPreguntas.replaceChildren();

    preguntasActuales.forEach((pregunta, indicePregunta) => {
        const articulo = document.createElement("article");
        articulo.className = "pregunta";

        const numero = document.createElement("span");
        numero.className = "numero-pregunta";
        numero.textContent =
            `PREGUNTA ${indicePregunta + 1} · 2 PUNTOS`;

        const titulo = document.createElement("h2");
        titulo.id = `titulo-pregunta-${indicePregunta}`;
        titulo.textContent = pregunta.pregunta;

        const grupo = document.createElement("fieldset");
        grupo.setAttribute("aria-labelledby", titulo.id);

        const leyenda = document.createElement("legend");
        leyenda.textContent = "Seleccione una alternativa:";
        grupo.appendChild(leyenda);

        pregunta.opcionesMezcladas.forEach((opcion, indiceOpcion) => {
            const etiqueta = document.createElement("label");
            etiqueta.className = "opcion";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `pregunta-${indicePregunta}`;
            radio.value = indiceOpcion;
            radio.checked =
                respuestas[indicePregunta] === indiceOpcion;
            radio.disabled = entregado;

            radio.addEventListener("change", () => {
                respuestas[indicePregunta] = indiceOpcion;
                aviso.textContent = "";
                actualizarProgreso();
            });

            const texto = document.createElement("span");
            const letra = String.fromCharCode(65 + indiceOpcion);

            texto.textContent = `${letra}) ${opcion.texto}`;

            if (entregado) {
                if (opcion.esCorrecta) {
                    etiqueta.classList.add("correcta");
                    texto.textContent += " ✓ Correcta";
                } else if (
                    respuestas[indicePregunta] === indiceOpcion
                ) {
                    etiqueta.classList.add("incorrecta");
                    texto.textContent += " ✗ Tu respuesta";
                }
            }

            etiqueta.append(radio, texto);
            grupo.appendChild(etiqueta);
        });

        articulo.append(numero, titulo, grupo);

        if (entregado) {
            agregarExplicacion(
                articulo,
                pregunta,
                indicePregunta
            );
        }

        contenedorPreguntas.appendChild(articulo);
    });
}

function agregarExplicacion(articulo, pregunta, indice) {
    const opcionElegida =
        pregunta.opcionesMezcladas[respuestas[indice]];

    const bloque = document.createElement("div");
    bloque.className = "explicacion";

    const estado = document.createElement("strong");
    estado.textContent = opcionElegida.esCorrecta
        ? "Respuesta correcta · +2 puntos"
        : "Respuesta incorrecta · 0 puntos";

    const explicacion = document.createElement("p");
    explicacion.textContent = pregunta.explicacion;

    const tema = document.createElement("div");
    tema.className = "tema";
    tema.textContent =
        `Semana ${pregunta.semana} · ${pregunta.patron}`;

    bloque.append(estado, explicacion, tema);
    articulo.appendChild(bloque);
}

function actualizarProgreso() {
    const cantidad = respuestas.filter(
        respuesta => respuesta !== null
    ).length;

    progreso.max = preguntasActuales.length;
    progreso.value = cantidad;

    progresoTexto.textContent =
        `${cantidad} de ${preguntasActuales.length} respondidas`;
}

function iniciarTiempo() {
    clearInterval(temporizador);
    momentoInicio = Date.now();
    tiempo.textContent = "Tiempo: 00:00";

    temporizador = setInterval(() => {
        const segundosTotales = Math.floor(
            (Date.now() - momentoInicio) / 1000
        );

        const minutos = String(
            Math.floor(segundosTotales / 60)
        ).padStart(2, "0");

        const segundos = String(
            segundosTotales % 60
        ).padStart(2, "0");

        tiempo.textContent =
            `Tiempo: ${minutos}:${segundos}`;
    }, 1000);
}

function entregarSimulacro(evento) {
    evento.preventDefault();

    if (entregado) {
        return;
    }

    const primeraSinResponder = respuestas.findIndex(
        respuesta => respuesta === null
    );

    if (primeraSinResponder !== -1) {
        aviso.textContent =
            "Responde las cuatro preguntas antes de entregar.";

        const preguntaPendiente =
            contenedorPreguntas.children[primeraSinResponder];

        preguntaPendiente.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        preguntaPendiente.querySelector("input").focus({
            preventScroll: true
        });

        return;
    }

    entregado = true;
    botonEntregar.disabled = true;
    aviso.textContent = "";

    clearInterval(temporizador);

    let aciertos = 0;
    const temasFallados = new Set();

    preguntasActuales.forEach((pregunta, indice) => {
        const elegida =
            pregunta.opcionesMezcladas[respuestas[indice]];

        if (elegida.esCorrecta) {
            aciertos++;
        } else {
            temasFallados.add(pregunta.patron);
        }
    });

    dibujarPreguntas();
    mostrarResultado(aciertos, temasFallados);
}

function mostrarResultado(aciertos, temasFallados) {
    resultado.replaceChildren();
    resultado.hidden = false;

    const titulo = document.createElement("h2");
    titulo.textContent = "Resultado del simulacro";

    const puntaje = document.createElement("div");
    puntaje.className = "puntaje";
    puntaje.textContent = `${aciertos * 2} / 8`;

    const detalle = document.createElement("p");
    detalle.textContent =
        `Respondiste correctamente ${aciertos} de 4 preguntas.`;

    const consejo = document.createElement("p");

    if (aciertos === 4) {
        consejo.textContent =
            "¡Excelente! Realiza otro intento para practicar más preguntas.";
    } else {
        consejo.textContent =
            "Temas que conviene reforzar: " +
            [...temasFallados].join(", ") +
            ". Revisa las explicaciones de las respuestas.";
    }

    const nota = document.createElement("p");
    nota.textContent =
        "Este puntaje corresponde únicamente a la parte teórica, " +
        "no a la nota total del examen.";

    const nuevoIntento = document.createElement("button");
    nuevoIntento.type = "button";
    nuevoIntento.textContent = "Hacer otro simulacro";
    nuevoIntento.addEventListener("click", comenzarSimulacro);

    resultado.append(
        titulo,
        puntaje,
        detalle,
        consejo,
        nota,
        nuevoIntento
    );

    resultado.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// ===== EVENTOS =====

botonComenzar.addEventListener("click", comenzarSimulacro);
formulario.addEventListener("submit", entregarSimulacro);