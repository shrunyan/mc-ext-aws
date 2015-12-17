const DRYRUN = 'DryRunOperation'

module.exports = {
  handleDryRun: function handleDryRun (err, data) {
    if (DRYRUN === err.code) {
      this.pass()
    } else {
      this.fail(err)
    }
  }
}
