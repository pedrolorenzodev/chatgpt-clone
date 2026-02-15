# sidebar/ — Flow Documentation

---

## 01_sidebar.png

**Disparadores:**
- Swipe derecha en ChatScreen
- Tap en botón sidebar (top-left del header)

**Animación de entrada:** Slide-in desde la izquierda (~300ms, ease-in-out)
**Animación de salida:** Slide-out hacia la izquierda (~300ms, ease-in-out)

**Comportamiento al abrir:**
- Keyboard se cierra automáticamente
- NO limpia input ni desactiva features activas (Search, Study, etc.)

**Acciones de los botones:**
- **New chat button** → Crea nuevo chat, cierra sidebar → chat/01
- **Settings** → Navega a Settings con push navigation → settings/01
- **Terms of Use** → Abre navegador externo (ignorar en clon)
- **Privacy Policy** → Abre navegador externo (ignorar en clon)
- **Auth button (footer)** → Abre Auth BottomSheet → auth/02

**Cierre:** Tap en overlay (backdrop derecho) o swipe izquierda

**Relación:** Desde chat/01 → Vuelve a chat al cerrar

---

## 01_sidebar-auth.png

**Acción previa:** Tap en sidebar button (top-left) desde cualquier ChatScreen (auth)

**Animación de entrada:** Slide-in desde la izquierda (igual que unauth)
**Animación de salida:** Slide-out hacia la izquierda (tap en área oscura derecha o swipe left)

**Estructura scrolleable:** Todo el sidebar es scrolleable EXCEPTO el header (search input + square-pen icon) y el footer (user button). Estos están fijos.

**Header:**
- **Search input (top-left)** → onFocus: expande sidebar a pantalla completa con cambios en elementos → ver 01b_sidebar-search-focus.png
- **Square-pen icon (top-right)** → Cierra sidebar, renderiza ChatScreen nueva vacía

**List 1 (Acciones rápidas):**
- **New chat** → Misma acción que square-pen icon
- **Images** → No hace nada (TouchableOpacity sin navegación)
- **Apps** → No hace nada (TouchableOpacity sin navegación)

**List 2 (Proyectos):**
- **New project** → No hace nada (TouchableOpacity sin navegación, por ahora)
- **[Proyecto creado]** (ej: "Paisa", "Estudio") → No hace nada (TouchableOpacity sin navegación, por ahora)
- **All projects** → No hace nada (TouchableOpacity sin navegación, por ahora)

**List 3 (Historial de chats):**
- **[Chat item]** → Renderiza dicho chat. No hay animación de slide, se renderiza encima directamente
- El chat activo (desde el cual se abrió el sidebar) se distingue con BG gris

**Footer:**
- **User button (avatar + nombre + chevron)** → El botón ocupa 100% del width del sidebar. Navega con SLIDE animation a Settings screen

**Cierre:** Tap en overlay (área oscura derecha) o swipe izquierda

**Relación:** Desde cualquier ChatScreen (auth) → sidebar/01-auth

---

## 01b_sidebar-search-focus.png

**Acción previa:** Tap en Search input desde sidebar/01-auth

**Animaciones simultáneas (smooth y fluidas):**
1. El sidebar expande su width al 100% de la pantalla
2. El square-pen icon se desplaza hacia full top-right
3. El Search input expande su width para ocupar el espacio disponible
- Estas 3 animaciones ocurren simultáneamente con efecto smooth
- Al contraer (blur/back), las 3 animaciones se revierten simultáneamente con el mismo efecto smooth

**Cambios en elementos:**
- El ícono "search" (lupa) dentro del Search input se reemplaza por ícono "arrow-left" (back)
- El keyboard se abre naturalmente

**Acciones de los botones:**
- **Arrow-left (dentro del Search input)** → Contrae sidebar a su forma original (revierte las 3 animaciones), cierra keyboard
- **Square-pen icon (top-right)** → Misma acción que en sidebar/01-auth (nuevo chat)
- **[Chat item del historial]** → Misma acción que en sidebar/01-auth (navega al chat)

**Comportamiento de búsqueda:**
- Al escribir texto, filtra los items del historial de chats en tiempo real

**Relación:** Desde sidebar/01-auth → sidebar/01b (search focus). Back → sidebar/01-auth
