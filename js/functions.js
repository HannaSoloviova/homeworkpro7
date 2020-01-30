function getName(text) {
	let name;
	do {
		name = prompt(text);
	} while (!isNaN(name));

	return name;
}