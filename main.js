var SiteNameInput=document.getElementById('SiteNameInput');
var WebSiteInput=document.getElementById('WebSiteInput');
var erorNotName=document.getElementById('erorNotName');
var erorNotUrl=document.getElementById('erorNotUrl');
var webContainer;

if(localStorage.getItem('myWebSiteUrl')==null)
{
    webContainer=[];
}
else
{
   webContainer= JSON.parse(localStorage.getItem('myWebSiteUrl'));
   prodactWebSiteAdd(webContainer);
}
function prodactSite()
{
    if(SiteNameInput.value=="" && WebSiteInput.value=="")
    {
        document.getElementById('erorNotName').innerHTML='Nameisrequired' ;
        document.getElementById('erorNotUrl').innerHTML='Url Field is required';
        document.getElementById('erorNotName').classList='border,  allert-eror  , rounded-3';
        document.getElementById('erorNotUrl').classList='border , allert-eror , rounded-3';
return false
    }
    
    else{
        var prodactweb={
            name:SiteNameInput.value,
            website:WebSiteInput.value,
        };
        document.getElementById('erorNotName').innerHTML='';
        document.getElementById('erorNotUrl').innerHTML='';
        document.getElementById('erorNotName').classList='';
        document.getElementById('erorNotUrl').classList='';


        webContainer.push(prodactweb);
        localStorage.setItem('myWebSiteUrl',JSON.stringify(webContainer));

        deletWeb();
        prodactWebSiteAdd();
    }

    
    
}

function deletWeb() 
{
    SiteNameInput.value="";
    WebSiteInput.value="";
};

function prodactWebSiteAdd()
{
    container=``;
    for(var i=0;i<webContainer.length;i++)
    {
        container += `<div class="bg-form  m-auto  d-flex mt-5 p-5 shadow ">
        <div class="mx-lg-3 w-lg-auto ">
            <h3 class="me-lg-3">${webContainer[i].name}</h3>
        </div>
            <div class="ms-7">
               <a id="openweb"  class="btn m-1 w-table" href="${webContainer[i].website}">Vist</a>
               <button onclick="deleteItimeWeb(${i})" class="btn btn-danger m-1">Delete</button>
            </div>

         </div>`
    };
    document.getElementById('addTheNameWeb').innerHTML=container;
}

function deleteItimeWeb(deleteMarker)
{
    webContainer.splice( deleteMarker,1);
    prodactWebSiteAdd(webContainer);
    localStorage.setItem('myWebSiteUrl',JSON.stringify(webContainer));
};
