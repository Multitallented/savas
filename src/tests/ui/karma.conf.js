module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        reporters: ['spec'],
        browsers: ['PhantomJS'],
        files: [
            'libs/jquery-3.2.1.min.js',
            'src/front-end/*.js',
            'tests/**/*[sS]pec.js'
        ]
    });
};