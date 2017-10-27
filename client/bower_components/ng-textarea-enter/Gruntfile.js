module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            target: {
                files: {
                    'build/ng-textarea-enter.min.js': ['src/ng-textarea-enter.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/ng-textarea-enter.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};
