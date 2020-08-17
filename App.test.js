const { hello } = require('./hello')

test('basic test', () => {
   expect(hello).toBeDefined()
})
