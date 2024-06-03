interface Task {
  id: number;
  name: string;
  status: "in-progress" | "done" | "todo";
}

const tarea: Task = {
  id: 15,
  name: "Estudiar TypeScript",
  status: "in-progress",
};

const nuevaTarea: Task = {
  id: "15",
  title: "Estudiar TDD",
  status: "en progreso",
};

const newTask: Task = {
  id: 16,
  name: "Seguir estudiando TDD",
  status: "done",
};

const tasks = [nuevaTarea, tarea];

tasks[0].id;
