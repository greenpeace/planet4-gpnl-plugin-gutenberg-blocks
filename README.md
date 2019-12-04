# Greenpeace P4NL Gutenberg Blocks Plugin

![Planet4](./planet4.png)

# ! WorkInProgress

# Contents
- [Introduction](#introduction)
- [Composer](#composer)
- [Code Standards](#code-standards)
- [Contribute](#contribute)

## Introduction

This WordPress plugin provides the necessary blocks to be used with Gutenberg with Twig.

## Composer
We use composer as dependency manager for the this plugin.
To install dependencies run

`$ composer install`

## Code standards
We follow the [WordPress Coding Standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/php/)

We use a custom [php codesniffer](https://github.com/squizlabs/PHP_CodeSniffer) ruleset which adds some rules over WordPress-Core, WordPress-Docs and WordPress-Extra rulesets.

[WordPress Coding Standards Rulesets](https://github.com/WordPress/WordPress-Coding-Standards)

[WordPress Coding Standards Wiki](https://github.com/WordPress/WordPress-Coding-Standards/wiki)

To run the [php codesniffer](https://github.com/squizlabs/PHP_CodeSniffer)

`$ vendor/bin/phpcs` 
or 
`$ composer sniffs`

To run the [php code beautifier and fixer](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Fixing-Errors-Automatically)

`$ vendor/bin/phpcbf` 
or 
`$ composer fixes`

## Contribute

Please read the [Contribution Guidelines](https://planet4.greenpeace.org/handbook/dev-contribute-to-planet4/) for Planet4.

## Assets

To watch the files run `npm start`. 
To build files for production run `npm run-script build`. 

## Dependencies

Adding external dependencies for a block can be done by enqueueing an asset and enqueueing external assets like so:
```
		$external_assets = [
			[
				'handle' => 'swiper',
				'src'    => 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.css',
				'type'   => 'style'
			],
			[
				'handle' => 'swiper',
				'src'    => 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.js',
				'type'   => 'script'
			]
		];
		Asset_Enqueuer::enqueue_external_asset( $external_assets );

```
asd
