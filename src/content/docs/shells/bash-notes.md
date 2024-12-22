---
title: Bash notes
description: Tips and tricks for bash scripting
---

## Variables

### Check if variable is unset or empty

Also works with `[` .

```bash
if [[ -n "${var}" ]]; then
  echo "var is set to '${var}'"
else
  echo "var is unset or empty"
fi
```

### Check if variable is unset

Also works with `[` .

```bash
if [[ -n "${var+x}" ]]; then
  echo "var is set to '${var}'"
else
  echo "var is unset or empty"
fi
```

### Parameter substitution

Almost all substitution operators work with and without `:`. If `:` is used then the default value is substituted both when variable is *unset* or *empty*. If `:` is not used, then the default is substituted only when the variable is *unset*.

```bash
# If ABC is unset or empty use a default
XYZ="${ABC:-default}"

# If ABC is unset or empty write message to stderr and exit with error
XYZ="${ABC:?error message}"

# If ABC is unset or empty assign a default to it
# colon (:) is required to not interpret the rest as a command
: "${ABC:=default}"
# this can also be used in other places
XYZ="${ABC:=/tmp}/path/to/somewhere"
# After that ABC is set to '/tmp' if it was unset or empty before

# Substitute variable with a name which is taken from another variable
VAR_NAME="ABC"
XYZ="${!VAR_NAME}"
```

## Functions

### Report fatal errors

```bash
oops() {
    echo "$0:" "$@" >&2
    exit 1
}

# Oneliner:
oops() { echo "$0:" "$@" >&2; exit 1; }

# Inline usage
false || oops "you do not have '$1' installed, which I need to $2"

# Usage
if [ -z "${MYVAR}" ]; then
  # ...doing more commands...
  oops "Something went wrong, please check ${ARGS}"
fi
```

## Common

### Use `env` in shebang to locate shell without hardcoding a path to it

This will allow the script to find the shell even if it is installed into an non-common location by the user.

```bash
#!/usr/bin/env sh
#!/usr/bin/env bash
#!/usr/bin/env zsh
```

### Run command in another directory using sub-shell

```bash
ABC=abc
# parentheses create a sub-shell which sees all vars from the current shell
# but `cd` does not affect current shell
(cd path/to/another/dir; echo "${ABC}"; ls)
```

### Create a temporary directory and remove it when script finishes in any way

```bash
# Note: specifying absolute prefix for tmp file may fail on MacOS
tmpDir="$(mktemp -d -t mytmp.XXXXXXXXXX || oops "Can't create temporary directory")"
cleanup() {
  rm -rf "$tmpDir"
}
trap cleanup EXIT INT QUIT TERM

# Oneliner clean-up: trap "rm -rf $tmpDir" EXIT INT QUIT TERM
```

### Exit script if any of the commands returned non-zero code

```bash
set -e

# Still possible to handle errors for commands in subshells
# XYZ=$(false || echo some_default)

# use `set +e` to disable this behaviour
```

### Dot operator is the same as `source`

```bash
# Dot operator is the same as `source` command,
# which executes or sources given script in the current shell
. path/to/my/script.sh
```

## Tricks

### Prevent execution of non-complete scripts

If the last line of the file is not copied, then the shell won't be able to parse the script because of the missing curly bracket, so the partial script will never run.

```bash
#!/usr/bin/env sh

# Wrap the whole script into {}
{

echo Hello!

} # end of wrapper
```

### Run command without saving it into history

First, make sure variable `HISTCONTROL` is set either to `ignorespace` or `ignoreboth`.

Then any command that starts with an extra space will not be recorded to history.

```bash
$ echo blah # is saved to history
$  echo wow # is NOT saved to history
```

### Get script directory to access any files relative to the script's location

```bash
SCRIPT_DIR="$(dirname "$0")"
```

## External links

- [Is double square brackets [[ ]] preferable over single square brackets [ ] in Bash?](https://stackoverflow.com/a/47576482)
