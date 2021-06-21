// Launch Jitsi breakout room
// Run this macro as GM
const userId = args[0];
const breakoutRoom = args[1];
game.webrtc.client._jitsiClient.settings.set("client", `users.${userId}.jitsiBreakoutRoom`, breakoutRoom);
game.socket.emit("module.jitsirtc", { action: "breakout", userId, breakoutRoom });
