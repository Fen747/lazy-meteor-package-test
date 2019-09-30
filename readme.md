You can check the import through both console and `yarn visualize` on client

# Important note :

The `package.js` file needs to `api.use` or `api.imply` the `modules` package to support lazy loading, and the `ecmascript` package to support the `import`/`export` syntax. The `ecmascript` package itself depends on `modules`, and thereby is sufficient as a dependency.

Branches :

-   `master` => nothing is imported
-   `with-package` => the package is added as a dependency to `meteor/packages` but not imported
-   `imported` => the package is explicitely imported in both `client` and `server`
-   `addFiles` => package.js use old api, package added to meteor, no explicit import of the package in the code (it eagerly loads anyway)
