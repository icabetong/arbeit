import { getTask } from "../../data/task";

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  if (id) {
    const projectId = parseInt(id, 10);
    return await getTask(projectId);
  }

  setResponseStatus(event, 400);
});
