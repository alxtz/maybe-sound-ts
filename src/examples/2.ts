/* use of "Type Assertions" */

export enum Status {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

// normal
function exec1(action: string): Status | null {
  if (Object.values(Status).includes(action)) {
    const enumVal = action as Status; // it's common because buitlin typedefs are weak, but arguebly as bad as "any"
    return enumVal;
  }

  return null;
}

// better
import { z } from "zod";

function exec(action: string): Status | null {
  const Schema = z.nativeEnum(Status);

  const resp = Schema.safeParse(action);

  if (resp.success) {
    return resp.data; // (property) data: Status
  }

  return null;
}
