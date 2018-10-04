# Sound library
(NOTHING WORKING HERE, just experiments for now)
Freesound desktop client with FoxDot integration, usable to create sound kits.

This software should help you organize and take with you on different setups your sounds library.
Sound samples are taken from freesound.org and organized in `kits` tied to the freesound.org account.
I plan on doing this by "abusing" the `bookmarks` feature of freesound.org, creating bookmarks with
a recognizable syntax to keep the `kit` information on freesound servers without having to rely on a
third party db to store this.
Since freesound.org is written in python, I could propose a PR to the freesound.org website and
implement models and views needed to keep track of sound kits once this is working.

It should also integrate with [FoxDot](https://github.com/Qirky/FoxDot) by allowing to build kits
of samples represented by a character, so that you can easily swap sound kits in FoxDot before a live session.

More in general, it should be able to export soundkits to the filesystem, with licenses and needed credits, to be used
elsewhere.
