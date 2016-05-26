// JavaScript Document

var audio;
$(document).ready(function(e) {
	
    document.addEventListener("deviceready",function(){
		
		audio = window.plugins.LowLatencyAudio;
		
		audio.preloadFX('do', 'audio/DO.mp3',function(msg){},function(msg){alert('Error: ' + msg ); }); 
		audio.preloadFX('re', 'audio/RE.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('mi', 'audio/MI.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('fa', 'audio/FA.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('sol', 'audio/SOL.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('la', 'audio/LA.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('si', 'audio/SI.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('do1', 'audio/DO1.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('do2', 'audio/DO1.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('re1', 'audio/RE1.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('re2', 'audio/RE1.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('fa1', 'audio/FA1.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('fa2', 'audio/FA1.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('sol1', 'audio/SOL1.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('sol2', 'audio/SOL1.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('la1', 'audio/LA1.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('la2', 'audio/LA1.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		
		
		
		$('.nota').bind('touchstart' ,function(){
			$(this).addClass('tocada');
			audio.play($(this).attr('id'));
		}).bind('touchend', function(){
			$(this).removeClass('tocada');
		});
		
		$('.nota1').bind('touchstart' ,function(){
			$(this).addClass('tocada1');
			audio.play($(this).attr('id'));
		}).bind('touchend', function(){
			$(this).removeClass('tocada1');
		});
		
		});
});