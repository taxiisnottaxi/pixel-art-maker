// Select color input


// Select size input



// When size is submitted by the user, call makeGrid()



// Your code goes here!




// 定义submit点击事件，目标是当点击submit的时候，可以自动生成对应大小的网格
// submit在点击的时候会自动进行页面刷新，这个是我们不想出现的，我们可以再前面
// 对应的input标签里面，设置onclick="return false;"
$('#submit').on('click', function() {

	// 通过jQuery获得输入的网格宽度和高度
	height = $('#inputHeight').val();
	width = $('#inputWidth').val();

	// tr代表行标签，在table之下，用于存放td，以形成一个一个的单元格
	// 通过循环生成对应的插入标签文本tr
	tr = ''
	for (var i = 1 ; i <= height; i = i + 1) {
		tr = tr + '<tr></tr>'
	}

	// td代表行标签，在tr之下，最后的表现是一个一个的单元格
	// 通过循环生成对应的插入标签文本td，注意这边添加td的时候，要加入onclick方法，函数是后面要定义的函数
	// changeColor
	td = ''
	for (var i = 1 ; i <= width; i = i + 1) {
		td = td + '<td onclick="changeColor(this)"></td>'
	}


	// 通过jQuery先将table下的tr移出，会将tr下面的所有子标签一并移出
	$('table').find('tr').remove();
	// 在table里面添加tr
	$('table').append(tr);
	// 在tr里面添加td
	$('tr').append(td);

});

// 方法1 在插入标签的时候就使用onclick给连接这个函数，这样再点击td的时候，就会自动调用
// 在前面添加标签的时候就将这个方法放入onclick事件里面
function changeColor(td) {
	// 此处的td参数只是一个形参对象，可以使用其他常规字符代替
	// 首先获得调色器的颜色
	color = $('#colorPicker').val();
	// 判断背景颜色是否为空，为空点击就设置颜色，不为点击就设置为空
	if (td.style.backgroundColor == "") {
		td.style.background = color;
	} else {
		td.style.background = "";
	}
}




// 方法2 行不通，在document直接使用函数可以，但是针对的是整个页面，e.target是作用的对象
// $(document).click(function(e) {
// 	color = $('#colorPicker').val();
// 	if ($(e.target).css('background-color') == 'rgb(255, 255, 255)') {
// 		$(e.target).css('background-color', color);

// 	}
// 	else if ($(e.target).css('background-color') != 'rgb(255, 255, 255)') {
// 		$(e.target).css('background-color','rgb(255, 255, 255)');
// 	}
// });


// 方法3 如果我们在td上使用呢？无反应，可能是多个td无法进行选择？
// $('td').click(function(e){
// 	color = $('#colorPicker').val();
// 	$(e.target).css('background-color', color);
// });
	




// makeGrid()

