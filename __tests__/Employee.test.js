const Employee = require('../util/Employee')

test('checks employee object', () => {
    const employee = new Employee('')

    expect(typeof(employee)).toBe("object")
})

test('creates a new employee', () => {
    const employee = new Employee('Becca')

    expect(employee.name).toBe("Becca")
})

test('creates employee ID', () => {
    const employee = new Employee("Becca", 12)

    expect(employee.id).toBe(12)
})

test('creates employee email', () => {
    const employee = new Employee("Becca", 12, "becca@gmail.com")

    expect(employee.email).toBe("becca@gmail.com")
})


test('gets employee id', () => {
    const employee = new Employee("Becca", 12, "becca@gmail.com")

    expect(employee.getId()).toBe(12)
})
test('gets employee email', () => {
    const employee = new Employee("Becca", 12, "becca@gmail.com")

    expect(employee.getEmail()).toBe("becca@gmail.com")
})
test('gets employee name', () => {
    const employee = new Employee("Becca", 12, "becca@gmail.com")

    expect(employee.getName()).toBe("Becca")
})
test('gets employee role', () => {
    const employee = new Employee("Becca", 12, "becca@gmail.com")

    expect(employee.getRole()).toBe("Employee")
})

