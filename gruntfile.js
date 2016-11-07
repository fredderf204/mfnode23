module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //mocha for unit tests
    mocha: {
      all: {
        src: ['tests/test.js']
      }
    },
    //uglify to minise server.js
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'server.js',
        dest: 'server.min.js'
      }
    }
  });

  // Load the pgrunt plugins
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['mocha','uglify']);
};