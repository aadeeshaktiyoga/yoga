(
    function(window,document){
    "use strict";
    function skGetEnvironmentUrls(folder_name)
    {var scripts=document.getElementsByTagName("script");var scripts_length=scripts.length;var search_result=-1;var other_result=-1;var app_url="https://widgets.sociablekit.com/";var app_backend_url="https://api.accentapi.com/v1/";var app_file_server_url="https://data.accentapi.com/feed/";var sk_app_url="https://sociablekit.com/app/";var sk_api_url="https://api.sociablekit.com/";var sk_img_url="https://images.sociablekit.com/";var sk_fb_sync_url="https://facebook-sync.sociablekit.com/";for(var i=0;i<scripts_length;i++){var src_str=scripts[i].getAttribute('src');if(src_str!=null){var other_folder="";if(folder_name=='facebook-page-playlists'){other_folder='facebook-page-playlist';}
else if(folder_name=='linkedin-page-posts'){other_folder='linkedin-page-post';}
else if(folder_name=='linkedin-profile-posts'){other_folder='linkedin-profile-post';}
else if(folder_name=='facebook-hashtag-posts'){other_folder='facebook-hashtag-feed';}
else if(folder_name=='facebook-page-events'){other_folder='facebook-events';}
else if(folder_name=='facebook-page-posts'){other_folder='facebook-feed';if(document.querySelector(".sk-ww-facebook-feed")){var element=document.getElementsByClassName("sk-ww-facebook-feed")[0];element.classList.add("sk-ww-facebook-page-posts");}}
other_result=src_str.search(other_folder);search_result=src_str.search(folder_name);if(search_result>=1||other_result>=1){var src_arr=src_str.split(folder_name);app_url=src_arr[0];app_url=app_url.replace("displaysocialmedia.com","sociablekit.com");if(app_url.search("local")>=1){app_backend_url="http://localhost:3000/v1/";app_url="https://localtesting.com/SociableKIT_Widgets/";app_file_server_url="https://localtesting.com/SociableKIT_FileServer/feed/";sk_app_url="https://localtesting.com/SociableKIT/";sk_api_url="http://127.0.0.1:8000/";sk_img_url="https://localtesting.com/SociableKIT_Images/";sk_fb_sync_url="https://localtesting.com/SociableKIT_Facebook_Sync/";}
else{app_url="https://widgets.sociablekit.com/";}}}}
return{"app_url":app_url,"app_backend_url":app_backend_url,"app_file_server_url":app_file_server_url,"sk_api_url":sk_api_url,"sk_app_url":sk_app_url,"sk_img_url":sk_img_url,"sk_fb_sync_url":sk_fb_sync_url};}
function getDsmEmbedId(sk_linkedin_page_post){var embed_id=sk_linkedin_page_post.getAttribute('embed-id');if(embed_id==undefined){embed_id=sk_linkedin_page_post.getAttribute('data-embed-id');}
return embed_id;}var env_urls=skGetEnvironmentUrls('google-reviews');var app_url=env_urls.app_url;var app_backend_url=env_urls.app_backend_url;var app_file_server_url=env_urls.app_file_server_url;var sk_img_url=env_urls.sk_img_url;var sk_app_url=env_urls.sk_app_url;var sk_api_url=env_urls.sk_api_url;function loadScript(src,callback){let scriptName=src.split("/").slice(-3).join('/');let scriptIsLoaded=document.querySelectorAll(`script[src*="${scriptName}"]`)
if(scriptIsLoaded.length>0){return;}
const script=document.createElement('script');script.src=src;script.type='text/javascript';document.body.appendChild(script);}
window.addEventListener("load",function(){var url="https://widgets.sociablekit.com/";const localHost=['127.0.0.1',"::1"];if(window.location.hostname.includes('localtesting')||window.location.hostname.includes('localhost')||window.location.hostname.includes('127.0.0.1')){url="http://localhost/SociableKIT_Widgets/";}
document.querySelectorAll('.sk-ww-google-reviews').forEach(function(el){let google_reviews=el;google_reviews.innerHTML=`<div class='first_loading_animation'style='text-align:center; width:100%;'><img width='120'height='120'src='${sk_img_url}icons/sk-spinner.svg'class='loading-img'style='display: inline-block !important;'/></div>`;let embed_id=getDsmEmbedId(google_reviews);if(!embed_id){const canonicalHref=document.querySelector('[rel="canonical"]')?.getAttribute('href');if(canonicalHref&&canonicalHref.indexOf("sti29.fr")!==-1){embed_id=108211;}}
let new_google_reviews_width=window.innerHeight+100;google_reviews.height=new_google_reviews_width;var json_settings_url=app_file_server_url.replace('feed','')+"settings/"+embed_id+"/settings.json?nocache="+(new Date()).getTime();var json_feed_url=app_file_server_url+embed_id+".json?nocache="+(new Date()).getTime();fetch(json_feed_url,{method:'get'}).then(function(response){if(!response.ok){console.error("Failed to fetch data")
return;}
return response.json().catch((error)=>{return{};});}).then(function(data){const{embed_id}=data.settings
if(!window.sk_embed_data){window.sk_embed_data={};window.sk_embed_data[embed_id]=data}else{window.sk_embed_data[embed_id]=data;}
if(data&&data.solution_info){if(!data.solution_info.use_new_layout||data.solution_info.use_new_layout==0){el.setAttribute('data-ui','old')
loadScript(url+'google-reviews-old/widget.js');}else{el.setAttribute('data-ui','new')
loadScript(url+'google-reviews/new/widget.js');}}else{el.setAttribute('data-ui','old')
loadScript(url+'google-reviews-old/widget.js');}}).catch(function(err){window.sk_embed_data={}
loadScript(url+'google-reviews-old/widget.js');})})})
function getDsmEmbedId(sk_google_reviews){var embed_id=sk_google_reviews.getAttribute('embed-id');if(embed_id==undefined){embed_id=sk_google_reviews.getAttribute('data-embed-id');}
return embed_id;}}(window,document));