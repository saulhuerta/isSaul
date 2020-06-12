var isSaul = require('./index');

describe('Testing isSaul', function(){
    it('should return true passing Geo', function(){
        expect(isSaul('Saul')).toBeTruthy();
    });
 
    it('should return false passing Google', function(){
        expect(isSaul('Goolge')).toBeFalsy();
    });
});
