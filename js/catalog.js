let ContainerCatalog=()=>{

	document.querySelector('.co').classList.add("acti");

	getProduct('all',null,document.querySelector('.items_knife'))

// ставит на все items action при котором открывается отдельная панель на каждый item
	for (let i=0;i<knife.length;i++) {
		knife[i].addEventListener('click',()=>{
				onlyKnife.classList.remove('disen')
				onlyKnife.classList.add('acti')
				body.classList.toggle('over_hiden')
				but1.classList.remove('acti')
				but1.classList.add('disen')

				valueIdKnife=knife[i].attributes['data-id'].value
				valueTypeKnife=knife[i].attributes['data-type'].value

				getOnlyItemDesc(
					 `${valueTypeKnife}`
					,`${valueIdKnife}`
					,document.querySelector('.only_desc') //место для описания товара
					,document.querySelector('.only_coment_only') //место для коментариё товара
				)
		})	
	}
	
// отключает панель отдельного items
	
}

