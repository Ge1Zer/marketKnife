//список запросов на сервер

// GetFiles('comments','Gryzly','0001')
// GetFiles('imges','Gryzly','0001')
// GetFiles('videos','Gryzly','0001')
// GetFiles('descriptions','Gryzly','0001')
//GetFiles('descriptions','author','0000')
// GetFiles('products','Gryzly','0001')
// GetFiles('products','all')
// GetFiles('descriptions','author','0000').then(res=>{
// 	document.querySelector('.tittle_home>p').innerHTML=res[0].text
// })
//====================================================================================>
//====================================================================================>
//====================================================================================>
//====================================================================================>
//функцция для получения списка коментариев
let getComment=async(item,id, cont)=>{
		cont.innerHTML=''
		await GetFiles('comments',item,id).then(res=>{

			let hour,min,day,month,year;

			res.map(i=>{
				hour=i.date.hour<10?'0'+i.date.hour:i.date.hour
				min=i.date.min<10?'0'+i.date.min:i.date.min
				day=i.date.day<10?'0'+i.date.day:i.date.day
				month=i.date.month<10?'0'+i.date.month:i.date.month
				year=i.date.year<10?'0'+i.date.year:i.date.year

				cont.innerHTML+=`<div class="item_coment_home">
														<img src="${i.img}" alt="poc"/>
														<div>
															<div><span>${i.user}</span><time>${hour+':'+min+' '+day+'.'+month+'.'+year}</time></div>
															<p class="tex">${i.text}</p>										
														</div>
												</div>`
			})

		let item=document.querySelectorAll('.items_coment_home>.item_coment_home>div>p');
		let SelectsItem=document.querySelectorAll('.items_coment_home>.item_coment_home>div');

		for (let i = cont.children.length - 1; i >= 0; i--) {
			item[i].clientHeight < item[i].scrollHeight
			? SelectsItem[i].innerHTML+='<div class="full_com_home">full</div>':''
		}
	})
}
//================================================================================>
//================================================================================>
//================================================================================>
//================================================================================>
//================================================================================>
let getProduct= async (type,id,knifeItem)=>{
	await GetFiles('products',type,id).then(res=>{
	
		knifeItem.innerHTML=''
		
		 res.map(i=>{
			knifeItem.innerHTML+=`
							<div class="item_knife">
									<div class="ite_back"><img src="${i.img[0].item}" alt="piс" /></div>
									<div class='desc_knife ${i.stock===0?" desc_kni_gray":''}' data-id='${i.id}' data-type='${i.type}'>
										<div class="name_knife">${i.type}</div>
										<div class="price_knife">${i.price} ${i.val}</div>
										<div class="stock_knife">${i.stock===0 ? 'Под заказ, на складе товара нет': `Товар в количестве ${i.stock} штук`}<div>
									</div>
							</div>
							`
			})
	}) 
}
//================================================================================>
//================================================================================>
//================================================================================>
//================================================================================>
//================================================================================>
let onlyProduct=async (type,id, plase)=>{

	await GetFiles('products',type,id).then(res=>{

			res=res[0]
			plase.innerHTML=''
			plase.innerHTML=`
				<div class="only_desc">		
							<div class="header_desc">
								<div class="img">

							
									<div class="imges imgig">
										<div class="only_img0"><img src="" alt="pic"></div>
										<div class="only_img0 disen" ><img src="" alt="pic"></div>
										<div class="only_img0 disen"><img src="" alt="pic"></div>
										<div class="only_img0 disen"><img src="" alt="pic"></div>
									</div>

									<div class="imges imsmall">
										<div class="only_img"><img src="" alt="pic"></div>
										<div class="only_img"><img src="" alt="pic"></div>
										<div class="only_img"><img src="" alt="pic"></div>
										<div class="only_img"><img src="" alt="pic"></div>
									</div>
								</div>

								<div class="desc_list_config">
									<h2>${res.id+'-'+res.type}</h2>
									<ul>
										<li><div>Type:</div><div>${res.type}</div></li>
										<li><div>Sharpening:</div><div>${res.sharpening}</div></li>
										<li><div>Length(blade):</div><div>${res.lengthb}</div></li>
										<li><div>Length:</div><div>${res.length}</div></li>
										<li><div>Handle:</div><div>${res.handle}</div></li>
										<li><div>Heft:</div><div>${res.heft}</div></li>
									</ul>

								</div>
							</div>
							<div class="text_desc">
								<p>${res.desc}</p>
							</div>
								<div class="but_add acti_but ${res.stock>0?'acti':'disen'} " data-stock='${res.stock}' data-type="${res.type}" data-id="${res.id}">ADD in cart</div>
							  <div class="but_add ${res.stock<=0?'acti':'disen'} ">Prodict istn number 0</div>
							<div class="only_items_video">
								<div class="only_item_video">1</div>
								<div class="only_item_video">2</div>
								<div class="only_item_video">3</div>
								<div class="only_item_video">4</div>
								<div class="only_item_video">5</div>
							</div>
				</div>			
				`
	})
}
//================================================================================>
//================================================================================>
//================================================================================>
//================================================================================>

let getOnlyItemDesc= async (type,id,placeDesc,placeComm)=>{
	await onlyProduct(type,id,placeDesc)	
	await getComment(type,id,placeComm)
	await actionClick()	
}
//================================================================================>
//================================================================================>
//================================================================================>
//================================================================================>
let CardProductItems= async (cardItem)=>{	

	let ArrayRaedy=[];
	let arr=document.cookie?JSON.parse(document.cookie.split('produkt:')[1]):''
	JSON.stringify(arr)
	
	arr.length>0 &&
	 await PostFiles('products',arr).then(res=>{		
		cardItem.innerHTML=''

	  res.filter((elem,por,arr)=>{				
			if(ArrayRaedy.filter(x=>x.type===elem.type && x.id===elem.id).length<1){
				elem.num=1;	ArrayRaedy.push(elem)
			}else{
				ArrayRaedy.filter(x=>x.type===elem.type && x.id===elem.id)[0].num+=1
			}
		})
	 })

	 ArrayRaedy.map(x=>{
	 	cardItem.innerHTML+=`
			<div class="item_chose_product">

					<div class="img_chose">
						<img width='100%' heigth='100%' src=${x.img[0].item} alt="" />
					</div>

					<div class="desc_chose">
						<h3>${x.id}-${x.type}</h3>
						<div>All long:  ${x.length}</div>
						<div>Hangle:  ${x.handle}</div>
					</div>



					<div class="price_chose">
						<div>
							<div data-price='${x.price}'>${x.price}${x.val}</div>
							<div class="fild_number_card">

								<div class="but_card_small" data-type="${x.type}" data-id="${x.id}">
									<img width='100%' height="100%" src="./img/content/card/right.png" alt="big" data-type="${x.type}" data-id="${x.id}" />
								</div>

								<div>
									<div class="fild-input" data-type="${x.type}" data-id="${x.id}" data-max='${x.stock}'>${x.num}</div>
								</div>

								<div class=" but_card_big" data-type="${x.type}" data-id="${x.id}">
									<img width='100%' height="100%" src="./img/content/card/left.png" alt="small" data-type="${x.type}" data-id="${x.id}"/>
								</div>

							</div>
						</div>
						

						<div class='balans-item' >
								<div>balans:</div><div class="item-summ" data-type="${x.type}" data-id="${x.id}" data-price='${x.price}'>${x.num*x.price}</div><div>${x.val}</div>
						</div>
					</div>
			<div>
	 	`
	 })		
}
//=========================================================================>
//=========================================================================>
//=========================================================================>
//=========================================================================>

//==============================================================================>
//==============================================================================>
//==============================================================================>
//==============================================================================>



































// function getCookie(name) {

//   let matches = document.cookie.match(new RegExp(
//     "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//   ));
  

//   return matches ? decodeURIComponent(matches[1]) : undefined;
// }


// function setCookie(name, value, options = {}) {
// 	// console.log(name,value,options)
//   options = {
//     path: '/',
//     // при необходимости добавьте другие значения по умолчанию
//     ...options
//   };

//   if (options.expires instanceof Date) {
//     options.expires = options.expires.toUTCString();
//   }

//   let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

//   for (let optionKey in options) {
//     updatedCookie += "; " + optionKey;
//     let optionValue = options[optionKey];
//     if (optionValue !== true) {
//       updatedCookie += "=" + optionValue;
//     }
//   }

//   document.cookie = updatedCookie;
// }

// // Пример использования:


// function deleteCookie(name) {
//   setCookie(name, "", {
//     'max-age': -1
//   })
// }