const HB = require('haxball-headless');

const token = process.env.HAXBALL_TOKEN;

const room = HB.createRoom({
  token: token,
  roomName: 'Mój Darmowy Pokój',
  maxPlayers: 8,
  public: true,
  password: '',
  noPlayer: true
});

room.onPlayerJoin = player => {
  console.log(`${player.name} dołączył do pokoju`);
};
