const Manager = require('../util/manager')

test('checks manager object', () => {
    const manager = new Manager('')

    expect(typeof(manager)).toBe("object")
})

test('creates a new manager', () => {
    const manager = new Manager('Becca')

    expect(manager.name).toBe("Becca")
})

test('creates manager ID', () => {
    const manager = new Manager("Becca", 12)

    expect(manager.id).toBe(12)
})

test('creates manager email', () => {
    const manager = new Manager("Becca", 12, "becca@gmail.com")

    expect(manager.email).toBe("becca@gmail.com")
})
test('creates manager office number', () => {
    const manager = new Manager("Becca", 12, "becca@gmail.com", 70)

    expect(manager.officeNumber).toBe(70)
})


test('gets manager id', () => {
    const manager = new Manager("Becca", 12, "BeccaHurtado")

    expect(manager.getId()).toBe(12)
})
test('gets manager email', () => {
    const manager = new Manager("Becca", 12, "becca@gmail.com")

    expect(manager.getEmail()).toBe("becca@gmail.com")
})
test('gets manager name', () => {
    const manager = new Manager("Becca", 12, "becca@gmail.com")

    expect(manager.getName()).toBe("Becca")
})
test('gets manager office number', () => {
    const manager = new Manager("Becca", 12, "becca@gmail.com", 70)

    expect(manager.getOfficeNumber()).toBe(70)
})
test('gets manager role', () => {
    const manager = new Manager("Becca", 12, "becca@gmail.com")

    expect(manager.getRole()).toBe("Manager")
})