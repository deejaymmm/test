class Test{
	constructor(){
		this._name="";
		this.h1;
	}
	get name(){
		return this._name;
	}
	set name(name){
		this._name = name;
		if(this.h1)
			this.h1.innerText = this.name;
	}
	createH1(){
		this.h1 = document.createElement("h1");
		this.h1.innerText = this.name;
		document.getElementsByTagName("body")[0].appendChild(this.h1);
	}
}
export default new Test();