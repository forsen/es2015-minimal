import Assert from 'assert'
import Greeter from '../src'

describe('Initial test', () => {
	it('Should return "Hello World!"', () => {
		const greeter = Greeter()
		Assert.equal(greeter.greet(), 'Hello World')
	})
})
