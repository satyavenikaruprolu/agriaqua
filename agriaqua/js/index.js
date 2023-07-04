$(document).ready(function(){
    // $('.nav-link').click(function(e){
    //     if(!this.text.includes('Explore More')){
    //         $('.nav-link').removeClass('active')
    //         $(this).addClass('active')
    //         // $($(this).attr('href')).addClass('active')
    //         $($(this).attr('href')).show()
    //         $('#navbarNavDropdown').removeClass('show')
    //     }
    // })

    $('.dropdown-item').click(function(e){
        $($(this).attr('href')).show()
        $('#navbarNavDropdown').removeClass('show')
    })
})
