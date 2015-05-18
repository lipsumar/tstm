**This is an alpha release, not complete yet**

# tstm

Shortcuts for running testem.

The goal of this module is to wrap testem (not included, you have to install it globally yourself) so the commands can be shorter.

It will also feature testem config files inheritance.

This has been developped to work on a project shaped like so:

```
path/to/tests/package1/runner.html
path/to/tests/package1/testem.json
path/to/tests/package2/runner.html
path/to/tests/package2/testem.json
```



## Install

```sudo npm i -g tstm```

## Usage

Run testem in dev mode:

`$ tstm <packageName>`



Run testem in CI mode:

`$ tstm ci <packageName>`