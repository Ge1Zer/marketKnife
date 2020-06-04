let Only=()=>{
	onlyKnife.classList.remove('disen')
	onlyKnife.classList.add('acti')
	body.classList.toggle('over_hiden')
	but1.classList.remove('acti')
	but1.classList.add('disen')

	valueIdKnife=knife[i].attributes['data-id'].value
	valueTypeKnife=knife[i].attributes['data-type'].value


	getOnlyItemDesc(`${valueTypeKnife}`,`${valueIdKnife}`)
		
}
//происходит установка всего нужного, и получение всех данных о продукте
//функция которая находит все необходимые данные о продукте 

let getOnlyItemDesc= async (type,id)=>{
		let knifeItem,hour,min,day,month,year,commHome,item,SelectsItem;

		onlyKnifeDesc=document.querySelector('.only_desc');
		commHome=document.querySelector('.only_coment_only');
		onlyKnifeDesc.innerHTML=''
		commHome.innerHTML=''

	await GetFiles('products',type,id).then(res=>{
		res=res[0]		
			onlyKnifeDesc.innerHTML=`
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
							${res.stock>0?`<div class="but_add acti_but" data-type="${res.type}" data-id="${res.id}">ADD in cart</div>`:`<div class="but_add">Prodict istn number 0</div>`}
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

	await GetFiles('comments',type,id).then(res=>{
		res.map(i=>{
			hour=i.date.hour<10?'0'+i.date.hour:i.date.hour
			min=i.date.min<10?'0'+i.date.min:i.date.min
			day=i.date.day<10?'0'+i.date.day:i.date.day
			month=i.date.month<10?'0'+i.date.month:i.date.month
			year=i.date.year<10?'0'+i.date.year:i.date.year
			commHome.innerHTML+=`
						<div class="item_coment_home">
								<img src="${i.img}" alt="poc"/>
								<div>
									<div><span>${i.user}</span><time>${hour+':'+min+' '+day+'.'+month+'.'+year}</time></div>
									<p class="tex">${i.text}</p>										
								</div>
							</div>
							`
	  })

})
	await actionClick()
}