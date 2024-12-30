---
title: Fish Shell
description: Installation and minimal configuration for Fish shell
---

https://github.com/fish-shell/fish-shell

## Installation

macOS:

```sh
brew install fish
```

It's immediately runnable after installation:

```sh
fish
```

### Making it a default 

See where Fish is installed (it might be different between macOS versions)

```sh
which fish
/opt/homebrew/bin/fish
```

```sh
echo /opt/homebrew/bin/fish | sudo tee -a /etc/shells
chsh -s /opt/homebrew/bin/fish
```

## Customization

Fish is a shell that is much better equipped by default compared to other shells.

:::tip[Start with an awesome list]
jorgebucaran/awsm.fish: A curation of prompts, plugins & other Fish treasures 🐚💎
https://github.com/jorgebucaran/awsm.fish
:::

### Greeting

Add to `~/.config/config.fish`:

```fish
# Disable the fish greeting message
set fish_greeting
```

### Brew

```fish
# Brew
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### Plugin management with `Fisher`

[Fisher](https://github.com/jorgebucaran/fisher) seems to be the most popular plugin manager for Fish

```sh
brew install fisher
```

### Prompt customization

[Tide](https://github.com/IlanCosman/tide) is an extensive prompt customization plugin.

It expects a couple of dependencies to be installed first:

- [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts) -- `brew install font-hack-nerd-font`

```sh
fisher install IlanCosman/tide@v6
```

### Plugins

[`fzf` fuzzy-search](https://github.com/junegunn/fzf) [plugin](https://github.com/PatrickF1/fzf.fish)

```sh
fisher install patrickf1/fzf.fish
```

`z` utility [plugin](https://github.com/jethrokuan/z)

```sh
fisher install jethrokuan/z
```

[SDKman](https://sdkman.io/) [plugin](https://github.com/reitzig/sdkman-for-fish)

```sh
fisher install reitzig/sdkman-for-fish@v2.1.0
```


