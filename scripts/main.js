
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}

function orbit(x, y, tx, ty, distance) {
    var _x = tx - x;
    var _y = ty - y;
    var angle = Math.atan2(_y, _x);
    var newX = Math.cos(angle) * distance + x;
    var newY = Math.sin(angle) * distance + y;
    return { x: newX, y: newY };
}