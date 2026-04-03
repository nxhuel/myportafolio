export const prompts = {
  generateReadme: (context) => `
Sos un Ingeniero de Software Senior.

Tu tarea es generar documentación técnica profesional en formato Markdown (.md).

Generá un archivo README.md profesional para este proyecto.

Contexto del proyecto:
${context}

Requisitos:

1. Explicar el sistema de forma clara y estructurada
2. Usar lenguaje profesional (nivel senior)
3. El README debe incluir secciones como:

# 📌 Nombre del módulo / sistema

# 🔎Indice

## 🧠 Descripción general
Explicación clara del propósito

## 🚀 Tecnologías
Lista de tecnologías usadas

## 🏗️ Arquitectura
Explicación de cómo está estructurado

## 📊 Diagrama UML (usar mermaid)
Ejemplo:
\`\`\`mermaid
classDiagram
Class01 <|-- Class02
\`\`\`

## 🔄 Flujo de funcionamiento
Paso a paso

## 📁 Estructura de archivos
Explicar carpetas y responsabilidades

## 📋 Tabla de responsabilidades
| Componente | Responsabilidad |
|-----------|---------------|

## ⚙️ Buenas prácticas aplicadas
- Clean code
- separación de responsabilidades
- etc

## 🚀 Posibles mejoras
Sugerencias reales de mejora

## 📦 Instalación
Pasos para correr el proyecto

## ▶️ Uso
Cómo usarlo

Reglas IMPORTANTES:
- NO usar json
- NO usar markdown fuera del campo content
- El JSON debe ser válido y completo
- No cortar la respuesta


{
  "action": "write_readme",
  "content": "markdown completo"
}
`
};
