(function(){
    function bubbleSort(data) {
        var arr = data.slice()
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if(arr[j] > arr[j + 1]) {
                    var tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
        return arr;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function sortHandler(){
        var arr = [];
        var i;
        var arrText = document.createElement('p');
        var sortText = document.createElement('p');
        for(i = 0; i < 10; i++){
            arr[i] = getRandomInt(1, 100);
        }
        arrText.innerHTML = 'Array: ' + arr.join(' ');
        document.getElementById('sort').appendChild(arrText);
        sortText.innerHTML = 'Sorted array: ' + bubbleSort(arr).join(' ');
        document.getElementById('sort').appendChild(sortText);
    }

    function recursiveList (data) {
        //@todo отобразить все элементы массива массивов в виде вложенных списков соблюдая вложенность
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        var list = document.createElement('ul');
        for(var i=0; i<data.length; i++){
            if(data[i].length){
                list.appendChild(recursiveList(data[i]));
            }else{
                var li=document.createElement('li');
                list.appendChild(li);
                li.innerHTML=data[i];
            }
        }
        return list;
    }

    function recursiveHeadings (data, weight) {
        var fragment = document.createDocumentFragment();
		//@todo отобразить все элементы массива массивов в заголовков разного порядка в зависимости от уровня вложенности
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        for(var i=0; i<data.length; i++){
            if(!data[i].length){
                var heading = document.createElement('h'+weight);
                heading.innerHTML=data[i];
                fragment.appendChild(heading);
            }else{
                fragment.appendChild(recursiveHeadings(data[i], weight+1));
            }
        }
        return fragment;
    }

    function simpleValidation(form) {
        //@todo при сабмите формы проверять поля на пустотое значение. 
		//При ошибке подсвечивать красным соответствующее поле.
		//Если оба поля заполнены, вывести сообщение об удачной отправке формы
        form.getElementsByTagName("button")[0].addEventListener("click", function(){        
            if (document.getElementById("first-name").value!="" && document.getElementById("last-name").value!=""){
                alert("Сообщение об удачной отправке формы");
            }else{
                color("first-name");
                color("last-name");
            }
            
            function color(id){
                if(document.getElementById(id).value==""){
                    document.getElementById(id).style.backgroundColor="rgba(255, 0, 0, 0.72)";
                }else{
                    document.getElementById(id).style.backgroundColor="#fff";
                }
            }            
        });
    }
	
	//вызывать функции здесь!
    sortHandler();
    document.getElementById('list').appendChild(recursiveList ([1,2,[3,4,[6,7,8],9],10,11]));
    document.getElementById('headings').appendChild(recursiveHeadings ([1,2,[3,4,[6,7,8],9],10,11],1)                                                                                                                             , 1);
    simpleValidation(form);
})();