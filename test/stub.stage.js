'use strict'

const DRYRUN = 'DryRunOperation'

let stage = {
  events: {},
  succeed: data => stage.trigger('pass', data),
  fail: err => {
    // Keep the stage interface accurate
    // but handle dryrun tests
    if (err.code === DRYRUN) {
      stage.trigger('pass', err)
    } else {
      stage.trigger('fail', err)
    }
  },
  options: () => stage._opts,
  log: msg => console.log(msg),
  on: (action, cb) => stage.events[action] = cb,
  trigger: (action, msg) => stage.events[action](msg)
}

module.exports = stage
