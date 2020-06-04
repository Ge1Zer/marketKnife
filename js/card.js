

let CardProductItems= async ()=>{	
	let ArrayRaedy=[];
	let cardItem=document.querySelector('.item_product_at_card');
	cardItem.innerHTML=''

	let arr=document.cookie?JSON.parse(document.cookie.split('produkt:')[1]):''
	JSON.stringify(arr)

	arr.length>0 &&
	 await PostFiles('products',arr).then(res=>{		
		
	  res.filter((elem,por,arr)=>{				
			if(ArrayRaedy.filter(x=>x.type===elem.type && x.id===elem.id).length<1){
				elem.num=1;	ArrayRaedy.push(elem)
			}else{
				ArrayRaedy.filter(x=>x.type===elem.type && x.id===elem.id)[0].num+=1
			}
		})
	})
	 ArrayRaedy.map(x=>{
	 	console.log(x.img[0].item)
	 	cardItem.innerHTML+=`
			<div class="item_chose_product">
					<div class="img_chose">
						<div><img width='100%' heigth='100%' src=${x.img[0].item} alt="" /></div>
					</div>
					<div class="desc_chose">
						<h3>${x.id}-${x.type}</h3>
						<div>${x.length}</div>
						<div>${x.handle}</div>
					</div>
					<div class="price_chose">
						<div data-price='${x.price}'>${x.price}${x.val}</div>
					</div>
			<div>
	 	`
	 })		
}