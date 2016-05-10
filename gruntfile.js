module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.min.js'
      }
    },
	uglify: {
	  dist: {
		src: ['js/dist/script.min.js'],
		dest: 'js/dist/script.min.js'
	  }
	},
	imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['img/*.{png,jpg,gif}'],
          dest: 'img/dist/'
        }]
      }
	},
	cssmin: {
      css: {
        src: ['css/*.css'],
        dest: 'css/style.min.css'
      }
    },
	watch: {
	  scripts: {
		files: ['js/src/*.js', 'img/*.{png,jpg,gif}', 'css/*.css'],
		tasks: ['concat', 'uglify', 'imagemin', 'cssmin'],
		options: {
		spawn: false,
		},
	  }
	}
});
  
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'cssmin']);

};