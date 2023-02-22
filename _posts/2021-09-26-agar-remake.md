---
layout: post
title: Agar Remake
subtitle: A remake of agar.io which is a web game that features a multiplayer, player vs player Pacman-esque gameplay
cover-img: assets\img\agar\agar-remake-single-person.jpg
thumbnail-img: assets\img\agar\agar-io-actual.jpg
share-img: assets\img\agar\agar-io-actual.jpg
gh-repo: bensonfan0/agar-remake
gh-badge: [star, fork, follow]
tags: [React, Javascript, Node.js]
---

Welcome to a quick walk through of my agar remake online game. You'll notice there's the main player bubble, and the smaller food blobs. But do you get that impending feeling of loneliness the longer we stare at our sandbox world? We should get some friends to play with us. How are we going to accomplish that? With sockets!

![Agar-eating](..\..\assets\img\agar\agar-remake-single-person.jpg){: .mx-auto.d-block :}

After a little bit of work, we're able to host our backend server on an AWS instance, and our friends from all over the world can connect.

![Agar-eating](..\..\assets\img\agar\agar-remake-two-people.jpg){: .mx-auto.d-block :}

Front-end socket connect

{% highlight javascript linenos %}
export const connect = (sentence) => {
    console.log(sentence);
    connectedPromise.then(() => {
        // handle socket emits from backend
        socket.on(GAME_CONFIGS.SOCKET_CONSTANTS.GAME_UPDATE, processGameState);
    }).catch(reject => {
        console.log(reject.message, reject.socket);
    })
}
{% endhighlight %}
Back-end socket connections, and server

{% highlight javascript linenos %}
io.on('connection', (socket) => {
  console.log('SOCKET.IO working -> a user connected with id: ' + socket.id);
  
  socket.on(GAME_CONFIGS.SOCKET_CONSTANTS.JOIN_GAME, joinGame);
  socket.on(GAME_CONFIGS.SOCKET_CONSTANTS.INPUT, handleInput)
  socket.on('disconnect', onDisconnect);
})

server.listen(port, () => {
  console.log(`Server listening on ${port}`)
})

// Setup the Game
const game = new Game();

function joinGame(username) {
  game.addPlayer(this, username);
}

function handleInput(mouseCoordinates) {
  game.handleInput(this, mouseCoordinates);
}

function onDisconnect() {
  console.log('player Disconnected')
  game.removePlayer(this);
}
{% endhighlight %}


![Agar-eating](..\..\assets\img\agar\agar-eating-gif.gif){: .mx-auto.d-block :}
<!-- <image src="..\..\assets\img\agar\agar-eating-gif.gif" alt="eating" width="450" />  -->

Now we can play an interactable online game with many users and all in real time. Happy eating!