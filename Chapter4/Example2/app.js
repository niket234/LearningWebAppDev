/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */
var main = function () {
    'use strict';

    var addCommentFromInputBox = function (val,clas) {
        var $newComment=null;

        if (val!== '') {
            $newComment = $('<p class='+clas+'>').text(val);
            $newComment.hide();
            $('.comments').append($newComment);
            $newComment.fadeIn();
            
        }
    };

    $('.comment-input button').on('click', function () {
        addCommentFromInputBox($('.comment-input input').val(),'user');
        $('.comment-input input').val('');
    });

    $('.comment-input input').on('keypress', function (event) {
        if (event.keyCode === 13) {
         addCommentFromInputBox($('.comment-input input').val(),'user');
        $('.comment-input input').val('');
        }
    });


    $('.comment-input-user2 button').on('click', function () {
        addCommentFromInputBox($('.comment-input-user2 input').val(),'user2');
        $('.comment-input-user2 input').val('');
    });

    $('.comment-input-user2 input').on('keypress', function (event) {
        if (event.keyCode === 13) {
         addCommentFromInputBox($('.comment-input-user2 input').val(),'user2');
        $('.comment-input-user2 input').val('');
        }
    });


};

$(document).ready(main);
