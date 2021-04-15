import {
  Database,
  DataSource,
  Environment,
  Instance,
  Project,
  TaskId,
} from "../types";
import slug from "slug";

export function idFromSlug(slug: string) {
  const parts = slug.split("-");
  return parts[parts.length - 1];
}

export function taskSlug(taskName: string, taskId: TaskId) {
  return [slug(taskName), taskId].join("-");
}

// On the other hand, it's not possible to de-slug due to slug's one-way algorithm
export function environmentSlug(environment: Environment): string {
  return [slug(environment.name), environment.id].join("-");
}

export function projectSlug(project: Project) {
  return [project.key, slug(project.name), project.id].join("-");
}

export function instanceSlug(instance: Instance): string {
  return [
    slug(instance.environment.name),
    slug(instance.name),
    instance.id,
  ].join("-");
}

export function databaseSlug(database: Database): string {
  return [slug(database.name), database.id].join("-");
}

export function dataSourceSlug(dataSource: DataSource): string {
  return [slug(dataSource.name), dataSource.id].join("-");
}

export function fullDatabasePath(database: Database): string {
  return `/db/${databaseSlug(database)}`;
}

export function fullDataSourcePath(dataSource: DataSource): string {
  return `/db/${databaseSlug(dataSource.database)}/datasource/${dataSourceSlug(
    dataSource
  )}`;
}
