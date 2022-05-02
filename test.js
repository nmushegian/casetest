import { test } from 'tapzero'
import { casetest } from './casetest.js'

const lib = {}
lib.adder =(a,b)=> a+b

test('meta', t=>{
    casetest('case', (func,args,[err, val]) => {
        t.equal(err, '')
        t.equal(val, lib[func](...args))
    })
})
