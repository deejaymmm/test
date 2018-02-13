import login_tpl from "./login.html";
import registration_tpl from "./registration.html";
class Forms{
    constructor(){
        this.flag = 0;
    }
    
    init(){
        document.getElementById('main').innerHTML = login_tpl;
        document.getElementsByClassName('btn-link')[0].onclick = function() {
            if (this.flag == 0) {
                console.log(this.flag);
                document.getElementById('main').innerHTML = login_tpl;
            } else {
                console.log(this.flag);
                document.getElementById('main').innerHTML = registration_tpl;
            }
        }
    }
}
export default new Forms();