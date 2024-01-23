
class spoiler_dix{
  constructor(){
    this.one=true;
    let t=this;
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.spd-header').forEach(function(i){
        let spoiler=i.closest('.spoiler-dix');
        spoiler.setAttribute('data-max-height',spoiler.offsetHeight+'px');
        spoiler.querySelector('.spd-content').style.maxHeight='0px';
        spoiler.querySelector('.spd-content').style.overflow = "hidden";

        i.addEventListener('click',function(){

          let spoiler=i.closest('.spoiler-dix');
          if(spoiler.classList.contains("spd-active")){
            spoiler.classList.remove("spd-active");
            spoiler.querySelector('.spd-content').style.maxHeight='0px';
            spoiler.querySelector('.spd-content').style.overflow = "hidden";
          }else{
            if(t.one){
              document.querySelectorAll('.spoiler-dix.spd-active').forEach(function(i){
                i.classList.remove("spd-active");
                i.querySelector('.spd-content').style.maxHeight='0px';
                i.querySelector('.spd-content').style.overflow = "hidden";
              });
            }
            spoiler.classList.add("spd-active");
            spoiler.querySelector('.spd-content').style.maxHeight=spoiler.getAttribute('data-max-height');
            setTimeout(()=>{
              spoiler.querySelector('.spd-content').style.overflow = "visible";
              spoiler.querySelector('.spd-content').style.removeProperty('max-height');
            },500);
          }

        });
      });
    });
  }

  OnlyOne(value=true){
    this.one=value;
  }

}

var SpoilerDix = new spoiler_dix();
//SpoilerDix.OnlyOne(false);