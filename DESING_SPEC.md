# DESIGN_SPEC.md

# Especificación visual — Catálogo de productos

## 1. Dirección visual

La página debe transmitir una estética:

* Femenina
* Elegante
* Cálida
* Delicada
* Moderna
* Premium
* Limpia
* Profesional
* Natural

El diseño está dirigido principalmente a un público femenino.

La identidad visual debe construirse alrededor de una **paleta crema cálida**, tomando como color principal:

```text
#FBF3E4
```

La combinación debe sentirse como una marca premium de belleza, bienestar y cuidado personal.

La estética debe ser sofisticada y delicada, evitando que el diseño parezca una tienda genérica.

### Concepto visual

La sensación general debe recordar a:

* Packaging premium
* Papelería elegante
* Cosmética de alta gama
* Tonos naturales
* Materiales cálidos
* Crema y champagne
* Detalles dorados sutiles

La página debe sentirse **femenina sin depender de utilizar demasiado rosa**.

---

# 2. Paleta de colores

## Color principal — Crema

```text
#FBF3E4
```

Este es el color principal de la identidad.

Utilizarlo principalmente para:

* fondos
* hero
* secciones
* tarjetas destacadas
* elementos visuales

---

## Crema claro

```text
#FFF9F0
```

Utilizarlo para:

* fondos secundarios
* tarjetas
* formularios
* áreas de contenido

Debe generar una diferencia muy sutil respecto al fondo principal.

---

## Crema profundo

```text
#F3E5CF
```

Utilizarlo para:

* bordes
* separadores
* elementos seleccionados
* fondos secundarios
* pequeños detalles

---

## Dorado champagne

```text
#C6A15B
```

Utilizarlo como color de acento.

Utilizarlo para:

* iconos
* líneas decorativas
* pequeños detalles
* badges
* estados destacados
* elementos premium

El dorado debe utilizarse con moderación.

---

## Dorado suave

```text
#D9BE82
```

Puede utilizarse para:

* hover
* pequeños detalles
* bordes destacados
* iconos

---

## Rosa empolvado

El rosa será únicamente un **acento secundario**, no el color dominante.

```text
#D9B6B0
```

Utilizarlo únicamente cuando ayude a aportar una sensación más femenina.

Por ejemplo:

* pequeños badges
* detalles
* estados seleccionados
* decoración

---

## Marrón oscuro

```text
#3B302A
```

Utilizar para:

* títulos
* texto principal
* navegación
* precios
* botones importantes

---

## Marrón secundario

```text
#766960
```

Utilizar para:

* descripciones
* texto secundario
* información auxiliar

---

## Bordes

```text
#E9DCC8
```

---

# 3. Distribución de colores

La interfaz debe mantener una distribución visual equilibrada:

```text
Crema / blanco       → 65-75%
Marrones             → 10-15%
Dorado               → 5-8%
Rosa empolvado       → 3-5%
Otros detalles       → mínimo
```

El crema es el protagonista.

El dorado aporta elegancia.

El rosa solamente aporta un pequeño toque femenino.

---

# 4. Regla principal de color

El diseño **NO debe verse rosa**.

Debe verse:

> **Crema + champagne + dorado + pequeños acentos rosados.**

El color `#FBF3E4` debe ser reconocible como parte fundamental de la identidad visual.

---

# 5. Tipografía

Utilizar máximo dos familias tipográficas.

### Títulos

Preferentemente:

```text
Playfair Display
```

o una serif elegante equivalente.

Debe utilizarse para:

* títulos principales
* nombres de secciones
* frases destacadas
* elementos de marca

### Texto general

Preferentemente:

```text
Montserrat
```

o:

```text
Poppins
```

Utilizar para:

* navegación
* descripciones
* botones
* precios
* formularios
* información general

La combinación debe transmitir:

```text
Elegancia → Serif
Modernidad → Sans-serif
```

---

# 6. Header / menú principal

El header debe ser elegante y limpio.

Estructura:

```text
┌──────────────────────────────────────────────┐
│ LOGO       Inicio  Productos  Nosotros   🛒 │
└──────────────────────────────────────────────┘
```

El logo será proporcionado posteriormente.

Crear un espacio claramente definido para:

```text
assets/images/logo.png
```

No crear un logo ficticio complejo.

Mientras no exista el logo definitivo, utilizar un placeholder sencillo.

---

## Header desktop

Características:

* fondo crema claro o blanco cálido
* navegación centrada
* logo claramente visible
* carrito siempre accesible
* altura moderada
* bordes o sombra extremadamente sutil
* suficiente espacio alrededor

El elemento activo del menú puede utilizar:

```text
#C6A15B
```

o:

```text
#D9B6B0
```

---

## Header móvil

Utilizar:

```text
[☰]       LOGO       [🛒]
```

El menú debe convertirse en un drawer o menú desplegable.

El carrito debe mantenerse siempre accesible.

---

# 7. Hero

El hero debe ser una de las secciones visualmente más importantes.

Utilizar el color:

```text
#FBF3E4
```

como fondo principal.

Estructura:

```text
        PEQUEÑO TEXTO

       TÍTULO PRINCIPAL

    Descripción breve y elegante

       [ VER PRODUCTOS ]

                         Imagen
```

El contenido debe tener mucho espacio negativo.

---

# 8. Imagen del hero

La imagen debe tener una estética:

* femenina
* elegante
* natural
* cálida
* premium

Puede mostrar:

* productos
* composición de productos
* modelo
* fotografía lifestyle
* elementos relacionados con la marca

La fotografía debería complementar los tonos crema.

Evitar imágenes con colores excesivamente saturados.

---

# 9. Elementos decorativos

Se pueden utilizar formas suaves y minimalistas.

Por ejemplo:

* círculos
* líneas finas
* formas orgánicas
* pequeños detalles dorados
* texturas sutiles

No utilizar:

* glitter
* partículas
* brillos exagerados
* grandes ornamentos
* elementos 3D innecesarios

La decoración debe sentirse casi editorial.

---

# 10. Categorías

Crear una sección sencilla:

```text
Nuestros productos

[ Todos ] [ Categoría 1 ] [ Categoría 2 ] [ Categoría 3 ]
```

Los botones pueden utilizar fondo:

```text
#FFF9F0
```

con borde:

```text
#E9DCC8
```

La categoría activa:

```text
background: #D9B6B0;
color: #3B302A;
```

o una combinación crema + dorado.

---

# 11. Catálogo de productos

El catálogo debe ser el protagonista funcional.

Desktop:

```text
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│  Imagen  │ │  Imagen  │ │  Imagen  │ │  Imagen  │
│ Producto │ │ Producto │ │ Producto │ │ Producto │
│ $100     │ │ $90      │ │ $120     │ │ $80      │
│ [Agregar]│ │ [Agregar]│ │ [Agregar]│ │ [Agregar]│
└──────────┘ └──────────┘ └──────────┘ └──────────┘
```

Tablet:

```text
2-3 columnas
```

Móvil:

```text
2 columnas
```

Siempre que el espacio lo permita.

---

# 12. Tarjetas de producto

Las tarjetas deben sentirse como pequeños bloques de packaging premium.

Características:

* fondo crema claro
* bordes suaves
* esquinas ligeramente redondeadas
* imagen protagonista
* sombras muy suaves
* información clara

Cada tarjeta debe mostrar:

* imagen
* nombre
* categoría
* precio
* precio anterior
* descuento
* botón de agregar

Ejemplo:

```text
┌─────────────────────┐
│                     │
│       IMAGEN        │
│                     │
├─────────────────────┤
│ Producto A          │
│ Descripción breve   │
│                     │
│ $90    $100         │
│                     │
│ [ Agregar ]         │
└─────────────────────┘
```

---

# 13. Imágenes de productos

Mantener proporciones consistentes.

Preferentemente:

```text
4:5
```

o:

```text
1:1
```

No deformar las imágenes.

Utilizar:

```css
object-fit: cover;
```

cuando la fotografía lo permita.

Para productos que necesiten mostrar el envase completo:

```css
object-fit: contain;
```

---

# 14. Botones

Los botones deben tener una estética elegante.

Botón principal:

```text
[ AGREGAR AL CARRITO ]
```

Puede utilizar:

```text
background: #3B302A;
color: #FFF9F0;
```

Esto crea un contraste premium.

Alternativamente, utilizar crema + borde dorado para botones secundarios.

### Hover

Utilizar:

```text
#C6A15B
```

de manera sutil.

Evitar llenar toda la interfaz de botones dorados.

---

# 15. Carrito

El carrito debe ser siempre accesible desde el header.

Ejemplo:

```text
🛒 3
```

Mostrar un contador con el número de productos.

Al hacer clic, abrir un drawer lateral.

```text
┌─────────────────────────────┐
│ Tu carrito              ✕   │
├─────────────────────────────┤
│ Producto A                  │
│ $100 × 2              $200  │
│                             │
│ Producto B                  │
│ $50 × 1               $50   │
├─────────────────────────────┤
│ Subtotal              $250  │
│ Cupón                  -$10 │
│ Total                  $240 │
│                             │
│ [ Continuar pedido ]        │
└─────────────────────────────┘
```

---

# 16. Cupón

El área de cupón debe ser discreta y elegante.

```text
¿Tienes un cupón?

[ Código del cupón       ] [Aplicar]
```

Cupón válido:

```text
✓ Cupón NOMBREPEPS aplicado

Ahorras $10
```

Utilizar pequeños detalles dorados.

Cupón inválido:

```text
El cupón ingresado no es válido.
```

El mensaje debe ser claro pero visualmente discreto.

---

# 17. Checkout

El checkout debe utilizar una superficie clara sobre el fondo crema.

Estructura:

```text
Información del pedido

Nombre
[________________]

Teléfono
[________________]

Ciudad
[________________]

Dirección / referencia
[________________]

Observaciones
[________________]


Resumen

Subtotal       $150
Descuento      -$10
Total          $140

[ PEDIR POR WHATSAPP ]
```

Utilizar bordes suaves y suficiente espacio.

---

# 18. Botón de WhatsApp

El botón final debe destacar claramente.

```text
[ 💬 Pedir por WhatsApp ]
```

Debe integrarse con la estética general sin perder el reconocimiento de la acción.

No utilizar un verde excesivamente dominante en toda la interfaz.

El verde debe aparecer únicamente como referencia visual del servicio cuando sea necesario.

---

# 19. Descuentos

Mostrar los descuentos de forma elegante.

Ejemplo:

```text
$90
$100
```

y:

```text
AHORRAS $10
```

El badge puede utilizar:

```text
#D9B6B0
```

o:

```text
#C6A15B
```

---

# 20. Sección "Cómo comprar"

Crear una sección sencilla para explicar el proceso.

```text
01
Elige tus productos

02
Agrega al carrito

03
Envía tu pedido por WhatsApp

04
Coordina el pago
```

Debe ser visualmente ligera.

Puede utilizar pequeños iconos lineales.

---

# 21. Sección de confianza

Agregar únicamente si la página necesita reforzar confianza.

Ejemplo:

```text
✓ Atención personalizada

✓ Pedido fácil por WhatsApp

✓ Información clara

✓ Pago coordinado directamente
```

No inventar certificaciones, garantías o beneficios que no hayan sido proporcionados.

---

# 22. Footer

El footer debe ser pequeño y elegante.

No crear un footer gigantesco.

Estructura:

```text
────────────────────────────────────

              LOGO

Productos
Contacto
WhatsApp

────────────────────────────────────

© 2026 Nombre de la marca

Desarrollado por kobaia.dev
```

Utilizar un fondo ligeramente más oscuro que el fondo principal.

Por ejemplo:

```text
#F3E5CF
```

El texto puede utilizar:

```text
#3B302A
```

El enlace:

```text
kobaia.dev
```

debe ser clickeable.

No inventar información adicional.

---

# 23. Footer móvil

En móvil:

```text
LOGO

Productos
Contacto
WhatsApp

© 2026 Nombre de la marca

Desarrollado por kobaia.dev
```

Centrado y con suficiente espacio.

---

# 24. Espaciado

El diseño debe utilizar bastante espacio negativo.

No saturar las secciones.

Los elementos deben respirar.

Utilizar un sistema de espaciado consistente.

Las secciones principales deben tener aproximadamente:

```text
64px - 100px
```

de separación vertical en desktop.

En móvil:

```text
48px - 72px
```

---

# 25. Bordes

Utilizar:

```text
#E9DCC8
```

para bordes.

Las tarjetas pueden utilizar:

```text
border-radius: 16px;
```

o valores similares.

Evitar esquinas excesivamente redondeadas que hagan parecer la interfaz infantil.

---

# 26. Sombras

Las sombras deben ser muy suaves.

Ejemplo conceptual:

```text
0 8px 30px rgba(...)
```

con muy poca opacidad.

No utilizar sombras negras fuertes.

La profundidad debe ser casi imperceptible.

---

# 27. Animaciones

Utilizar únicamente microinteracciones.

Permitido:

* hover
* fade
* transición de botones
* animación del contador del carrito
* feedback al agregar producto
* apertura suave del carrito

Evitar:

* partículas
* parallax exagerado
* elementos flotando constantemente
* animaciones permanentes
* efectos de lujo exagerados

---

# 28. Responsive

### Desktop

Elegante y espacioso.

### Tablet

Reducir columnas y espacios.

### Móvil

Priorizar:

1. Logo
2. Menú
3. Carrito
4. Productos
5. Precio
6. Agregar al carrito
7. Checkout
8. WhatsApp

La experiencia debe poder utilizarse cómodamente con una sola mano.

---

# 29. Accesibilidad visual

La estética crema no debe comprometer la legibilidad.

No utilizar texto claro sobre fondos claros.

Evitar combinaciones como:

```text
#D9B6B0 sobre #FFF9F0
```

para textos pequeños.

El texto principal debe utilizar:

```text
#3B302A
```

para mantener buen contraste.

---

# 30. Sensación de marca

El resultado debe sentirse como:

```text
Elegante
Femenino
Cálido
Premium
Natural
Minimalista
Moderno
Delicado
```

La combinación visual principal debe ser:

```text
#FBF3E4
      +
Crema claro
      +
Dorado champagne
      +
Marrón oscuro
      +
Rosa empolvado muy sutil
```

---

# 31. Regla visual principal

Cuando exista duda entre:

**más decoración**

o:

**más espacio limpio**

elegir:

**más espacio limpio.**

Cuando exista duda entre:

**más colores**

o:

**paleta controlada**

elegir:

**paleta controlada.**

Cuando exista duda entre:

**rosa**

o:

**crema**

elegir:

**crema.**

Cuando exista duda entre:

**efecto llamativo**

o:

**elegancia**

elegir:

**elegancia.**

---

# 32. Resultado esperado

La página final debe transmitir la sensación de una **marca femenina premium**, utilizando como identidad principal el color crema `#FBF3E4`.

Debe parecer una tienda cuidadosamente diseñada, con una estética inspirada en:

* cosmética premium
* packaging elegante
* tonos champagne
* materiales naturales
* papelería fina
* fotografía editorial

El resultado debe ser sofisticado, cálido y moderno.

**El crema es el protagonista. El dorado aporta lujo. El rosa solamente aporta un pequeño toque femenino.**

La interfaz debe priorizar siempre la experiencia de compra y la presentación de los productos.
