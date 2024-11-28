export default {
  meta: {    
    type: 'problem',
    schema: [
      { type: 'integer', minimum: 1 }
    ]
  },
  create(context) {
    const level = context.options[0] || 1; // configured value (eslint.config.js) or default value
    let count = 0;
    return {
      IfStatement(node) {
        if (count > level) {
          context.report({
            node,
            message: `It is not allowed to nest if statements more than ${level} level(s).`
          });
        }
        count += 1;
      },
      'IfStatement:exit': (node) => {
        count -= 1;
      }
    };
  }
};
