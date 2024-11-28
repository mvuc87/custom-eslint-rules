export default {
  meta: {    
    type: 'suggestion',
    hasSuggestions: true,
    fixable: "code"
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        if (node.id.name.includes('_')) {
          context.report({
            node: node.id,
            message: 'Variable name canont have underscore.',
            suggest: [{
              desc: 'Remove underscores',
              fix(fixer) {
                return fixer.replaceText(node.id, node.id.name.replace(/_/g, ''));
              }
            }]
          });
        }
      }  
    };
  }
};
