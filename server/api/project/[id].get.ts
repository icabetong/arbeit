import { getProject } from "../../data/project";

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  if (id) {
    const projectId = parseInt(id, 10);
    return await getProject(projectId);
  }

  setResponseStatus(event, 400);
});
