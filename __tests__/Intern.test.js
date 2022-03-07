const Intern = require('../util/Intern')

test('checks intern object', () => {
    const intern = new Intern('')

    expect(typeof(intern)).toBe("object")
})

test('creates a new intern', () => {
    const intern = new Intern('Becca')

    expect(intern.name).toBe("Becca")
})

test('creates intern ID', () => {
    const intern = new Intern("Becca", 12)

    expect(intern.id).toBe(12)
})
test('creates intern email', () => {
    const intern = new Intern("Becca", 12, "becca@gmail.com")

    expect(intern.email).toBe("becca@gmail.com")
})

test('creates intern school', () => {
    const intern = new Intern("Becca", 12, "becca@gmail.com", "UofA")

    expect(intern.schoolName).toBe("UofA")
})


test('gets intern id', () => {
    const intern = new Intern("Becca", 12, "BeccaHurtado")

    expect(intern.getId()).toBe(12)
})
test('gets intern email', () => {
    const intern = new Intern("Becca", 12, "becca@gmail.com")

    expect(intern.getEmail()).toBe("becca@gmail.com")
})
test('gets intern name', () => {
    const intern = new Intern("Becca", 12, "becca@gmail.com")

    expect(intern.getName()).toBe("Becca")
})
test('gets intern school name', () => {
    const intern = new Intern("Becca", 12, "becca@gmail.com", "UofA")

    expect(intern.getSchoolName()).toBe("UofA")
})
test('gets intern role', () => {
    const intern = new Intern("Becca", 12, "becca@gmail.com")

    expect(intern.getRole()).toBe("Intern")
})