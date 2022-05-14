import { jams } from 'jams.js'
import { test } from 'tapzero'
import { readdirSync, readFileSync } from 'fs'

export function casetest(dir, f) {
    const cases = readdirSync(dir)
    cases.forEach(filename => {
        const file = readFileSync(dir + '/' + filename) // TODO os.path
        let data
        if (filename.endsWith('json')) {
            data = JSON.parse(file)
        } else if (filename.endsWith('jams')) {
            data = jams(file)
        } else {
            throw new Error('Must use .jams or .json (saw ${filename})')
        }
        test(`file ${filename}\nnote ${data.note}`, t=>{
            t.ok(data.func, 'no test func')
            t.ok(data.args, 'no test args')
            t.ok(data.want, 'no test want')
            t.equal(data.want.length, 2,
                    'want length must be 2, must use result type')

            f(t, data)
        })
    })
}
