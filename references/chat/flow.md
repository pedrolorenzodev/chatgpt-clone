# chat/ — Flow Documentation

---

## SECCIÓN A: PANTALLAS UNAUTH

---

## 01_new-chat-empty-unauth.png

**Acción previa:** Tap "Continue" desde auth/01

**Animación de entrada:** Navegación estándar
**Comportamiento del keyboard:** Se abre automáticamente con slide-up smooth

**Acciones de los botones:**
- **Sidebar button (top-left)** → Abre sidebar con slide-in desde izquierda → sidebar/01
- **Log in button (top-right)** → Abre Auth BottomSheet → auth/02
- **Suggestion buttons** → Autocompleta input, expande suggestions → ver screenshot 02
- **+ button** → Abre Attachments BottomSheet → ver screenshot 03
- **Send button** → Envía mensaje (disabled si input vacío) → ver screenshot 06
- **Mic button** → Abre Auth BottomSheet (unauth) → auth/02

**Relación:** Pantalla principal del chat (unauth)

---

## 02_tap-any-suggestion-btn_expanded-suggestions.png

**Acción previa:** Tap en cualquier suggestion button (Brainstorm, Get advice, Code, Summarize)

**Animación:** Suggestion texts aparecen con slide-up debajo del input

**Comportamiento:**
- Input se autocompleta con texto acorde a la categoría
- Aparecen 4 suggestion texts (ícono + texto)

**Acciones:**
- **Tap en suggestion text** → Autocompleta input con ese texto y envía mensaje → screenshot 06

**Relación:** Desde screenshot 01 → Al enviar va a screenshot 06

---

## 03_tap-plus-btn_attachments-bottomsheet.png

**Acción previa:** Tap en botón "+" a la izquierda del input

**Animación de entrada:** Slide-up desde abajo
**Animación de salida:** Slide-down
**Comportamiento:** Keyboard se cierra al abrir

**Acciones de los botones (usuario NO autenticado):**
- **Camera** → Cierra BottomSheet, abre Auth BottomSheet → auth/02
- **Photos** → Cierra BottomSheet, abre Auth BottomSheet → auth/02
- **Files** → Cierra BottomSheet, abre Auth BottomSheet → auth/02
- **Web search** → Cierra BottomSheet, activa Search mode → screenshot 04
- **Study and learn** → Cierra BottomSheet, activa Study mode → screenshot 05
- **Explore apps** → Cierra BottomSheet, abre Auth BottomSheet → auth/02

**Nota:** "Explore apps" en la app real tiene bug para unauth (loading infinito). Implementamos comportamiento consistente con otras features que requieren login.

**Cierre:** Tap en backdrop o swipe down

**Relación:** Desde screenshot 01 → Vuelve a 01 al cerrar

---

## 04_tap-web-search_search-mode.png

**Acción previa:** Tap en "Web search" desde Attachments BottomSheet (03)

**Animación de entrada:**
- Chip "Search" aparece en input con slide-up
- Input se expande para acomodar chip
- Suggestion texts (trending topics) aparecen con slide-up
- Keyboard se abre

**Acciones:**
- **Chip "x" button** → Desactiva Search mode con slide-down proporcional
- **Tap en suggestion text** → Autocompleta y envía mensaje → screenshot 06
- **Send button** → Envía mensaje en modo Search → screenshot 06 → screenshot 08

**Relación:** Desde 03 → Al enviar va a 06 → respuesta en 08

---

## 05_tap-study-and-learn_study-mode.png

**Acción previa:** Tap en "Study and learn" desde Attachments BottomSheet (03)

**Animación:** Mismo patrón que Search mode (04)

**Diferencias con Search mode:**
- Chip dice "Study" en vez de "Search"
- 3 suggestion texts en vez de 4
- Placeholder diferente

**Relación:** Desde 03 → Al enviar va a 06 → 07

---

## 06_message-sent_ai-loading.png

**Acción previa:** Tap send button con texto en input

**Animaciones y cambios inmediatos:**
- Keyboard se cierra
- Input se vacía, placeholder vuelve a "Ask ChatGPT"
- Send button → Stop button (cambio INMEDIATO, sin animación)
- Mensaje del usuario aparece como burbuja a la derecha
- Indicador de loading del AI aparece a la izquierda

**Animación del loading:** 
1. Círculo blanco con animación de "respiración" (scale pulsing, ~1.2s ciclo)
2. Luego aparece texto "Thinking..." con efecto shimmer (ver Global Notes)

**Acciones:**
- **Stop button** → Detiene generación del AI, vuelve a send button

**Relación:** Desde 01/02/04/05 → Cuando AI termina va a 07 u 08

---

## 07_ai-response-complete.png

**Acción previa:** AI terminó de generar respuesta (desde 06, modo normal)

**Animación de streaming:** Ver specs/animations/streaming-text.md (CRÍTICO — animación principal de la app)
**Transición loading → streaming:** Texto "Thinking..." desaparece, streaming comienza inmediatamente

**Al completar streaming:**
- Stop button → Send button (cambio INMEDIATO)
- Action bar aparece con fade-in (300ms) debajo del texto

**Acciones del Action bar (UNAUTH — 3 iconos):**
- **Copy** → Copia respuesta al portapapeles
- **Speaker** → Reproduce audio de la respuesta
- **Regenerate** → Regenera respuesta → vuelve a 06

**Relación:** Desde 06 (modo normal)

---

## 08_ai-response-search-mode.png

**Acción previa:** AI terminó de generar respuesta (desde 06, con Search mode activo o AI decidió buscar)

**Diferencias con 07:**
- Respuesta soporta Markdown rico (headers, bullets, bold)
- Citation chips inline al final de párrafos
- Action bar incluye botón "Sources" adicional

**Acciones:**
- **Action bar (copy, speaker, regenerate)** → Igual que 07
- **Sources button** → Abre Sources BottomSheet → screenshot 09
- **Citation chip** → Abre Sources BottomSheet → screenshot 09

**Relación:** Desde 06 (modo Search)

---

## 09_sources-bottomsheet.png

**Acción previa:** Tap en "Sources" button o citation chip (desde 08)

**Animación de entrada:** Slide-up estándar
**Animación de salida:** Slide-down

**Comportamiento:** Lista scrollable de fuentes citadas

**Acciones:**
- **Tap en fuente** → Abre URL en navegador externo
- **Swipe down / tap backdrop** → Cierra BottomSheet

**Relación:** Desde 08 → Vuelve a 08 al cerrar

---

## 10_longpress-user-message_context-menu.png

**Acción previa:** Long press en burbuja del mensaje del usuario

**Animación de entrada:** Fade-in básico
**Animación de salida:** Fade-out básico

**Acciones de los botones:**
- **Copy** → Copia mensaje al portapapeles, cierra modal
- **Select Text** → Abre pantalla de selección → screenshot 11
- **Edit Message** → Activa modo edición → screenshot 12

**Cierre del modal:** Tap en cualquier opción o tap fuera del modal

**Nota:** Long press en respuesta del AI NO muestra este context menu. Solo activa selector de texto nativo del sistema (comportamiento estándar de texto seleccionable).

**Relación:** Desde 07 u 08 (cualquier chat con mensaje del usuario visible)

---

## 11_select-text-screen.png

**Acción previa:** Tap en "Select Text" desde context menu (10)

**Tipo de pantalla:** Fullscreen modal (no navegación tradicional)

**Animación de entrada:** Fade-in rápido (se superpone toda la pantalla)
**Animación de salida:** Fade-out

**Comportamiento:** Texto del mensaje en solo lectura, usuario puede seleccionar/copiar con gestos nativos

**Acciones:**
- **Back button** → Vuelve al chat con fade-out

**Relación:** Desde 10 → Vuelve a 07 u 08

---

## 12_edit-message-mode.png

**Acción previa:** Tap en "Edit Message" desde context menu (10)

**Animación de entrada:**
- Auto-scroll hacia el final del chat
- Chip "Editing message" aparece en input (slide-up)
- Warning container aparece debajo de última respuesta AI (fade-in)
- Keyboard se abre automáticamente

**Comportamiento:** Input se autocompleta con texto original del mensaje

**Acciones:**
- **Chip "x" button** → Cancela edición, vuelve a estado normal (slide-down del chip)
- **Send button** → Envía mensaje editado, reinicia conversación desde ese punto → 06

**Relación:** Desde 10 → Al enviar va a 06 → 07/08

---

## SECCIÓN B: PANTALLAS AUTH

---

## 01_new-chat-empty-auth.png

**Acción previa:** Auth exitoso (desde auth/04) o tap "New chat" en sidebar

**Animación de entrada:** Misma que chat/01 unauth
**Comportamiento del keyboard:** Se abre automáticamente con slide-up smooth

**Diferencias con chat/01 unauth:**
- Header: "ChatGPT" ahora es un botón accionable (no solo texto)
- Header: "Log in" reemplazado por 2 nuevos íconos (Add Person + Bubble)
- Input: botón send reemplazado por botón Talk (ícono de ondas de audio)
- Suggestion buttons: cambian los 4 textos/íconos (Create image, Brainstorm, Help me write, Get advice)
- Texto central: "What can I help with?" (en unauth no hay texto central)

**Acciones de los botones:**
- **Sidebar button (top-left)** → Abre sidebar → sidebar/01 (auth)
- **"ChatGPT" button (top-left)** → Cierra keyboard, abre Attachments BottomSheet → chat/03 (auth)
- **Add Person icon (top-right)** → Cierra keyboard, abre GroupChat BottomSheet → screenshot 13
- **Bubble icon (top-right)** → Aplica estado "Hide chat" → screenshot 14
- **Suggestion buttons** → Autocompleta input, expande suggestions → chat/02
- **+ button** → Abre Attachments BottomSheet → chat/03 (auth)
- **Mic button** → Funcional (auth)
- **Talk button (full right en input)** → Cierra keyboard, activa estado "TalkingChat" → screenshot 15

**Relación:** Pantalla principal del chat (auth)

---

## 02_suggestion-buttons-expanded-auth.png

**Acceso:** Tap en cualquier suggestion button desde ChatScreen Auth (chat/01 auth)
**Comportamiento:** Idéntico a chat/02 unauth — ver flow.md de unauth para detalle completo de animación y comportamiento.
**Diferencia vs unauth:** Ninguna diferencia funcional. Solo el header es diferente (ya presente en chat/01 auth).

**Relación:** ChatScreen Auth (chat/01 auth) → tap suggestion button → este estado

---

## 03_attachments-bottomsheet-auth.png

**Acción previa:** Tap en "ChatGPT" button (top-left) o tap en "+" button del input

**Animación de entrada:** Slide-up desde abajo
**Animación de salida:** Slide-down

**Comportamiento:**
- Keyboard se cierra al abrir
- Estado inicial: muestra header (Camera/Photos/Files) + primeros 4 items de la lista
- Swipe up expande hasta 100% screen height, mostrando los 10 items
- La lista NO es scrolleable (todos los items caben en fullscreen)

**Diferencias con chat/03 unauth:**
- Camera/Photos/Files ahora funcionales (abren selectores nativos)
- Lista expandida de 3 items (unauth) a 10 items (auth)

**Lista de items (auth) — en orden:**
1. **Model** (icon: atom) — text: "Auto"
2. **Create image** (icon: palette) — text: "Visualize anything"
3. **Deep research** (icon: telescope) — text: "Get a detailed report"
4. **Web search** (icon: web — MaterialCommunityIcons) — text: "Find real-time news and info"
5. **Study and learn** (icon: book-open) — text: "Learn a new concept"
6. **Agent mode** (icon: square-mouse-pointer) — text: "Get work done for you"
7. **Shopping research** (icon: handbag) — text: "Get an in-depth guide"
8. **Your Year with ChatGPT** (icon: circle-play) — text: "View a summary of your year with ChatGPT."
9. **Quizzes** (icon: square-stack) — text: "Create quizzes to test your knowledge"
10. **Explore apps** (icon: layout-grid) — **SIN FUNCIONALIDAD** (no hace nada al presionar)

**Cierre:** Tap en backdrop o swipe down

**Relación:** Desde chat/01 (auth) → Vuelve a chat/01 al cerrar

---

## 03b_model-selector-modal.png

**Acceso:** Tap en "Model" desde Attachments BottomSheet Auth (chat/03 auth)
**Animación de entrada:** Aparece justo encima del botón "Model"
**Animación de salida:** Cierre al seleccionar opción
**Cierre:** Tap en cualquier opción

**Título del modal:** "GPT-5.2"

**Opciones (top to bottom):**
- **Auto** (default, ícono check) — "Decides how long to think"
- **Instant** — "Answers right away"
- **Thinking** — "Thinks longer for better answers"
- **Legacy models** (expandible con ícono chevron-right)

**Comportamiento al seleccionar:**
- **"Auto" (ya seleccionada):** Cierra modal → cierra Attachments BottomSheet → expande keyboard. No se agrega chip al input.
- **"Instant":** Cierra modal → cierra Attachments BottomSheet → mismas animaciones y comportamientos del input que la feature "Web search" (ver chat/04 unauth), pero el chip muestra ícono "atom" + texto "Instant"
- **"Thinking":** Cierra modal → cierra Attachments BottomSheet → mismas animaciones y comportamientos del input que la feature "Web search" (ver chat/04 unauth), pero el chip muestra ícono "atom" + texto "Thinking"

**Relación:** Attachments BottomSheet Auth (chat/03 auth) → "Model" → este modal

---

## 03c_model-instant-chip.png

**Acceso:** Selección de "Instant" o "Thinking" desde Model Selector Modal (chat/03b)
**Comportamiento:** Idéntico al chip de "Web search" en cuanto a animaciones y comportamiento del input. Solo cambia el ícono (atom) y el texto del chip ("Instant" o "Thinking").

**Relación:** Model Selector Modal (chat/03b) → selección → ChatScreen Auth con chip en input

---

## 03d_create-image-selected.png

**Acceso:** Tap en "Create image" desde Attachments BottomSheet Auth (chat/03 auth)
**Comportamiento visual en el BottomSheet:** Al presionar, el ícono, título y descripción cambian a color celeste + se agrega ícono "check" al extremo derecho del row
**Comportamiento inmediato:** El BottomSheet se cierra automáticamente

**Animaciones y comportamiento del input:** Idéntico al chip de "Web search" (ver chat/04 unauth). Solo cambia el ícono (palette) y el texto del chip ("Image"). El placeholder del input cambia a "Create image".

**Relación:** Attachments BottomSheet Auth (chat/03 auth) → "Create image" → ChatScreen Auth con chip "Image" en input

---

## 03e_create-image-chip.png

**Acceso:** Resultado de seleccionar "Create image" desde Attachments BottomSheet Auth (chat/03d)
**Estado:** ChatScreen Auth con chip "Image" en input, keyboard expandido, placeholder "Create image"
**Comportamiento:** Idéntico a otros chips (Web search, Instant, Thinking) — se puede cerrar con "x", mismas animaciones

---

## Features del Attachments BottomSheet Auth (sin screenshot individual)

### Deep research
**Estado:** Comportamiento idéntico a "Create image" (chat/03d-03e).
**Diferencia:** El chip muestra ícono "telescope" + texto "Research" + ícono "x"
**Placeholder del input:** "Deep research"

### Web search
**Estado:** Comportamiento idéntico a chat/04 unauth. Ver flow.md de unauth para detalle completo.

### Study and learn
**Estado:** Comportamiento idéntico a chat/05 unauth. Ver flow.md de unauth para detalle completo.

### Agent Mode
**Estado:** Comportamiento idéntico a "Create image" (chat/03d-03e).
**Diferencia:** El chip muestra ícono "square-mouse-pointer" + texto "Agent" + ícono "x"
**Placeholder del input:** "Agent mode"

### Shopping research
**Estado:** Comportamiento idéntico a "Create image" (chat/03d-03e).
**Diferencia:** El chip muestra ícono "handbag" + texto "Shopping research" + ícono "x"
**Placeholder del input:** "Shopping research"

### Your Year with ChatGPT
**Estado:** Comportamiento idéntico a "Create image" (chat/03d-03e).
**Diferencia:** El chip muestra ícono "circle-play" + texto "Your Year with ChatGPT" + ícono "x"
**Placeholder del input:** "Your Year with ChatGPT"

### Quizzes
**Estado:** Comportamiento idéntico a "Create image" (chat/03d-03e).
**Diferencia:** El chip muestra ícono "square-stack" + texto "Quizzes" + ícono "x"
**Placeholder del input:** "Quizzes"

### Explore apps
**Estado:** No implementar — el botón "Explore apps" no tiene acción al presionarlo (sin funcionalidad por ahora).

---

## chat/04 auth (Search mode)

**Estado:** No requiere screenshot — idéntico a chat/04 unauth en animaciones y comportamientos. Ver flow.md de unauth. Las únicas diferencias visibles son las del header (ya documentadas en chat/01 auth).

---

## chat/05 auth (Study mode)

**Estado:** No requiere screenshot — idéntico a chat/05 unauth en animaciones y comportamientos. Ver flow.md de unauth. Las únicas diferencias visibles son las del header (ya documentadas en chat/01 auth).

---

## chat/06 auth — Message sent, AI loading

**Estado:** Comportamiento idéntico a chat/06 unauth. Ver flow.md de unauth.
**Adición:** Incluir texto "Thinking..." (o "Searching..." en modo Search) con efecto shimmer después del loading indicator circular (ver Global Notes).

---

## chat/07 auth — AI response complete

**Estado:** Comportamiento idéntico a chat/07 unauth, EXCEPTO por la Action Bar.

**Diferencia en Action Bar (AUTH — 6 iconos):**
UnAuth tiene 3 iconos, Auth tiene 6 iconos (en este orden, todos outline):
1. **"copy"** — No hace nada visible
2. **"thumbs-up"** — Cambia a ícono filled blanco + elimina "thumbs-down" + muestra pop-up "Thank you for your feedback!"
3. **"thumbs-down"** — Cambia a ícono filled blanco + elimina "thumbs-up" + abre BottomSheet "Share Feedback" (slide desde abajo). Al cerrar el BottomSheet, muestra pop-up "Thank you for your feedback!"
4. **"volume-2"** — Abre "Speaking Pop-up" con fade (diferente al pop-up estándar). Tiene contador de tiempo, botón play/pause, y se cierra solo con ícono "x"
5. **"share-2"** — Abre Share BottomSheet nativo del sistema
6. **"ellipsis-vertical"** — Abre Ellipsis Modal → chat/33

---

## chat/08 auth — AI response search mode

**Estado:** Idéntico a chat/07 auth (misma Action Bar de 6 iconos). La diferencia visual es el contenido de la respuesta con sources.
**Texto loading:** "Searching..." con efecto shimmer (en lugar de "Thinking...")

---

## chat/09 auth (Sources BottomSheet)

**Estado:** No requiere screenshot — idéntico a chat/09 unauth en UI y comportamientos. Ver flow.md de unauth.

---

## chat/10 auth (Long press context menu)

**Estado:** Idéntico a chat/10 unauth en UI y comportamientos, EXCEPTO por un item adicional.

**Diferencia vs unauth:** Se agrega un nuevo botón "Share" al final del modal (debajo de "Edit Message").

**Botón adicional:**
- **"Share":** Abre Share BottomSheet nativo del sistema (lista de apps para compartir)

**Todo lo demás:** Idéntico a chat/10 unauth — misma animación (fade), mismo cierre (tap backdrop), mismos botones (Copy, Select Text, Edit Message) con mismos comportamientos. Ver flow.md de unauth.

---

## chat/11 auth (Select text screen)

**Estado:** No requiere screenshot — idéntico a chat/11 unauth en UI y comportamientos. Ver flow.md de unauth.

---

## chat/12 auth (Edit message mode)

**Estado:** No requiere screenshot — idéntico a chat/12 unauth en UI y comportamientos. Ver flow.md de unauth.

---

## 13_groupchat-bottomsheet.png

**Acción previa:** Tap en "Add Person" icon (top-right) desde chat/01 (auth)

**Animación de entrada:** Slide-up con backdrop oscuro
**Animación de salida:** Slide-down

**Comportamiento:**
- Keyboard se cierra al abrir
- No se puede expandir ni contraer
- Drag handle visible en la parte superior

**Acciones de los botones:**
- **Start group chat** → BG y texto cambian a gris + loading indicator gris aparece al lado del texto (button se expande levemente). Loading hardcodeado 3s → navega a GroupChat Screen → chat/16
- **Profile button (bottom, bg negro)** → Abre Profile BottomSheet dentro de este BottomSheet → ver screenshot nuevo
- **Backdrop** → Cierra BottomSheet

**Relación:** Desde chat/01 (auth) → Vuelve a chat/01 al cerrar

---

## 14_hide-chat-state.png

**Acción previa:** Tap en "Bubble icon" (top-right) desde chat/01 (auth)

**Animación de transición (instantánea, 3 cambios simultáneos):**
1. Header: "Add Person icon" desaparece, "Bubble icon" es reemplazado por "message-circle-off" icon que se desliza desde la posición del "Add Person" hasta la posición del "Bubble icon"
2. Contenido central: "What can I help with?" + suggestion buttons desaparecen con fade-out, nuevo texto párrafo aparece con fade-in
3. Input: placeholder cambia de "Ask ChatGPT" a "Temporary chat"

**Nota:** La transición inversa (hide → normal) debe funcionar con las mismas animaciones en reversa. Ambas direcciones: ChatScreen → ChatScreen (hide) y ChatScreen (hide) → ChatScreen.

**Acciones de los botones:**
- **"message-circle-off" icon (top-right)** → Desactiva hide chat, vuelve a chat/01 (auth) con animación inversa
- **Sidebar, ChatGPT button, +, mic, talk** → Mismo comportamiento que chat/01 (auth)

**Relación:** Desde chat/01 (auth) ↔ Bidireccional, mismo estado de pantalla

---

## 15_talking-chat-state.png

**Acción previa:** Tap en "Talk icon" (full right en input) desde chat/01 (auth)

**Animación de carga (2s antes de transición):**
- Mic icon desaparece
- Talk icon se expande hacia la izquierda (smooth)
- Talk icon expandido muestra: loading indicator (izquierda) + "Cancel" text (derecha), ambos en negro/gris oscuro
- Duración hardcodeada: 2 segundos

**Animación de transición (todos simultáneos, después de los 2s):**
1. Header: "ChatGPT" button desaparece (fade), aparece texto "ChatGPT Voice" en su lugar
2. Header: "Add Person" y "Bubble" icons desaparecen, "ellipsis-vertical" icon aparece en posición del "Bubble"
3. Contenido central: "What can I help with?" + suggestion buttons desaparecen (fade), aparece título "Start talking" (fade)
4. Input: TextInput se contrae su width de forma MUY SMOOTH y fluida, elementos nuevos aparecen en el espacio sobrante, placeholder cambia a "Type"

**⚠️ CRÍTICO:** Las animaciones del contenido central (fade) y la contracción del input deben ser extremadamente smooth y fluidas. Esta es una transición premium, no puede sentirse dura.

**Nota:** Todas las animaciones son BIDIRECCIONALES. Al salir del TalkingChat state → ChatScreen, las mismas animaciones ocurren en reversa (input se expande smooth, contenido central aparece con fade, header vuelve a normal).

**Acciones de los botones:**
- **Sidebar button (top-left)** → Abre sidebar
- **Ellipsis-vertical (top-right)** → Abre opciones menu (ver screenshot nuevo si existe)
- **+ button** → Abre Attachments BottomSheet
- **Camera icon** → Abre cámara
- **Mic icon** → Activa/desactiva micrófono
- **"End" button (azul)** → Desactiva TalkingChat state, vuelve a chat/01 (auth) con animación inversa

**Relación:** Desde chat/01 (auth) ↔ Bidireccional

---

## SECCIÓN C: FLUJO GROUPCHAT (17 screenshots)

---

## 16_groupchat-screen.png

**Acceso:** Después de loading 3s desde GroupChat BottomSheet (chat/13) al presionar "Start group chat"
**Animación de entrada:** Aparece después del loading indicator (3s)

**Header diferente al ChatScreen normal:**
- **Sidebar button (top-left):** Abre sidebar
- **Square-pen icon (top-right):** Slide left a ChatScreen empty
- **Avatar (top-right):** Abre GroupChat Options Modal → chat/17

**Input:** Similar al ChatScreen Auth pero:
- **"+" button:** Abre Attachments BottomSheet variante (solo "Create image" + "Web search")
- **Microphone:** Comportamiento regular

**Relación:** Desde chat/13 → Loading 3s → esta pantalla

---

## 17_groupchat-options-modal.png

**Acceso:** Tap en Avatar (top right) desde GroupChat Screen (chat/16)
**Animación de entrada:** Fade in
**Animación de salida:** Fade out
**Cierre:** Tap en backdrop

**Opciones (9 total, top to bottom):**
1. **View members** → Navega a Members Screen → chat/18
2. **Add members** → Abre Share BottomSheet nativo
3. **Manage link** → Navega a Manage Link Screen → chat/26
4. **Rename group** → Abre Rename Group Modal → chat/27
5. **Customize ChatGPT** → Navega a Customize ChatGPT Screen → chat/28
6. **Mute notifications** → Toggle: muestra pop-up + cambia texto a "Unmute notifications"
7. **Report** → Abre Report Conversation Modal → chat/30
8. **Leave group** → Abre Leave Group Modal → chat/31
9. **Delete group** → Abre Delete Group Modal → chat/32

**Relación:** GroupChat Screen (chat/16) → tap Avatar → este modal

---

## 18_members-screen.png

**Acceso:** Tap en "View members" desde GroupChat Options Modal (chat/17)
**Animación de entrada:** Slide desde derecha
**Animación de salida:** Slide hacia derecha (back)

**Header:**
- Back arrow (top-left): Vuelve a GroupChat Screen
- Título: "[n] members"

**Lista de miembros:** Cada item muestra avatar + nombre + rol (ej: "Owner")
**Al tap en cualquier miembro:** Abre Profile BottomSheet (self o other dependiendo de quién sea)

**Relación:** GroupChat Options Modal (chat/17) → "View members" → esta pantalla

---

## 19_profile-bottomsheet-self.png

**Acceso:** Tap en tu propio perfil desde Members Screen (chat/18)
**Animación de entrada:** Slide-up
**Animación de salida:** Slide-down

**Contenido:**
- Avatar grande
- Nombre
- "Owner" badge (si aplica)
- **"Edit profile" button** → Abre Edit Profile BottomSheet → chat/21

**Relación:** Members Screen (chat/18) → tap self → este BottomSheet

---

## 20_profile-bottomsheet-other.png

**Acceso:** Tap en otro miembro desde Members Screen (chat/18)
**Animación de entrada:** Slide-up
**Animación de salida:** Slide-down

**Contenido:**
- Avatar grande
- Nombre
- Rol (si tiene)
- **"Remove from group" button** → Abre Remove Member Modal → chat/22
- **"Report" link** → Abre Report Profile Modal → chat/23

**Relación:** Members Screen (chat/18) → tap other member → este BottomSheet

---

## 21_edit-profile-bottomsheet.png

**Acceso:** Tap en "Edit profile" desde Profile BottomSheet Self (chat/19)
**Animación de entrada:** Slide-up (reemplaza el BottomSheet anterior)
**Animación de salida:** Slide-down

**Contenido:**
- Avatar con ícono camera overlay (tap → selector de imagen — no implementar)
- TextInput para nombre
- **"Save" button:** Guarda cambios → cierra BottomSheet
- **"Cancel" o backdrop:** Cierra sin guardar

**Relación:** Profile BottomSheet Self (chat/19) → "Edit profile" → este BottomSheet

---

## 22_remove-member-modal.png

**Acceso:** Tap en "Remove from group" desde Profile BottomSheet Other (chat/20)
**Animación de entrada:** Fade in
**Animación de salida:** Fade out

**Contenido:**
- Título: "Remove [name]?"
- Texto descriptivo
- **"Cancel" button:** Cierra modal
- **"Remove" button (rojo):** Loading indicator → cierra modal → vuelve a Members Screen

**Relación:** Profile BottomSheet Other (chat/20) → "Remove from group" → este modal

---

## 23_report-profile-modal-step1.png
## 24_report-profile-modal-step2.png
## 25_report-profile-modal-step3.png

**Acceso:** Tap en "Report" desde Profile BottomSheet Other (chat/20)
**Animación de entrada:** Fade in
**Animación de salida:** Fade out (entre steps también)

**3 Steps:**
1. **Step 1:** Selección de categoría (lista de opciones)
2. **Step 2:** Selección de subcategoría (lista de opciones)
3. **Step 3:** TextInput para descripción + "Submit" button

**Comportamiento del Submit:**
- Disabled hasta que se escriba 1+ caracteres
- Al habilitar: BG blanco, texto negro
- Al presionar: cierra modal, muestra pop-up "Report submitted"

**Nota:** Este componente Report es REUTILIZABLE — mismo componente para Report Profile y Report Conversation (solo cambia título/descripción)

**Relación:** Profile BottomSheet Other (chat/20) → "Report" → 3 steps

---

## 26_manage-link-screen.png

**Acceso:** Tap en "Manage link" desde GroupChat Options Modal (chat/17)
**Animación de entrada:** Slide desde derecha
**Animación de salida:** Slide hacia derecha (back)

**Header:**
- Back arrow (top-left): Vuelve a GroupChat Screen
- Título: "Manage link"

**Contenido:**
- Link de invitación (texto seleccionable)
- **"Copy" button:** Copia link → muestra pop-up "Invite link copied"
- **"Share" button:** Abre Share BottomSheet nativo
- **"Reset link" button:** Loading indicator blanco ~2s → pop-up "Invite link reset"
- **"Delete link" button (rojo):** Loading indicator rojo ~2s → vuelve a GroupChat Screen

**Relación:** GroupChat Options Modal (chat/17) → "Manage link" → esta pantalla

---

## 26b_manage-link-copy-popup.png
## 26c_manage-link-reset-loading.png
## 26d_manage-link-delete-loading.png

**Estados adicionales de Manage Link Screen:**
- **26b:** Pop-up "Invite link copied" después de tap en Copy
- **26c:** Loading indicator blanco en botón "Reset link"
- **26d:** Loading indicator rojo en botón "Delete link"

---

## 27_rename-group-modal.png

**Acceso:** Tap en "Rename group" desde GroupChat Options Modal (chat/17)
**Animación de entrada:** Fade in
**Animación de salida:** Fade out

**Contenido:**
- Título: "Rename group"
- TextInput con nombre actual
- **"Cancel" button:** Cierra modal
- **"Save" button:** Guarda nombre → cierra modal

**Comportamiento del TextInput:** Mismo patrón de animación que AuthScreen email input (placeholder se mueve al borde, etc.)

**Relación:** GroupChat Options Modal (chat/17) → "Rename group" → este modal

---

## 28_customize-chatgpt-screen.png

**Acceso:** Tap en "Customize ChatGPT" desde GroupChat Options Modal (chat/17)
**Animación de entrada:** Slide desde derecha
**Animación de salida:** Slide hacia derecha (back)

**Header:**
- Back arrow (top-left): Si hay cambios sin guardar → abre Leave without saving Modal (chat/28c). Si no hay cambios → vuelve a GroupChat Screen
- Título: "Customize ChatGPT"

**Contenido:**
- **"Respond" row:** Muestra opción actual ("Automatically" o "When mentioned") + chevron → tap abre Respond Modal (chat/28b)
- **"Custom instructions" TextInput:** Para instrucciones personalizadas
- **"Save" button:** Si hay cambios, muestra loading state (chat/28d) → vuelve a GroupChat Screen

**Relación:** GroupChat Options Modal (chat/17) → "Customize ChatGPT" → esta pantalla

---

## 28b_customize-chatgpt-respond-modal.png

**Acceso:** Tap en "Respond" row desde Customize ChatGPT Screen (chat/28)
**Animación de entrada:** Fade in
**Animación de salida:** Fade out

**Opciones:**
- **"Automatically"** (default)
- **"When mentioned"**

**Comportamiento:** Al seleccionar opción, chevron en la pantalla anterior hace smooth inversion animation, texto cambia

**Relación:** Customize ChatGPT Screen (chat/28) → "Respond" → este modal

---

## 28c_customize-chatgpt-leave-modal.png

**Acceso:** Tap en Back arrow con cambios sin guardar desde Customize ChatGPT Screen (chat/28)
**Animación de entrada:** Fade in
**Animación de salida:** Fade out

**Contenido:**
- Título: "Leave without saving?"
- **"Cancel" button:** Cierra modal, vuelve a Customize ChatGPT Screen
- **"Leave" button (rojo):** Cierra modal → vuelve a GroupChat Screen (descarta cambios)

**Relación:** Customize ChatGPT Screen (chat/28) → back con cambios → este modal

---

## 28d_customize-chatgpt-saving-state.png

**Acceso:** Tap en "Save" con cambios desde Customize ChatGPT Screen (chat/28)
**Comportamiento:** Loading indicator al lado del texto "Save" → ~2s → vuelve a GroupChat Screen

**Relación:** Customize ChatGPT Screen (chat/28) → "Save" → loading → GroupChat Screen

---

## 29_mute-notifications-popup.png

**Acceso:** Tap en "Mute notifications" desde GroupChat Options Modal (chat/17)
**Comportamiento:** 
- Cierra el modal
- Muestra pop-up "Notifications muted" (o "Notifications unmuted")
- Toggle: el texto en el modal cambia entre "Mute notifications" y "Unmute notifications"
- El ícono también cambia: bell-off ↔ bell

**Relación:** GroupChat Options Modal (chat/17) → "Mute notifications" → pop-up

---

## 30_report-conversation-modal-step1.png
## 30b_report-conversation-modal-step2.png
## 30c_report-conversation-modal-step3.png

**Acceso:** Tap en "Report" desde GroupChat Options Modal (chat/17)
**Comportamiento:** Exactamente igual que Report Profile Modal (chat/23-25) — mismo componente reutilizado, solo cambia título/descripción

**Relación:** GroupChat Options Modal (chat/17) → "Report" → 3 steps

---

## 31_leave-group-modal.png

**Acceso:** Tap en "Leave group" desde GroupChat Options Modal (chat/17)
**Animación de entrada:** Fade in
**Animación de salida:** Fade out

**Contenido:**
- Título: "Leave group?"
- Texto descriptivo
- **"Cancel" button:** Cierra modal
- **"Leave" button (rojo):** Loading indicator rojo ~2s → navega a ChatScreen empty

**Relación:** GroupChat Options Modal (chat/17) → "Leave group" → este modal → ChatScreen

---

## 32_delete-group-modal.png

**Acceso:** Tap en "Delete group" desde GroupChat Options Modal (chat/17)
**Animación de entrada:** Fade in
**Animación de salida:** Fade out

**Contenido:**
- Título: "Delete group?"
- Texto descriptivo
- **"Cancel" button:** Cierra modal
- **"Delete" button (rojo):** Loading indicator rojo ~2s → navega a ChatScreen empty

**Relación:** GroupChat Options Modal (chat/17) → "Delete group" → este modal → ChatScreen

---

## SECCIÓN D: ACTION BAR MODALS (AUTH)

---

## 33_ellipsis-modal.png

**Acceso:** Tap en "ellipsis-vertical" en Action Bar de respuesta de IA (chat/07 auth, chat/08 auth)
**Animación de entrada:** Fade in
**Animación de salida:** Fade out
**Cierre:** Tap en backdrop

**Contenido del modal:**
- **Timestamp:** Fecha y hora de la respuesta (ej: "Feb 5, 2026 6:29:28 PM")
- **"Retry":** Cierra este modal → abre Retry Modal (chat/34) simultáneamente
- **"Branch in new chat":** Cierra modal → aparece texto "Branched from [chat name]" debajo de la respuesta (encima del input)

**Relación:** Action Bar → "ellipsis-vertical" → este modal

---

## 33b_branched-state.png

**Acceso:** Tap en "Branch in new chat" desde Ellipsis Modal (chat/33)
**Comportamiento:** Se muestra un texto "Branched from [nombre del chat]" (enlace clickeable) justo encima del input bar, indicando que esta conversación es una rama de otra.

**Relación:** Ellipsis Modal (chat/33) → "Branch in new chat" → este estado

---

## 34_retry-modal.png

**Acceso:** Tap en "Retry" desde Ellipsis Modal (chat/33)
**Animación de entrada:** Fade in (simultáneo al cierre del Ellipsis Modal)
**Animación de salida:** Fade out
**Cierre:** Tap en backdrop

**Botones (top to bottom):**

1. **"Retry" + chevron-down (título, bg transparent):** Cierra este modal → abre de nuevo Ellipsis Modal (chat/33)

2. **"Switch model":** Abre modal "Switch model" (chat/35)

3. **"Try again":** Cierra modal → borra el mensaje de la IA → vuelve al estado de loading (círculo blanco + "Thinking..." shimmer) → la IA genera nueva respuesta en modo normal

4. **"Search the web" / "Remove web results" (toggle):**
   - Si está en modo normal: muestra "Search the web" → borra mensaje → regenera en modo SEARCH
   - Si ya está en modo SEARCH: muestra "Remove web results" → borra mensaje → regenera en modo normal

**Relación:** Ellipsis Modal (chat/33) → "Retry" → este modal

---

## 35_switch-model-modal.png

**Acceso:** Tap en "Switch model" desde Retry Modal (chat/34)
**Animación de entrada:** Fade in
**Animación de salida:** Fade out
**Cierre:** Tap en backdrop

**Subtítulo:** "GPT-5.2"

**Botones (top to bottom):**

1. **"Switch model" + chevron-down (título, bg transparent):** Cierra este modal → abre de nuevo Retry Modal (chat/34)

2. **"Instant" — "Answers right away":** Borra mensaje de IA → regenera en modo Instant (loading animation ~1s max, sin "Thinking..." shimmer, directo a response animation)

3. **"Thinking" — "Thinks longer for better answers":** Borra mensaje de IA → regenera en modo Thinking (animación "Thinking..." shimmer dura ~3s más de lo normal)

4. **"Legacy models" + chevron-right:** Expande el modal hacia arriba mostrando modelos legacy (chevron cambia a chevron-down)

**Relación:** Retry Modal (chat/34) → "Switch model" → este modal

---

## 35b_switch-model-expanded.png

**Acceso:** Tap en "Legacy models" desde Switch Model Modal (chat/35)
**Animación:** El modal se expande hacia arriba, chevron del botón "Legacy models" cambia a chevron-down

**Nuevos botones debajo de "Legacy models":**

1. **"GPT-5.1 Instant":** Borra mensaje de IA → regenera saltándose loading animation Y "Thinking..." shimmer → directo a response animation

2. **"GPT-5.1 Thinking":** Borra mensaje de IA → regenera con flujo normal (loading → thinking → response) pero "Thinking..." shimmer dura ~10s más de lo normal

3. **"GPT-4o" — "Leaving on February 13" (selected by default, ícono check):** Salta loading animation (círculo blanco) → empieza directo con "Thinking..." shimmer → response animation

**Comportamiento de selección:**
- Al presionar cualquier modelo (incluso el ya seleccionado): borra mensaje y regenera con ese modelo
- El modelo seleccionado muestra ícono "check" a la izquierda
- La selección persiste: la próxima vez que abras el modal expandido, el modelo usado aparecerá con "check"

**Relación:** Switch Model Modal (chat/35) → "Legacy models" → este estado expandido

---

## 36_share-feedback-bottomsheet.png

**Acceso:** Tap en "thumbs-down" en Action Bar de respuesta de IA (chat/07 auth, chat/08 auth)
**Animación de entrada:** Slide-up desde abajo
**Animación de salida:** Slide-down
**Backdrop:** Oscuro semi-transparente

**Título:** "Share Feedback"

**Campos (top to bottom):**

1. **Dropdown "Issue":**
   - Estado inicial: placeholder "Issue" + ícono triangle (chevron-down)
   - Al presionar: placeholder "Issue" se achica y mueve al borde (animación típica de la app), aparece nuevo placeholder "Select an issue", ícono triangle se invierte (chevron-up), se despliega lista de opciones
   - Opciones: "Incorrect or incomplete", "Not what I asked for", "Slow or buggy", "Style or tone", "Safety or legal concern" (con chevron-right), "Other"
   - Al seleccionar opción: cierra menú, texto seleccionado aparece como valor del dropdown, activa botón "Submit"

2. **TextInput "Share details (optional)":** Input simple, sin comportamiento especial

3. **Texto disclaimer:** "Your conversation will be included with your feedback to help improve ChatGPT. Learn more" (link "Learn more" sin funcionalidad)

4. **"Submit" button:**
   - Estado inicial: disabled (gris)
   - Se activa SOLO al seleccionar una opción del dropdown (BG blanco, color negro)
   - Escribir en "Share details" sin seleccionar dropdown NO activa el botón

**Al cerrar/submit:** Muestra pop-up "Thank you for your feedback!" (estilo usual)

**Relación:** Action Bar → "thumbs-down" → este BottomSheet

---

## 36b_share-feedback-dropdown-expanded.png

**Acceso:** Tap en dropdown "Issue" desde Share Feedback BottomSheet (chat/36)
**Comportamiento:** Dropdown se expande mostrando lista de opciones, ícono triangle se invierte, placeholder se transforma
