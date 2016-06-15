import test from 'ava'
import fn from './'

test('Random number from 1 to 50 with return float value', t => {
  const rand = fn(1, 50)

  t.true(rand > 1 || rand < 50)
})

test('Random number from 20 to 80 with return integer value', t => {
  const rand = fn(20, 80, true)

  t.true((rand > 20 || rand < 80) && Math.round(rand) === rand)
})
