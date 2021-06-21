// Collect user and breakout names, then launch breakout
// Run this macro NOT as GM
const userId = game.userId || args[1];           // id of the user to send to breakout
const rmStr = args[0].hashCode();                // hash the room name
const gmStr = game.world.data.title.hashCode();  // hash the world title
let x = new Date();
x.setTime(x.valueOf() + ( 60000 * x.getTimezoneOffset() ));
const dtStr = x.toDateString().hashCode();       // hash the current date in GMT 
const breakoutRoom = rmStr + gmStr + dtStr;      // use combined hashes as room name
let RunBreakOut = game.macros.getName("RunBreakOut");
RunBreakOut.execute(userId, breakoutRoom);
