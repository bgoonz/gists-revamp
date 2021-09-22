Here's a quick proposal for something that I think would help npm packages (used as dependencies) be leaner, reducing burden of disk-space and bandwidth, especially for CI type setups which re-download tons of packages over and over again. My idea is inspired from [Help People Consume Your npm Packages](http://www.rudeshko.com/web/2014/05/13/help-people-consume-your-npm-packages.html).

## TL;DR

Add `.npmignore-minimal` file with things in your package that are not-strictly-necessary (readmes, tests, etc) to filter out of minimal-package installs. `npm install` still installs full package. `npm min-install` (or `npm install --production`) installs only the filtered down package contents (aka "minimal-package").

## Details

This proposal pairs/parallels `devDependencies`, but extends this "optional" idea to your whole package structure.

Include a `.npmignore-minimal` file in your package. Same format as `.npmignore`. But npm uses this file as meta-data for a filtering of what's installed at a later time when someone installs your package.

Your package is then considered in two "layers", the "full" layer and the "minimal" layer.

Now, when you choose to install someone's package, you can choose which layer you want. How exactly do you choose? For backward-compatibility sake, I'd say:

`npm install` gives you the full package, just as it always has. But `npm min-install` gives you only the stuff **not filtered out** by the `.npmignore-minimal` file.

If any package has no `.npmignore-minimal` file, it degrades to working exactly like packages currently are. That is, `npm min-install` on a package with no minimal-package filtering layer would just get you the normal full install.

If you have any minimal-install of a package, and you go into it and type `npm install`, it does the full unfiltered install, as well as (as it already does!) pulling in the `devDependencies`, etc. Pretty self-explanatory and expected behavior.

### Dependencies

Now, if I install package A (minimally or fully), and it has some actual dependencies, what install mode should be used for the dependencies?

Some options:

1. The install mode cascades. So "npm min-install" installs the minimal-package and the minimal-package (if any) of any dependencies.
2. Dependencies always install in miminal-package mode (very rare that you need unnecessary files in dependencies). If you need to fully install some dependency for some reason, you go to its directory and say `npm install` just as you always would have been used to.
3. Allow an npm-config option (defaults to "full", for backward-compat) which controls the dependency install mode ("minimal" or "full").

I personally like option (1). But (2) or (3) would be fine, too.