module.exports = function ({ types: t }) {
  return {
    visitor: {
      ImportDeclaration (path, state) {
        if (!path || !path.node || !path.node.source || !path.node.source.value) return null
        if (path.node.specifiers.length > 0) return null;

        const reference = path.node.source.value;
        const options = Object.assign({importAsNamespace: false, useCamelCase: false}, state.opts || {});
        let name = reference.replace(/^.*[\\\/]/g, '').split(".").shift();
        
        if(!name) {
          return null;
        }

        if(options.useCamelCase){
          name = name.replace(/\W([a-z])/g, function (g) { return g[1].toUpperCase(); });
        } else {
          name = name.replace(/\W/g, '_');
        }

        path.replaceWith(t.importDeclaration(
          [
            options.importAsNamespace
              ? t.importNamespaceSpecifier(t.identifier(name))
              : t.importDefaultSpecifier(t.identifier(name))
          ],
          t.stringLiteral(reference)
        ));
      }
    },
  };
};