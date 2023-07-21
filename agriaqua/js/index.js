$(document).ready(function(){
    $('.dropdown-item').click(function(e){
        $($(this).attr('href')).show()
        $('#navbarNavDropdown').removeClass('show')
    })
})
