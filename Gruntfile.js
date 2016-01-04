module.exports = function(grunt) {

  grunt.initConfig({
    'gh-pages': {
    src: ['**']
  }
  });

  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('default', ['gh-pages']);

};