let getMenu=()=>{

	let listMenu=[
		{
			item:'Product'
			,list:[{type:'all'},{type:'Panter'},{type:'Gryzly'},{type:'Higer'}]
		},{
			item:'Accessories'
			,list:[{type:'Tochilo'},{type:'Kobura'},{type:'Oil'}]
		},{
			item:'Cart'
			,list:[]
		}
	];

	//=========================================================>
	// загрузка элементов меню
	document.querySelector('.menu').innerHTML=''

	listMenu.map(i=>{
		let li='';

		i.list.length===0?li='':i.list.map(e=>{
				li+=`<li data-type='${e.type}'>${e.type}</li>`
		})

		document.querySelector('.menu').innerHTML+=`
				<div>
					<div class='itemMenu'>${i.item}</div>
					<ul class='listItemMenu' data-type='${i.item}'>
					${li}
					</ul>
				</div>
		`
	})
	//=========================================================>



	//=========================================================>
	// отключение всех меню
	document.querySelectorAll('.listItemMenu').forEach(i=>i.classList.add('disen'))

	document.querySelectorAll('.itemMenu').forEach((item,index,arr)=>{

		item!==arr[arr.length-1] && item.addEventListener(`click`,()=>{
			document.querySelector(`[data-type=${item.textContent || item.innerText}]`)
							.classList.toggle('disen')
							console.log('1')
			//===================================================>
			// отключение всех остальных панелек меню
			document.querySelectorAll('.listItemMenu').forEach(e=>{
				e.attributes['data-type'].value !== (item.textContent || item.innerText) && e.classList.add('disen')
			})
		})
		//==================================================================>	
		// место для обработки клика на корзину
		item===arr[arr.length-1] && item.addEventListener(`click`,async ()=>{
			document.querySelector('.placeCard_container').classList.toggle('disen')
			document.querySelector('body').classList.toggle('over_hiden');				
			document.querySelector('.ho').classList.toggle('disen');
			document.querySelector('.menu').classList.toggle('disen')

			await CardProductItems(document.querySelector('.item_product_at_card'))
			await ActionCard()
			await FilterAllBalance()
		})

})
// всё менб отрисовано в этом месте дальше работа будет проходить с помощью экшенов на кнопки меню

	document.querySelectorAll('.listItemMenu>li').forEach(i=>{
		i.addEventListener('click', async (event)=>{
			await getProduct(`${event.target.attributes['data-type'].value}`,null,document.querySelector('.items_knife'))
			await eventADDKnife( document.querySelectorAll('.desc_knife') )
		})
	})

	document.querySelector('.but_card').addEventListener('click',()=>{
		document.querySelector('.placeCard_container').classList.toggle('disen')
		document.querySelector('body').classList.toggle('over_hiden');				
		document.querySelector('.ho').classList.toggle('disen');
		document.querySelector('.menu').classList.toggle('disen')
	})

}
	