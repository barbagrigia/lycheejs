
lychee.define('app.entity.Emblem').includes([
	'lychee.app.Sprite'
]).exports(function(lychee, app, global, attachments) {

	var _texture = attachments["png"];
	var _config  = {
		width:  256,
		height: 64
	};


	var Class = function(data) {

		var settings = lychee.extend({}, data);


		settings.texture = _texture;
		settings.width   = _config.width;
		settings.height  = _config.height;


		lychee.app.Sprite.call(this, settings);

		settings = null;

	};


	Class.prototype = {

		serialize: function() {

			var data = lychee.app.Sprite.prototype.serialize.call(this);
			data['constructor'] = 'app.entity.Emblem';


			return data;

		}

	};


	return Class;

});
