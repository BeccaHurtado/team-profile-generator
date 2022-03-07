const Engineer = require('../util/Engineer')

test('checks engineer object', () => {
    const engineer = new Engineer('')

    expect(typeof(engineer)).toBe("object")
})

test('creates a new engineer', () => {
    const engineer = new Engineer('Becca')

    expect(engineer.name).toBe("Becca")
})

test('creates engineer ID', () => {
    const engineer = new Engineer("Becca", 12)

    expect(engineer.id).toBe(12)
})
test('creates engineer email', () => {
    const engineer = new Engineer("Becca", 12, "becca@gmail.com")

    expect(engineer.email).toBe("becca@gmail.com")
})

test('creates engineer github', () => {
    const engineer = new Engineer("Becca", 12, "becca@gmail.com", "beccah")

    expect(engineer.github).toBe("beccah")
})


test('gets engineer id', () => {
    const engineer = new Engineer("Becca", 12, "BeccaHurtado")

    expect(engineer.getId()).toBe(12)
})
test('gets engineer email', () => {
    const engineer = new Engineer("Becca", 12, "becca@gmail.com")

    expect(engineer.getEmail()).toBe("becca@gmail.com")
})
test('gets engineer name', () => {
    const engineer = new Engineer("Becca", 12, "becca@gmail.com")

    expect(engineer.getName()).toBe("Becca")
})
test('gets engineer github', () => {
    const engineer = new Engineer("Becca", 12, "becca@gmail.com", "beccah")

    expect(engineer.getGitHub()).toBe("beccah")
})
test('gets engineer role', () => {
    const engineer = new Engineer("Becca", 12, "becca@gmail.com")

    expect(engineer.getRole()).toBe("Engineer")
})