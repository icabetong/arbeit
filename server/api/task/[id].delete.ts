import { removeTask } from "../../data/task";

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  if (id) {
    const taskId = parseInt(id, 10);
    let result = removeTask(taskId);
    return result;
  }

  setResponseStatus(event, 400);
});
