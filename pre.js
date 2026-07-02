const msg =
  'This Action has moved to bcgov/actions/get-pr. ' +
  'Please update your workflow to use bcgov/actions/get-pr instead. ' +
  'See: https://github.com/bcgov/actions/tree/main/get-pr'

// Use GitHub Actions workflow command directly (no dependency on @actions/core)
process.stdout.write(`::warning::${msg}\n`)
