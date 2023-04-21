let innertext = document.querySelector(".inner");
        let it = innertext.innerText;
        // const inc = () =>{
        //     it = parseInt(it);
        //     it += 1;
        //     innertext.innerText = it;
        // }
        // const dec = () =>{
        //     it = parseInt(it);
        //     it -= 1;
        //     innertext.innerText = it;
        // }
        let leftbtn = document.querySelector(".left");
        leftbtn.addEventListener('click', function(){
            it = parseInt(it);
            it--;
            innertext.innerText = it;
        })
        let rightbtn = document.querySelector(".right");
        rightbtn.addEventListener('click', function(){
            it = parseInt(it);
            it++;
            innertext.innerText = it;
        })