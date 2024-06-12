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
  id: 15,
  name: "Estudiar TDD",
  status: "in-progress",
};

const newTask: Task = {
  id: 16,
  name: "Seguir estudiando TDD",
  status: "done",
};

const tasks = [nuevaTarea, tarea];

tasks[0].id;
