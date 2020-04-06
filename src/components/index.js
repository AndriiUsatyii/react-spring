const req = require.context('.', true, /\.\/.+\/index\.js$/);

req.keys().forEach((key) => {
	const component = req(key);

  Object.keys(component).forEach((name) => {
    module.exports[name] = component[name];
  });
});
