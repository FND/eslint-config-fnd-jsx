module.exports = {
	extends: ["fnd", "plugin:react/recommended"],
	plugins: ["react"],
	settings: {
		react: { pragma: "createElement" }
	},
	rules: {
		"jsx-quotes": ["error", "prefer-double"],
		"react/display-name": "off",
		"react/jsx-key": "off",
		"react/no-unknown-property": "off"
	}
};
