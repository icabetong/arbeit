import { createTask } from "../../data/task";

export default defineEventHandler(async (event) => {
  const { task } = await readBody(event);
  const result = createTask(task);
  return result;
});
