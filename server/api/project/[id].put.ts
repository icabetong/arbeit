import { updateProject } from "../../data/project";

export default defineEventHandler(async (event) => {
  const { project } = await readBody(event);
  const id = event.context.params?.id;

  if (id) {
    const projectId = parseInt(id, 10);
    let result = updateProject(projectId, project);
    return result;
  }

  setResponseStatus(event, 400);
});
