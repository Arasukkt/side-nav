document.addEventListener('DOMContentLoaded',function(){
    const menuBtn=document.querySelector(".menu-btn");
    const sidebar=document.querySelector(".side-bar");
    menuBtn.addEventListener("click",function(){
        sidebar.classList.add("active");
        menuBtn.style.visibility="hidden";
    });
    const closebtn=document.querySelector('.close-btn');
    closebtn.addEventListener("click",()=>{
        sidebar.classList.remove("active");
        menuBtn.style.visibility="visible";
    });
    //sub menu code
    const subbtns=document.querySelectorAll(".sub-btn");
    subbtns.forEach((btn)=>{
        btn.addEventListener("click",function(event){
            event.preventDefault();
            const container=document.getElementById(this.dataset.container);
            console.log(container);
            if(!container.classList.contains("active")){
                //add active
                //add rotate to arrow
                this.querySelector(".dropdown").classList.add("rotate");
                container.classList.add("active");
                container.style.height="auto";
                const height=container.clientHeight+"px";
                container.style.height="0px";
                setTimeout(function(){
                    container.style.height=height;
                }, 0);
            }
            else{
                //delete active
                container.style.height="0px"

                this.querySelector(".dropdown").classList.remove("rotate");
                container.addEventListener("transitioned",function(){
                    container.classList.remove("active");

                },{
                    once:true,
                })
            }
        })
    })
});