const multiplyValue = (value: number, multiplier: number = 2): number => {
    return value * multiplier
}
console.log(multiplyValue(10))
console.log(multiplyValue(10, 5))
console.log(multiplyValue(7, 0))


const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === "string") {
        return value.trim().toLowerCase()
    }
    if (typeof value == "number") {
        return value * 10
    }
    return value ? "Active" : "Inactive"
}
console.log(processInput("  TypeScript  "))
console.log(processInput(7))
console.log(processInput(true))
console.log(processInput(false))


const formatCoordinate = ([latitude, longitude, locationName]: readonly [number, number, string]): string => {
    return `Location: ${locationName} (${latitude}, ${longitude})`
}
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));



const concatenateArrays = <T>(...array: T[][]): T[] => {
    return array.reduce((outputArray, x) => [...outputArray, ...x], [] as T[])
}
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));



interface Course {
    title: string,
    students: number,
    isPublished: boolean
}
const getPopularCourses = (courses: Course[], minStudents: number) => {
    return courses.filter(({ students, isPublished }) => isPublished && students >= minStudents)
}
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
console.log(getPopularCourses(courses, 80));



const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.reduce((keyValues, currentValue) => [...keyValues, currentValue[key]], [] as T[K][])
}
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));



class Employee {
    constructor(protected name: string, private baseSalary: number) { }

    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}
class Manager extends Employee {
    constructor(name: string, baseSalary: number, private department: string) {
        super(name, baseSalary)
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`
    }
}
const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());
console.log(manager.getRoleInfo());



const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted")
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    })
}
try {
    console.log(await validateAgeAsync(20));
    console.log((await validateAgeAsync(15)));
} catch (error) {
    if (error instanceof Error)
        console.log(error.message)
    else
        console.log(error)
}


