function main() {
    $('.navbar-text').hide();
    $('.navbar-text').fadeIn(2000);
}




var quotes = [
 'Being human totally sucks most of the time. Videogames are the only thing that make life bearable.',

'You\'re probably wondering what\'s going to happen to you. That\'s easy. The same thing is going to happen to you that has happened to every other human being who has ever lived. You\'re going to die. We all die. That\'s just how it is.',

'You\'d be amazed how much research you can get done when you have no life whatsoever.',

'No one in the world gets what they want and that is beautiful.',

'Going outside is highly overrated.',

'People who live in glass houses should shut the fuck up.',

'You were born at a pretty crappy time in history. And it looks like things are only gonna get worse from here on out.',

'I felt like a kid standing in the world\'s greatest video arcade without any quarters, unable to do anything but walk around and watch the other kids play.',

'For a bunch of hairless apes, we\'ve actually managed to invent some pretty incredible things.',

'\"You could shove it up your ass and pretend you\'re a corn dog\" -COURTESY VIOLATION RESPONSE MUTED VIOLATION LOGGED-',

 'I\’m not crazy about reality, but it\’s still the only place to get a decent meal.',

  'Virtual sex, no matter how realistic, was really nothing but glorified, computer-assisted masturbation.',

  'You know you\'ve totally screwed up your life when your whole world turns to shit and the only person you have to talk to is your system agent software!',

  'That was when I realized, as terrifying and painful as reality can be, it’s also the only place where you can find true happiness. Because reality is real.',

  'There, inside the game\'s two-dimensional universe, life was simple: It\'s just you against the machine. Move with your left hand, shoot with your right, and try to stay alive as long as possible.',


  'Now that everyone could vote from home, via the OASIS, the only people who could get elected were movie stars, reality TV personalities, or radical televangelists..',

   'For one quarter, Black Tiger lets me escape from my rotten existence for three glorious hours. Pretty good deal.',

    'I had a serious cute-geeky-girls-playing-ukuleles fetish that I can neither explain nor defend.',

    'I was just another sad, lost, lonely soul, wasting his life on a glorified videogame.',

    'I don’t care if Spielberg directed it. It’s a chick flick disguised as a sword-and-sorcery picture.',

    'I’d renamed my avatar Parzival, after the knight of Arthurian legend who had found the Holy Grail.',

    'Like any classic videogame, the Hunt had simply reached a new, more difficult level. A new level often required an entirely new strategy.',

    'The whole God thing is actually an ancient fairy tale that people have been telling one another for thousands of years. We made it all up. Like Santa Claus and the Easter Bunny.',

    'You’re an ignorant know-nothing twink.'

]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    return newQuote();
}

$(document).ready(main);
