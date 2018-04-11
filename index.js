console.bog = function() {
  var bog = '💩';
  var args = [bog];
  for (var i = 0; i < arguments.length; i++) {
   	args.push(arguments[i]);
   };
   args.push(bog);
  console.log.apply(this, args);
};