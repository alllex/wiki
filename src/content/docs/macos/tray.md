---
title: Tray in macOS
description: Useful apps, settings, and quality of life
---

## Tray items spacing

Reduce spacing between icons / items in tray:

```
defaults -currentHost write -globalDomain NSStatusItemSpacing -int 8
```

Here is how the setting of `8` looks like:

TBD

:::note
Requires a logout or a restart to take effect
:::

More generally

```
defaults -currentHost write -globalDomain NSStatusItemSpacing -int X

defaults -currentHost write -globalDomain NSStatusItemSelectionPadding -int Y
```

The default defaults can be restored by running:

```
defaults -currentHost delete -globalDomain NSStatusItemSpacing

defaults -currentHost delete -globalDomain NSStatusItemSelectionPadding
```


## References

- https://www.jessesquires.com/blog/2023/12/16/macbook-notch-and-menu-bar-fixes/
