import { test } from 'tapzero'
import { readdirSync, readFileSync } from 'fs'

export function casetest(dir, f) {
    const cases = readdirSync(dir)
    cases.forEach(file => {
        test(`file ${file}`, t=>{
            const data = readFileSync(dir + '/' + file) // TODO os.path
            const test = JSON.parse(data)
            t.ok(test.func, 'no test func')
            t.ok(test.args, 'no test args')
            t.ok(test.args, 'no test want')
            t.equal(test.args.length, 2,
                    'args length is not 2, must use result type')
        })
    })
}
