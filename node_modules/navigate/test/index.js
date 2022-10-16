/*global describe, it, navigate */

describe('navigate', function(){
    it('must be a function', function(){
        if(typeof navigate !== 'function') {
            throw new Error();
        }
    });
    it('must initialize without throwing an error', function() {
        navigate();
    });
    it('must return a correct entry page', function(done) {
        navigate(function(entryPage) {
            var suffix = '/test/index.html';
            if(entryPage.substr(entryPage.length - suffix.length) !== suffix) {
                throw new Error('entryPage ' + entryPage + ' does not have suffix ' + suffix);
            }
            done();
        });
    });
});
