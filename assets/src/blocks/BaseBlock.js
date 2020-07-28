export default class BaseBlock {

	constructor(className) {

		// These names are based on the class name and can be used for all the different files and functions that require these names.
		className = this.constructor.name;

		this.className = className;
		this.classNameLowerCase = className.toLowerCase();
		this.blockName = className.split('Block')[0];
		this.blockNameLowerCase  = this.blockName.toLowerCase();
		this.blockNameKebabCase = this.blockName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
	}
}
