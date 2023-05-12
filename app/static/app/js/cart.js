var updateBtns = document.getElementsByClassName('update-cart')

for (var i = 0;i< updateBtns.length ; i++){
    updateBtns[i].addEventListener('click',function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        if(user === 'AnonymousUser'){
            alert('Vui lòng đăng nhập')
        }
        else{
            updateUserOrder(productId , action)
        }
    })
}

function updateUserOrder(productId,action){
    alert("Thêm thành công")
    var url = '/update_item/'
    fetch(url , {
        method : 'POST',
        headers :{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken ,
        },
        body : JSON.stringify({'productId':productId,'action':action})
    })
    .then((Response) => {
        return Response.json()
    })
    .then((data) => {
        console.log('data',data)
        location.reload()
    })
}
// // Xoa san pham
// for (var i = 0;i< deleteBtns.length ; i++){
//     deleteBtns[i].addEventListener('click',function(){
//         var productId = this.dataset.product
//         var action = this.dataset.action
//         console.log('product:',productId,'action:',action)
//         console.log('user :',user)
//         if(user === 'AnonymousUser'){
//             console.log('user not logged in')
//         }
//         else{
//             deleteProduct(productId , action)
//         }
//     })

// }

// function deleteProduct(productId) {
//     fetch('/delete_item/', {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRFToken':csrftoken ,
//         },
//         body: JSON.stringify({'productId': productId})
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             // Xóa sản phẩm thành công, thực hiện các thao tác cần thiết
//             console.log('success delete product')
//         } else {
//             // Xóa sản phẩm thất bại, xử lý lỗi nếu cần
//             console.log('error delete product')
//         }
//     })
//     .catch(error => {
//         // Xóa sản phẩm thất bại, xử lý lỗi nếu cần
//     });
// }
