Type Alias vs Interface in TypeScript

Both type and interface define the shape of data in TypeScript, but they have some key differences.

Examples

Type Alias:

ts
type User = {
name: string;
age: number;
};

type Status = "active" | "inactive";

Interface:

ts
interface User {
name: string;
age: number;
}

interface Admin extends User {
role: string;
}

When to Use Which?
Use interface when defining object shapes, classes, or APIs that may need extension or declaration merging.
Use type when working with unions, intersections, primitives, tuples, or more complex type combinations.
Conclusion

Both are useful and often interchangeable for object definitions.

Rule of thumb: Prefer interface for object structures and type for everything else. However, choose based on your project's conventions and requirements.
