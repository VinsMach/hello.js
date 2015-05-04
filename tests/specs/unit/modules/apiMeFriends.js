// Test GET me/friends

define(['./helper'], function(helper) {

	describe('hello.api(\'/me/friends\')', function() {

		helper.sharedSetup();

		var tests = ['flickr', 'foursquare', 'github', 'google', 'linkedin', 'soundcloud', 'twitter', 'yahoo'];

		tests.forEach(function(network) {

			it('should format ' + network + ':me/friends correctly', function(done) {

				hello(network)
				.api('/me/friends')
				.then(function(friends) {
					friends.data.forEach(function(friend) {
						expect(friend.id).to.be.ok();
						expect(friend.name).to.be.ok();
						if (friend.thumbnail) {
							expect(friend.thumbnail).to.match(/^https?\:\/\/[a-z0-9\.\-]+\/.*/i);
						}
					});

					done();
				})
				.then(null, done);

			});

		});

	});

});
