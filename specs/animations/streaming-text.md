# Streaming Text Animation — "Progressive Word Reveal with Fade-In"

Animación más importante y visible de la app. Debe sentirse idéntica a ChatGPT.

## Descripción del efecto visual

- El texto aparece palabra por palabra, muy rápido (~2-3 líneas por segundo)
- Cada palabra nueva hace fade-in (opacity 0 → 1, duración ~300ms, easing ease-out)
- Las palabras ya reveladas permanecen estáticas a opacity 1
- El contenedor de texto crece naturalmente línea por línea
- El chat auto-scrollea siguiendo el texto nuevo
- Efecto final: "texto escribiéndose a sí mismo"

## Parámetros de timing

- Intervalo entre palabras: ~60ms (~16 palabras/segundo ≈ 2-3 líneas/segundo)
- Fade-in por palabra: 300ms con easing Easing.out(Easing.ease)
- Auto-scroll: animated, solo cuando contenido excede altura visible

## Estructura de implementación

1. Texto completo se divide en array de palabras
2. Estado visibleWordCount incrementa progresivamente con setInterval(60ms)
3. Cada palabra se renderiza con entering={FadeIn.duration(300)}
4. Container padre usa flexDirection: 'row' + flexWrap: 'wrap' para line-breaks naturales
5. Cada palabra tiene marginRight para spacing

## Transición Loading → Streaming

- Texto "Thinking..." shimmer desaparece con FadeOut.duration(200)
- Reveal de palabras comienza inmediatamente (sin gap visible)

## Al completar streaming

- Timer se detiene cuando todas las palabras son visibles
- Action bar aparece con FadeIn.duration(300)
- Stop button cambia a Send button (instantáneo)

## Alternativa de implementación

Si entering={FadeIn} no funciona con Text inline, usar useAnimatedStyle:
- SharedValue opacity comienza en 0
- withTiming a 1 con duration 300ms al montar cada palabra

## Librerías de referencia

- react-native-redash: utilidades para texto animado
- @gorhom/bottom-sheet: si se necesita integrar con scroll
