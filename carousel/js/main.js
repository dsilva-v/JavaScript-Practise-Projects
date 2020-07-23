// Start writing JavaScript here!
 const link = document.querySelector('a')
 link.addEventListener('click', function(e){
    e.preventDefault()
    console.log(e.defaultPrevented)
 })