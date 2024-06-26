//First Heli
//insert heli code here -->

//Tank meme
const below = extend(UnitType, "w3-below", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"carbon-vanilla-w3-below-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * 18);
		Draw.rect(
			"carbon-vanilla-w3-below-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * 9);
	}
});

//sentry
const below = extend(UnitType, "sentry", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"carbon-vanilla-sentry-top",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * 0);
	}
});

//h1-Task
const task = extend(UnitType, "h1-task", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"carbon-vanilla-h1-task-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * 21);
		Draw.rect(
			"carbon-vanilla-h1-task-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * 7);
	}
});

//h2-project
const project = extend(UnitType, "h2-project", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"carbon-vanilla-h2-project-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * 21);
		Draw.rect(
			"carbon-vanilla-h2-project-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * 7);
	}
});

//Thanks to evl#8935 for helping me with these!!
//stolen from Heavy Armaments Industries,

//MAKE SURE THIS IS COMPLETE!!!

below.constructor = () => extend(UnitEntity, {});
task.constructor = () => extend(UnitEntity, {});
project.constructor = () => extend(UnitEntity, {});
sentry.constructor = () => extend(UnitEntity, {});