$('#buttonDoIt').click(function(){
  $('#amplicon').val($('#amplicon').val().replaceAll($('#nucleobase').val(), ''));
  $('#buttonDoIt').removeClass('btn-primary').addClass('btn-success').text(quotes.sample());
  $('#message').removeClass('hidden');
});

new Clipboard('#buttonDoIt');

String.prototype.replaceAll = function(search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
};

Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)]
}

var quotes = [
  'PUM!',
  'fuck me jesus',
  'fuck me freddy',
  '!',
  'OMG!',
  'LISTO!',
  'READY!',
  'AWESOME!',
  'DNA, FUCK YEAH!',
  'RNA, FUCK YEAH!',
  'GO, DARWIN!',
  'GO, BANANA!',
  'I AM ERROR',
  'lol, k',
  'hello',
  'be happy',
  '...',
  'Ampliconer 9000',
  'HTML FTW',
  'READ A BOOK',
  'EAT FRUITS',
  'FUCK!',
  'LISTEN'
];
