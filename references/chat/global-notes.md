# chat/ — Global Notes

## Header

- El header tiene fondo con gradiente/sombra negro que se extiende hacia abajo
- Efecto no visible cuando fondo del chat es negro puro
- Se hace visible cuando hay contenido de otro color debajo (ej: burbuja del usuario al scrollear)
- Propósito: separación visual suave entre header y contenido

## Iconografía

- Todos los nombres de íconos mencionados en los flow.md corresponden a la librería **Lucide React Native** (lucide-react-native)
- Cuando se especifica un nombre de ícono (ej: "ellipsis-vertical", "message-circle-off", "book-open"), usar EXACTAMENTE ese ícono de Lucide
- Cuando se especifica otra librería explícitamente (ej: "web" de MaterialCommunityIcons), usar esa librería
- Cuando NO se especifica nombre de ícono, el agente debe buscar en Lucide el ícono que más se asimile al del screenshot de referencia

## Componentes Reutilizables

### Feature Mode (Search, Study, Edit, Create Image, Deep Research, Agent, Shopping, Quizzes, Instant, Thinking)
- Chip en input con label + ícono "x"
- Suggestion texts debajo del input (cantidad variable)
- Placeholder customizado según feature
- Animación: slide-up al activar, slide-down al desactivar

### Suggestion Texts
- Layout: ícono + texto por línea con dividers
- Cantidad variable (3-4)
- Tappeable → autocompleta input y/o envía mensaje

### Auth Buttons Loading Pattern
- Al presionar auth buttons ("Continue", "Continue with Google", etc.)
- Texto cambia a gris + loading indicator gris aparece al lado del texto
- El texto no se mueve de posición
- Patrón reutilizable en cualquier lugar de la app donde aparezcan estos botones

### Feature Chips en Input
- Cuando se selecciona una feature del Attachments BottomSheet que agrega un chip al input, el placeholder del TextInput siempre cambia al título exacto de la feature seleccionada (ej: "Create image", "Deep research", "Quizzes", etc.)

## Texto "Thinking" / "Searching..." durante carga de IA

**Descripción:** Después del loading indicator circular blanco, y antes de que comience a aparecer la respuesta, se muestra un texto indicando que la IA está procesando:
- En modo normal: "Thinking..."
- En modo Search: "Searching..."

**Animación del texto:** Efecto shimmer — un gradiente de color más claro se desplaza horizontalmente de izquierda a derecha a través del texto en loop continuo, creando un efecto de "brillo" o "onda". La animación se detiene cuando la respuesta comienza a generarse.

**Implementación recomendada:** Usar `react-native-shimmer-text` o similar con `react-native-reanimated`.

**Aplicar en:** TODAS las respuestas de la IA (tanto modo normal como Search mode, tanto UnAuth como Auth).

**Variaciones por modelo:**
- **Normal/Auto:** Duración estándar del shimmer
- **Instant:** NO mostrar shimmer (saltar directamente a response)
- **Thinking:** Shimmer dura ~3s más de lo normal
- **GPT-5.1 Instant:** NO mostrar shimmer ni loading
- **GPT-5.1 Thinking:** Shimmer dura ~10s más de lo normal
- **GPT-4o:** Saltar loading circle, ir directo a shimmer

## Popups Globales

- Todos los popups duran 3s y desaparecen automáticamente
- Cierre manual disponible con ícono "x"
- Posición: full bottom encima del input
- Componente reutilizable (solo cambia texto)

## Loading Indicators en Botones

**Posición:** Al lado derecho del texto del botón

**Colores:**
- **Blanco:** Acciones normales (Reset link, Save, Start group chat)
- **Rojo:** Acciones destructivas (Delete link, Delete group, Leave group, Remove member)

**Duración:** ~2s antes de completar la acción

## Modales de Confirmación (Destructivos)

- Animación: Fade in/out
- Cierre: Tap en backdrop o botón "Cancel"
- Botón destructivo: Siempre en rojo ("Leave", "Delete", "Remove")

## Report Flow (Componente Reutilizable)

- 3 steps: categoría → subcategoría → TextInput
- Mismo componente para: Report Profile, Report Conversation
- Solo cambia título/descripción
- Submit se habilita al escribir 1+ caracteres (BG blanco, texto negro)
