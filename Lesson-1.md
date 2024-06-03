# Clase de Pablo: Capacitación FOR IT - Clase 1 (minuto 18:27)

## Razones por las que introducimos bugs:

- **Sintaxis incorrecta** (errores de tipeo, etc).
- **Tipos de datos incorrectos** (número en vez de string, etc).
- **Comportamiento incorrecto** (sumo dos veces algo que debería sumarse una sola vez, etc).
- **Lógica incorrecta** (no se contempla un caso, no entiendo el problema que estoy intentando resolver, etc).
- **Las dependencias cambian** de tal manera que generan cambios de comportamiento o **excepciones**.

---

## TypeScript:

Superset de JavaScript que le otorga a **JS** la capacidad de definir **TIPOS**.

Usando **_interfaces_** podemos declarar la estructura que tendrá un objeto:

```typescript
interface Task {
  id: number;
  name: string;
  status: "in-progress" | "done" | "todo";
}
```

De esta forma el _id_ espera un `number`, el _name_ un `string` y el _status_ solo aceptará un string `in-progress`, `done` o `todo`, caso contrario arrojará error.

```typescript
const tarea: Task = {
  id: 15,
  name: "Estudiar TypeScript",
  status: "in-progress",
}; // no arrojará ningún error
```

```typescript
const nuevaTarea: Task = {
  id: "15",
  title: "Estudiar TDD",
  status: "en progreso",
};
// arrojará que el tipo de "id" es un "string" y espera un "number"
// arrojará que el tipo "en progreso" no es correcto porque espera "in-progress", "done" o "todo"
```

Como ya tenemos definida la `interface`, con **ctrl + space** podemos acceder a las propiedades del objeto `Task`, de esta forma creamos nuestro objeto sin errores.

```typescript
const newTask: Task = {
  id: 16,
  name: "Seguir estudiando TDD",
  status: "done",
};
```
