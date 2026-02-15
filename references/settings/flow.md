# settings/ — Flow Documentation

## SECCIÓN A: UNAUTH

---

## 01_settings-main.png

**Acción previa:** Tap "Settings" desde sidebar (sidebar/01)

**Animación de entrada:** Push navigation (slide derecha → izquierda)
**Animación de salida:** Pop navigation (slide izquierda → derecha)

**Acciones de los botones:**
- **Back button (top-left)** → Pop navigation, vuelve a ChatScreen
- **Data controls toggle** → Al activarse navega a ChatScreen (comportamiento simplificado para unauth)
- **Language card** → Abre modal de idiomas → screenshot 02
- **About card** → Push navigation a About → screenshot 03

**Relación:** Desde sidebar/01

---

## 02_language-modal.png

**Acción previa:** Tap en "Language" card (desde 01)

**Tipo de UI:** Modal centrado flotante (NO es BottomSheet)

**Animación de entrada:** Fade-in con ligero scale-up
**Animación de salida:** Fade-out

**Comportamiento:** Lista scrollable de idiomas con radio buttons, idioma actual pre-seleccionado

**Acciones:**
- **OK button** → Confirma selección, cierra modal
- **Tap en backdrop** → Cierra modal sin cambiar selección

**Relación:** Desde 01 → Vuelve a 01 al cerrar

---

## 03_about-screen.png

**Acción previa:** Tap en "About" card (desde 01)

**Animación de entrada:** Push navigation (slide derecha → izquierda)
**Animación de salida:** Pop navigation (slide izquierda → derecha)

**Acciones:**
- **Back button** → Pop navigation, vuelve a Settings (01)
- **Help center** → Abre navegador externo (ignorar en clon)
- **Terms of use** → Abre navegador externo (ignorar en clon)
- **Privacy policy** → Abre navegador externo (ignorar en clon)
- **Licenses** → Push navigation → screenshot 04
- **Version info** → No interactivo

**Relación:** Desde 01 → Licenses va a 04

---

## 04_licenses-screen.png

**Acción previa:** Tap en "Licenses" (desde 03)

**Animación de entrada:** Push navigation (slide derecha → izquierda)
**Animación de salida:** Pop navigation (slide izquierda → derecha)

**Comportamiento:** Lista scrollable de licencias open source (solo lectura)

**Acciones:**
- **Back button** → Pop navigation, vuelve a About (03)

**Relación:** Desde 03 → Vuelve a 03

---

## SECCIÓN B: AUTH

---

## 01_settings-main-auth-top.png + 01_settings-main-auth-scrolled.png

**Acción previa:** Tap en footer (user button) desde sidebar/01-auth

**Animación de entrada:** SLIDE (push)
**Animación de salida:** SLIDE (pop) con back button

**Estructura scrolleable:** Toda la pantalla es scrolleable EXCEPTO el header (back button + título "Settings"). El header tiene background con sombra negra semi-transparente (mismo patrón que ChatScreen).

**Nota:** Se usan 2 capturas (top + scrolled) porque la pantalla tiene más contenido del que cabe en un viewport.

**Header:**
- **Back button (arrow-left)** → Vuelve al sidebar con SLIDE animation (pop)

**Profile section:**
- **Avatar image** → Abre EditProfile BottomSheet (mismo que chat/21_edit-profile-bottomsheet.png)
- **"Edit profile" button** → Abre EditProfile BottomSheet (mismo que chat/21)

**"My ChatGPT" list:**
- **Personalization** → No hace nada (TouchableOpacity sin navegación, por ahora)
- **Apps** → No hace nada (TouchableOpacity sin navegación, por ahora)

**"Account" list:**
- **Workspace** (subtítulo "Personal") → No presionable
- **Subscription** (subtítulo "Plus") → Abre Subscription Modal → ver 01c_subscription-modal.png
- **Parental controls** → No hace nada (TouchableOpacity sin navegación, por ahora)
- **Email** (subtítulo con email del usuario) → No hace nada (TouchableOpacity sin navegación, por ahora)
- **Phone number** (subtítulo con número del usuario) → No hace nada (TouchableOpacity sin navegación, por ahora)

**"Appearance" section:**
- **Appearance** (subtítulo "System (Default)") → Abre Appearance Modal → ver 01e_appearance-modal.png. Animación FADE (in & out). Se cierra con botón "OK"
- **Accent color** (subtítulo "Default") → Abre Accent Color Modal → ver 01f_accent-color-modal.png. Animación FADE (in & out). Backdrop NO tiene opacidad visible. Se cierra al tap en backdrop o al seleccionar cualquier color

**Settings list:**
- **General** → Abre General screen → ver 01d_general-screen.png. Animación SLIDE (push)
- **Notifications** → Abre Notifications screen → ver 01h_notifications-screen.png. Animación SLIDE (push)
- **Voice** → Abre Speech screen → ver 01i_speech-screen.png. Animación SLIDE (push)
- **Data controls** → Abre Data Controls screen → ver 01j_data-controls-screen.png. Animación SLIDE (push)
- **Security** → Abre Security screen → ver 01k_security-screen.png. Animación SLIDE (push)
- **About** → Abre About screen → ver 01l_about-screen-auth.png. Animación SLIDE (push)

**Log out:**
- **Log out** (texto rojo) → Abre Log Out Modal → ver 01g_logout-modal.png. Animación FADE

**Relación:** Desde sidebar/01 (auth) → esta pantalla es el hub de settings auth

---

## 01c_subscription-modal.png

**Acción previa:** Tap en "Subscription" desde settings/01-auth

**Animación de entrada:** FADE in
**Animación de salida:** FADE out

**Contenido:** Texto informativo: "You can't make changes to your subscription inside this app, because you purchased this subscription on another platform."

**Acciones de los botones:**
- **"OK" button** → Cierra modal
- **Backdrop** → Cierra modal

**Relación:** Desde settings/01-auth → cierra → vuelve a settings/01-auth

---

## 01d_general-screen.png

**Acción previa:** Tap en "General" desde settings/01-auth

**Animación de entrada:** SLIDE (push)
**Animación de salida:** SLIDE (pop) con back button

**Header:** Back button + título "General"

**Acciones de los botones:**
- **Back button** → Vuelve a settings/01-auth con SLIDE (pop)
- **Show legacy models** → Switch toggle (activado: blanco y negro, mismo patrón de switches de la app)
- **Language** (subtítulo "English") → Abre Language Modal (mismo que settings/02_language-modal.png ya capturado en unauth)

**Relación:** Desde settings/01-auth → settings/01d. Back → settings/01-auth

---

## 01e_appearance-modal.png

**Acción previa:** Tap en "Appearance" desde settings/01-auth

**Animación de entrada:** FADE in
**Animación de salida:** FADE out

**Contenido:** Título "Appearance" + 3 opciones con radio buttons:
- System (Default)
- Light
- Dark

**Comportamiento:** Al presionar una opción, el radio button se llena (filled). La opción activa muestra el dot filled.

**Acciones de los botones:**
- **Radio button (cualquiera)** → Activa la opción, llena el dot icon
- **"OK" button** → Cierra modal
- **Backdrop** → Cierra modal

**Relación:** Desde settings/01-auth → cierra → vuelve a settings/01-auth

---

## 01f_accent-color-modal.png

**Acción previa:** Tap en "Accent color" desde settings/01-auth

**Animación de entrada:** FADE in
**Animación de salida:** FADE out

**Cambios en el botón trigger:**
- El chevron-icon del botón "Accent color" rota y apunta en dirección contraria (indicando modal abierto)

**Contenido:** Lista de colores, cada uno con un dot de color + nombre:
- Default (con checkmark si está seleccionado)
- Blue
- Green
- Yellow
- Pink
- Orange
- Purple · Plus

**Comportamiento del backdrop:** NO tiene opacidad visible, no afecta la visibilidad del fondo

**Acciones de los botones:**
- **[Cualquier color button]** → Selecciona el color y cierra modal
- **Backdrop** → Cierra modal

**Relación:** Desde settings/01-auth → cierra → vuelve a settings/01-auth

---

## 01g_logout-modal.png

**Acción previa:** Tap en "Log out" desde settings/01-auth

**Animación de entrada:** FADE in
**Animación de salida:** FADE out

**Contenido:** Título "Log out?" + Texto "You'll need to sign back in to keep using ChatGPT."

**Acciones de los botones:**
- **"Cancel"** → Cierra modal
- **"Log out"** → No hace nada (por ahora)
- **Backdrop** → Cierra modal

**Relación:** Desde settings/01-auth → cierra → vuelve a settings/01-auth

---

## 01h_notifications-screen.png

**Acción previa:** Tap en "Notifications" desde settings/01-auth

**Animación de entrada:** SLIDE (push)
**Animación de salida:** SLIDE (pop) con back button

**Header:** Back button + título "Notifications"

**Contenido:** Lista de botones, cada uno con título (left) + "On" label (right):
- Responses
- Group chats
- Tasks
- Projects
- Recommendations
- Usage

**Acciones de los botones:**
- **Back button** → Vuelve a settings/01-auth con SLIDE (pop)
- **[Cualquier item]** → Abre su pantalla correspondiente con SLIDE (push)

**Relación:** Desde settings/01-auth → settings/01h. Back → settings/01-auth

---

## 01h_notifications-usage-screen.png (template para todas las sub-pantallas de Notifications)

**Acción previa:** Tap en cualquier item desde settings/01h_notifications-screen

**Animación de entrada:** SLIDE (push)
**Animación de salida:** SLIDE (pop) con back button

**Header:** Back button + título del item seleccionado (ej: "Usage", "Responses", etc.)

**Estructura base del componente:**
- Label "Where you'll be notified"
- Container "Push" + switch toggle (on/off)
- Container "Email" + switch toggle (on/off)
- Texto descriptivo debajo

**Variantes por pantalla:**

| Pantalla | Containers visibles | Texto descriptivo |
|---|---|---|
| Responses | Solo Push | "Get notified when ChatGPT responds to requests that take time, like research or image generation." |
| Group chats | Solo Push | "You'll receive notifications for new messages from group chats." |
| Tasks | Push + Email | "Get notified when tasks you've created have updates." |
| Projects | Solo Email | "Get notified when you receive an email invitation to a shared project." |
| Recommendations | Push + Email | "Stay in the loop on new tools, tips, and features from ChatGPT." |
| Usage | Push + Email | "We'll notify you when limits reset for features like image creation." |

**Acciones de los botones (todas las variantes):**
- **Back button** → Vuelve a notifications screen con SLIDE (pop)
- **Push switch** (si visible) → Toggle on/off
- **Email switch** (si visible) → Toggle on/off

**Relación:** Desde settings/01h → sub-pantalla. Back → settings/01h

---

## 01i_speech-screen.png

**Acción previa:** Tap en "Voice" desde settings/01-auth

**Animación de entrada:** SLIDE (push)
**Animación de salida:** SLIDE (pop) con back button

**Header:** Back button + título "Speech"

**Contenido (lista de containers):**
- **Input language** (subtítulo "Auto-Detect") + chevron-icon (right) → Abre modal de idiomas → ver 01i_speech-input-language-modal.png
- Texto descriptivo: "For best results, select the language you mainly speak. If it's not listed, it may still be supported via auto-detection."
- **Voice** (subtítulo "Cove") → No presionable
- **Separate mode** + switch (off) → Toggle on/off
- **Background conversations** (subtítulo "Keep the conversation going in other apps or while your screen is off.") + switch (on) → Toggle on/off
- **Use as default assistant** (subtítulo "Set ChatGPT as your default digital assistant in Android settings.") + switch (off) → Toggle on/off

**Nota:** En los containers con switch, TODO el container es presionable (no solo el switch). Al presionar cualquier parte del container, se toglea el switch.

**Acciones de los botones:**
- **Back button** → Vuelve a settings/01-auth con SLIDE (pop)
- **Input language container** → Abre Input Language Modal
- **Separate mode container** → Toggle switch on/off
- **Background conversations container** → Toggle switch on/off
- **Use as default assistant container** → Toggle switch on/off

**Relación:** Desde settings/01-auth → settings/01i. Back → settings/01-auth

---

## 01i_speech-input-language-modal.png

**Acción previa:** Tap en container "Input language" desde settings/01i_speech-screen

**Animación de entrada:** FADE in
**Animación de salida:** FADE out

**Cambios en el botón trigger:**
- El chevron-icon del container "Input language" rota y apunta en dirección contraria (indicando modal abierto)

**Contenido:** Lista scrolleable de idiomas. El idioma seleccionado muestra checkmark (✓). Lista incluye:
- Auto-Detect (con checkmark si seleccionado)
- Arabic
- Bosnian
- Bulgarian
- Catalan
- Chinese
- Croatian
- Czech
- Danish
- Dutch
- (continúa scrolleando)

**Comportamiento del backdrop:** NO tiene opacidad visible (mismo patrón que Accent Color Modal)

**Acciones de los botones:**
- **[Cualquier idioma]** → Selecciona el idioma y cierra modal
- **Backdrop** → Cierra modal

**Relación:** Desde settings/01i → cierra → vuelve a settings/01i

---

## 01j_data-controls-screen.png

**Acción previa:** Tap en "Data controls" desde settings/01-auth

**Animación de entrada:** SLIDE (push)
**Animación de salida:** SLIDE (pop) con back button

**Header:** Back button + título "Data controls"

**Contenido (agrupado por secciones):**

**Sección 1 (sin título):**
- **Improve the model for everyone** + switch (on) → Toggle switch on/off
- Texto descriptivo: "Allow your content to be used to improve our models for you and other users. We take steps to protect your privacy. Learn more"
- **Export Data** → No hace nada (TouchableOpacity sin acción)
- **Delete OpenAI account** (texto rojo) → No hace nada (TouchableOpacity sin acción)

**Sección "Voice":**
- **Include your audio recordings** + switch (off) → Toggle switch on/off
- **Include your video recordings** + switch (on) → Toggle switch on/off
- Texto descriptivo: "Include your audio or video recordings from Voice to train our models. Transcripts and other files are covered by Improve the model for everyone. Learn more"

**Sección "Chat history":**
- **View archived chats** → No hace nada (TouchableOpacity sin acción)
- **Archive chat history** → No hace nada (TouchableOpacity sin acción)
- **Clear chat history** (texto rojo) → No hace nada (TouchableOpacity sin acción)

**Nota:** En TODOS los containers, todo el container es presionable (no solo el texto o el switch).

**Acciones de los botones:**
- **Back button** → Vuelve a settings/01-auth con SLIDE (pop)
- **Improve the model for everyone container** → Toggle switch on/off
- **Include your audio recordings container** → Toggle switch on/off
- **Include your video recordings container** → Toggle switch on/off
- **Export Data, Delete OpenAI account, View archived chats, Archive chat history, Clear chat history** → No hacen nada (TouchableOpacity sin acción)

**Relación:** Desde settings/01-auth → settings/01j. Back → settings/01-auth

---

## 01k_security-screen.png

**Acción previa:** Tap en "Security" desde settings/01-auth

**Animación de entrada:** SLIDE (push)
**Animación de salida:** SLIDE (pop) con back button

**Header:** Back button + título "Security"

**Contenido (agrupado por secciones):**

**Sección 1 (sin título):**
- **Passkeys** (right: "Add" + chevron) → Abre Passkeys screen con SLIDE (push) → ver 01k_security-passkeys-screen.png

**Sección "MULTI-FACTOR AUTHENTICATION (MFA)":**
- **Authenticator app** (right: "Off" + chevron) → Abre Authenticator app screen con SLIDE (push) → ver 01k_security-authenticator-screen.png
- **Push notifications** (right: "Off" + chevron) → Abre Push notifications screen con SLIDE (push) → ver 01k_security-push-notifications-screen.png
- **Text message** (right: "Off" + chevron) → Abre Text message screen con SLIDE (push) → ver 01k_security-text-message-screen.png
- Texto descriptivo: "Require an extra security challenge when logging in. If you are unable to pass this challenge, you will have the option to recover your account."

**Nota:** En TODOS los containers, todo el container es presionable (no solo el texto o los iconos chevron).

**Acciones de los botones:**
- **Back button** → Vuelve a settings/01-auth con SLIDE (pop)
- **Passkeys container** → Abre Passkeys screen
- **Authenticator app container** → Abre Authenticator app screen
- **Push notifications container** → Abre Push notifications screen
- **Text message container** → Abre Text message screen

**Relación:** Desde settings/01-auth → settings/01k. Back → settings/01-auth

---

## 01k_security-passkeys-screen.png

**Acción previa:** Tap en "Passkeys" desde settings/01k_security-screen

**Animación de entrada:** SLIDE (push)
**Animación de salida:** SLIDE (pop) con back button

**Header:** Back button + título "Passkeys"

**Contenido (centrado):**
- Ícono de passkey (centrado)
- Título "Add a passkey"
- Texto descriptivo: "Passkeys are more secure than a password and adding one takes less than a minute."
- Botón "Create a passkey" (fondo blanco, texto negro, full width)

**Acciones de los botones:**
- **Back button** → Vuelve a security screen con SLIDE (pop)
- **"Create a passkey" button** → No hace nada (TouchableOpacity sin acción)

**Relación:** Desde settings/01k → settings/01k-passkeys. Back → settings/01k

---

## 01k_security-authenticator-screen.png

**Acción previa:** Tap en "Authenticator app" desde settings/01k_security-screen

**Animación de entrada:** SLIDE (push)
**Animación de salida:** SLIDE (pop) con back button

**Header:** Back button + título "Authenticator app"

**Contenido:**
- Label "GET CODES TO VERIFY LOG INS"
- Container "Authenticator app" + switch (off)
- Texto descriptivo: "Use an authenticator app to generate one-time codes when you sign in. Turning this on will guide you through setup."

**Nota:** Todo el container es presionable (no solo el texto o el switch).

**Acciones de los botones:**
- **Back button** → Vuelve a security screen con SLIDE (pop)
- **Authenticator app container** → Toggle switch on/off

**Relación:** Desde settings/01k → settings/01k-authenticator. Back → settings/01k

---

## 01k_security-push-notifications-screen.png

**Acción previa:** Tap en "Push notifications" desde settings/01k_security-screen

**Animación de entrada:** SLIDE (push)
**Animación de salida:** SLIDE (pop) con back button

**Header:** Back button + título "Push notifications"

**Contenido:**
- Label "GET PROMPTS TO YOUR DEVICE TO VERIFY LOG INS"
- Container "Push notifications" + switch (off)
- Texto descriptivo: "Prompts go to your trusted devices where you are already signed in."

**Nota:** Todo el container es presionable (no solo el texto o el switch).

**Acciones de los botones:**
- **Back button** → Vuelve a security screen con SLIDE (pop)
- **Push notifications container** → Toggle switch on/off

**Relación:** Desde settings/01k → settings/01k-push-notifications. Back → settings/01k

---

## 01k_security-text-message-screen.png

**Acción previa:** Tap en "Text message" desde settings/01k_security-screen

**Animación de entrada:** SLIDE (push)
**Animación de salida:** SLIDE (pop) con back button

**Header:** Back button + título "Text message"

**Contenido:**
- Label "GET CODES TO VERIFY LOG INS"
- Container "Text message" + switch (off)
- Texto descriptivo: "Get 6-digit verification codes by SMS or WhatsApp based on your country code."

**Nota:** Todo el container es presionable (no solo el texto o el switch).

**Acciones de los botones:**
- **Back button** → Vuelve a security screen con SLIDE (pop)
- **Text message container** → Toggle switch on/off

**Relación:** Desde settings/01k → settings/01k-text-message. Back → settings/01k

---

## 01l_about-screen-auth.png

**Acción previa:** Tap en "About" desde settings/01-auth

**Animación de entrada:** SLIDE (push)
**Animación de salida:** SLIDE (pop) con back button

**Header:** Back button + título "About"

**Contenido (lista de containers):**
- **Help center** → No hace nada (TouchableOpacity sin acción)
- **Terms of use** → No hace nada (TouchableOpacity sin acción)
- **Privacy policy** → No hace nada (TouchableOpacity sin acción)
- **Licenses** → Abre Open source licenses screen con SLIDE (push) → ver 01l_about-licenses-screen.png
- **ChatGPT for Android** (subtítulo "1.2026.027 (30)") → No hace nada (TouchableOpacity sin acción)

**Nota:** En TODOS los containers, todo el container es presionable (no solo el texto o el ícono).

**Acciones de los botones:**
- **Back button** → Vuelve a settings/01-auth con SLIDE (pop)
- **Licenses container** → Abre Open source licenses screen

**Relación:** Desde settings/01-auth → settings/01l. Back → settings/01-auth

---

## 01l_about-licenses-screen.png

**Acción previa:** Tap en "Licenses" desde settings/01l_about-screen-auth

**Animación de entrada:** SLIDE (push)
**Animación de salida:** SLIDE (pop) con back button

**Header:** Back button + título "Open source licenses"

**Contenido:** Lista larga scrolleable de items de licencias. Todos los items tienen exactamente la misma estructura:
- Título de la librería (left) + versión (right)
- Autor (debajo del título)
- Badge con tipo de licencia (ej: "Apache License 2.0")

Los items son TouchableOpacity (presionables) pero no realizan ninguna acción.

**Acciones de los botones:**
- **Back button** → Vuelve a about screen con SLIDE (pop)

**Relación:** Desde settings/01l → settings/01l-licenses. Back → settings/01l
