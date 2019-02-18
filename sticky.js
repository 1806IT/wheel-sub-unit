class Sticky{
    constructor(selector,n=0) {
        this.elements=$(selector)
        this.offset=n
        this.offsets=[]
        this.addPlaceHolder()
        this.cacheOffset()
        this.listenToScroll()
    }
    addPlaceHolder(){

        this.elements.each((index,element)=>{
            var $wrapper=$('<div class="wrapper"></div>')
            $(element).wrap($wrapper)
            // $wrapper.height($(element).height())
            $(element).parent().height($(element).height())
        })
    }
    cacheOffset(){
        this.elements.each((index,element)=>{
            this.offsets[index]=$(element).offset()
        })
    }
    listenToScroll(){
        $(window).on('scroll',()=>{
            var scrollY=window.scrollY
            this.elements.each((index,element)=>{
                console.log(this.offsets[index])
                var $element=$(element)
                if(scrollY+this.offset>this.offsets[index].top){
                    $element.addClass('sticky')
                    $element.css({top:this.offset})
                }else{
                    $element.removeClass('sticky')
                }
            })
        })
    }
}
new Sticky('button',60)
new Sticky('#topbar')
/*

var buttony=$('button').offset().top
console.log(buttony)
$(window).on('scroll',function(e){
    console.log('stick');

    var scrollTop=window.scrollY
    console.log(scrollTop);
    if(scrollTop>10){
        $('#topbar').addClass('sticky')
    }else{$('#topbar').removeClass('sticky')}
    if(scrollTop>=buttony+10){
        $('button').addClass('sticky')
    }else{
        $('button').removeClass('sticky')
    }
})*/
