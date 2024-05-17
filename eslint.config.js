import antfu from "@antfu/eslint-config";

export default antfu({
  stylistic: true,

  // Or customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: "double", // or 'double'
    semi: true,
  },
  rules: {
    "no-console": "off",
    "unused-imports/no-unused-vars": "warn",
    "vue/no-unused-components": "warn",
    "vue/no-mutating-props": "off",
    "vue/no-reserved-component-names": "off",
    "object-curly-newline": "warn",
  },
});