## Node Module Resolution

I already know about CommonJS module resolution.

This is a sandbox to play with ESM module resolution.

The files:

```txt
node-module-resolution-test
├── package.json -> has "lru-cache" installed
├── library/
│   ├── fuzzy/
│   │   ├── index.js -> the facade
│   │   └── package.json -> has "fuse.js" installed
│   └── h3/
│       ├── index.js -> the facade
│       └── package.json -> has "h3" installed
└── project/
    ├── tata/
    │   └── index.js -> no local dep. Can use global deps and library
    └── toto/
        ├── index.js -> has local dep, can also use global deps and library
        └── package.json -> has "localforage" installed.
```

## See it in action

```sh
node ./project/toto/index.js
node ./project/tata/index.js
```

Guess what: it works.
