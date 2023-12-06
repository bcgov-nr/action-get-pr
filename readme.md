<!-- Badges -->
[![Issues](https://img.shields.io/github/issues/bcgov-nr/action-get-pr)](/../../issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/bcgov-nr/action-get-pr)](/../../pulls)
[![MIT License](https://img.shields.io/github/license/bcgov-nr/action-get-pr.svg)](/LICENSE)
[![Lifecycle](https://img.shields.io/badge/Lifecycle-Experimental-339999)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

# Get PR Number - Merges and Queues

PR numbers are easy to come by in PRs, but passing those same numbers to merge queues and PR-backed merges can get tricky.  This action makes that convenient in the following cases:
* PR merge queues
* Merged PR workflows
* PRs themselves (just for consistency)

# Usage

The build will return a PR number as output.

```yaml
- id: vars
  uses: bcgov-nr/action-get-pr@vX.Y.Z

- name: Echo PR number
  run: echo "PR: ${{ steps.vars.outputs.pr }}"
```

# Private Repositories

Private repositories may need to provide a GitHub token.

```yaml
- id: vars
  uses: bcgov-nr/action-get-pr@vX.Y.Z
  with:
    token: ${{ secrets.GITHUB_TOKEN }}

- name: Echo PR number
  run: echo "PR: ${{ steps.vars.outputs.pr }}"
```

<!-- # Acknowledgements

This Action is provided courtesty of Forestry Digital Services, part of the Government of British Columbia. -->
