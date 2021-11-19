const cart = function(){
    const cartbtn = document.querySelector('.button-cart')

    const cart = document.querySelector('#modal-cart')
    
    const cartclose = cart.querySelector('.modal-close')
    
    
    
    
    // const cart = document.getElementById('modal-cart')
    // console.log(cart);
    //console.dir(cartbtn);
    
    // cartbtn.onclick = function() {
    //     console.log('click');
    
    // }
    
    
    // cartclose,addEventListener('click',function() {
    
    //     cart
    
    // })
    cartbtn.addEventListener('click',function(){
        cart.style.display = 'flex'
    })
    
    
    cartclose.addEventListener('click',function(){
        cart.style.display = ''
    })
}

cart ()