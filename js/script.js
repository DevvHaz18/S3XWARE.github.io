$(document).ready(function() {
    var audio = $('#background-music')[0];
    var video = $('#background-video')[0];
    var isPlaying = false;

   
    video.preload = 'metadata';

    
    video.oncanplay = function() {
        video.play();
        audio.play();
        isPlaying = true;
    };

    
    video.onerror = function() {
        console.error('Error loading video');
        
    };

    
    $('#enter-button').click(function() {
        $('#enter-site').fadeOut('slow', function() {
            $('#content').fadeIn('slow', function() {
                
                audio.play();
                video.play();
            });
        });
    });

   
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            if (isPlaying) {
                audio.play();
                video.play();
            }
        } else {
            if (!audio.paused) {
                audio.pause();
            }
            if (!video.paused) {
                video.pause();
            }
        }
    });

    
    audio.onended = function() {
        video.pause();
        isPlaying = false;
    };

    
    video.onended = function() {
        audio.pause();
        isPlaying = false;
    };
});
