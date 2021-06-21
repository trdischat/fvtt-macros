// Collect user and breakout names, then launch breakout
// Run this macro NOT as GM
const userId = args[1] || game.userId;               // id of the user to send to breakout
let breakoutRoom = args[0];                          // breakout room name
if (breakoutRoom) {                                  // if room name blank, exit breakout
    const rmStr = breakoutRoom.hashCode();           // hash the breakout room name
    const gmStr = game.world.data.title.hashCode();  // hash the world title
    let x = new Date();
    x.setTime(x.valueOf() + ( 60000 * x.getTimezoneOffset() ));
    const dtStr = x.toDateString().hashCode();       // hash the current date in GMT 
    breakoutRoom = rmStr + gmStr + dtStr;            // use combined hashes as room name
}
let RunBreakOut = game.macros.getName("RunBreakOut");
RunBreakOut.execute(userId, breakoutRoom);
