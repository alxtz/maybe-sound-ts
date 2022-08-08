/* use of "any" */

// normal
const obj1 = JSON.parse(`{ "name": "John" }`); // returns any, leads to unpredictable behavior
obj1.name.length; // unsafe, any

// better
import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
});

const obj2 = UserSchema.safeParse(JSON.parse(`{ "name": "John" }`));
if (obj2.success) {
  obj2.data.name.length; // (property) String.length: number
}
