const searchForm=document.querySelector(".search-form");
const cartItemsContainer=document.querySelector(".cart-items-container")
const navbar=document.querySelector(".navbar");





const searchBtn=document.querySelector("#search-btn");
const cartBtn=document.querySelector("#cart-btn")
const menubtn=document.querySelector("#menu-btn");




searchBtn.addEventListener("click",function(){searchForm.classList.toggle("active");document.addEventListener("click",function(e){
if (!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm))

{searchForm.classList.remove("active");}   
    })
}

)



cartBtn.addEventListener("click",function(){cartItemsContainer.classList.toggle("active");document.addEventListener("click",function(e){
if(!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItemsContainer))
{ cartItemsContainer.classList.remove("active")}

    })

}
)




menubtn.addEventListener("click",function(){navbar.classList.toggle("active");
document.addEventListener("click",function(e){
if(!e.composedPath().includes(menubtn) && !e.composedPath().includes(navbar))
{navbar.classList.remove("active")}

    })


}
)