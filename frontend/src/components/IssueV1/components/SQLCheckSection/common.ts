import type { ComposedIssue } from "@/types";
import { Plan_ChangeDatabaseConfig_Type } from "@/types/proto/v1/plan_service";
import { Release_File_ChangeType } from "@/types/proto/v1/release_service";
import type { Task } from "@/types/proto/v1/rollout_service";
import { specForTask } from "../../logic";

export const getTaskChangeType = (
  issue: ComposedIssue,
  task: Task
): Release_File_ChangeType => {
  const spec = specForTask(issue.planEntity, task);
  switch (spec?.changeDatabaseConfig?.type) {
    case Plan_ChangeDatabaseConfig_Type.MIGRATE:
      return Release_File_ChangeType.DDL;
    case Plan_ChangeDatabaseConfig_Type.MIGRATE_GHOST:
      return Release_File_ChangeType.DDL_GHOST;
    case Plan_ChangeDatabaseConfig_Type.DATA:
      return Release_File_ChangeType.DML;
  }
  // Default to DML if no type is specified.
  return Release_File_ChangeType.DML;
};
