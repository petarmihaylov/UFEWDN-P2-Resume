module.exports = function(grunt) {

  grunt.initConfig({
    'gh-pages': {
    src: ['css/*.css', 'images/**/*', 'js/*.js', 'index.html', 'problemsets/**/*']
    //src: ['**'] //mathces all files in the cwd (current working directory)()
  }
  });

  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('default', ['gh-pages']);

};
