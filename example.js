import { casetest } from './casetest.js'

const lib = {}
lib.adder =(a,b)=> [0, a+b] // result type


casetest('./case', (t, {func,args,want})=>{
    // map it onto your lib
    // e.g. fromHex
    let [err, ret] = lib[func](...args)
    console.log(ret)
    t.ok(!err)
    t.equal(ret, want[1])
})

