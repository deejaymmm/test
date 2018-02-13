import login_tpl from "./login.html";
import registration_tpl from "./registration.html";
class Forms{
    constructor(){
        this.flag = 0;
    }
    
    init(){
        /*document.getElementById('main').innerHTML = login_tpl;
        document.getElementsByClassName('btn-link')[0].onclick = function() {
            if (this.flag == 0) {
                console.log(this.flag);
                document.getElementById('main').innerHTML = login_tpl;
            } else {
                console.log(this.flag);
                document.getElementById('main').innerHTML = registration_tpl;
            }
        }*/
		this.setLoginForm();
    }
	setRegistrationForm(){
		document.getElementById('main').innerHTML = registration_tpl;
		//Здесь я использовал стрелочную функцию из-за её свойства наследовать контекст родителя
		document.getElementsByClassName('btn-link')[0].addEventListener("click",()=>{this.setLoginForm();});
		//Альтернативный вариант
		//document.getElementsByClassName('btn-link')[0].addEventListener("click",this.setLoginForm.bind(this));
	}
	setLoginForm(){
		document.getElementById('main').innerHTML = login_tpl;
		//document.getElementsByClassName('btn-link')[0].addEventListener("click",()=>{this.setRegistrationForm();});
		//А ниже альтернативный вариант как можно, но тот что выше лучше, на случай если ты в функцию параметры передавать будешь
		//В данном случае bind привязывает функцию к родительскому контексту иначе this.setRegistrationForm будет undefined
		document.getElementsByClassName('btn-link')[0].addEventListener("click",this.setRegistrationForm.bind(this));
	}
}
export default new Forms();