# auth/ — Flow Documentation

## 01_welcome-screen.png

**Estado inicial:** Primera pantalla al abrir la app (fresh install, usuario no autenticado)

**Acciones de los botones:**
- **Continue** → Navega a ChatScreen (chat/01)
- **Terms of Use** → Abre navegador externo (ignorar funcionalidad en clon)
- **Privacy Policy** → Abre navegador externo (ignorar funcionalidad en clon)

**Relación:** Punto de entrada de la app → chat/01

---

## 02_auth-bottomsheet.png

**Disparadores (múltiples entry points):**
- Tap "Log in" button en ChatScreen header
- Tap en Camera/Photos/Files/Explore apps en Attachments BottomSheet (chat/03)
- Tap en botón de micrófono (cuando no autenticado)

**Animación de entrada:** Slide-up con backdrop oscuro
**Animación de salida:** Slide-down

**Comportamiento:**
- NO se puede cerrar deslizando hacia abajo
- Se cierra con: tap en backdrop O tap en ícono "x"
- Keyboard se cierra al aparecer

**Acciones de los botones:**
- **Sign up** → Navega a Auth Login Screen → auth/03
- **Log in** → Navega a Auth Login Screen → auth/03
- **x (close)** → Cierra BottomSheet, vuelve a pantalla anterior

**Relación:** Componente reutilizable, se abre desde múltiples lugares

---

## 03_auth-login-screen.png (+ variante phone mode)

**Acción previa:** Tap en "Log in" o "Sign up" desde Auth BottomSheet (auth/02)

**Tipo de pantalla:** Se renderiza encima (sin animación de slide/push)

**Estados de la pantalla:**
- **Email mode** (default): TextInput "Email" + "Continue with phone" button
- **Phone mode**: Selector país + TextInput "Phone number" + "Continue with email" button
- Cambio entre modos es instantáneo, sin animación

**Animaciones/efectos del TextInput:**
- onFocus: border se vuelve blanco con borderWidth ligeramente mayor
- onFocus: placeholder ("Email" o "Phone number") se anima hacia el borde superior del input — se achica, toma color blanco, y se posiciona sobre el border (cortándolo visualmente). Animación fluida
- onBlur (sin texto): placeholder vuelve a su posición y tamaño original

**Comportamiento del botón Continue:**
- Disabled por default (bg oscuro, texto gris)
- Se habilita cuando email es válido (contiene @ . y c) → bg blanco, texto negro
- Al presionar: aparece loading indicator al lado del texto "Continue" (texto no se mueve)

**Comportamiento de "Continue with Google":**
- Al presionar: texto se vuelve gris + loading indicator gris aparece al lado del texto

**Acciones de los botones:**
- **Back button (top-left)** → Vuelve a pantalla anterior
- **Continue** → Loading indicator, intenta auth (solo UI en clon)
- **Continue with Google** → Loading indicator, intenta auth con Google (solo UI en clon)
- **Continue with phone** → Cambia a Phone mode (instantáneo)
- **Continue with email** → Cambia a Email mode (instantáneo)
- **Terms of Use / Privacy Policy** → Navegador externo (ignorar en clon)

**Nota:** El comportamiento del loading indicator en "Continue" y "Continue with Google" es reutilizable — mismo patrón en cualquier lugar de la app donde aparezcan estos auth buttons.

**Relación:** Desde auth/02 → En el clon, al presionar "Continue" (con texto en input) o "Continue with Google" → auth/04

---

## 04_auth-loading-transition.png

**Acción previa:** Auth exitoso (tap "Continue" con email válido o tap "Continue with Google" en auth/03)

**Comportamiento (hardcodeado):**
- Al presionar "Continue" (con texto en input) o "Continue with Google" → navega a pantalla de loading
- Pantalla: fondo negro, loading indicator blanco, grande, centrado
- Duración hardcodeada: 3 segundos
- Al completar: navega a ChatScreen autenticado → chat/01 (auth)

**Animación de entrada:** Instantánea (sin slide)
**Animación de salida:** Fade-out hacia ChatScreen auth

**Relación:** Desde auth/03 → chat/01 (auth)
