var year = ["2020"];
            var month = [];
            var size = "";
            var htmlCode = "";
            var x = 0;
            var sx = 0;
            var pos = 0;
            var select_DoSi = 0;
            var select_Si = 0;
            var total_Si = 0;
            var select_DoSi_list = [];
            var select_Si_list = [];
            var Do = ['경기','강원','경남','경북','전북','전남','제주','충남','충북'];
            var SpecialOrWide_si = ['서울','부산','대구','인천','광주','대전','울산','세종']
            var KoreaCity = {'강원': ['강릉시', '고성군', '동해시', '삼척시', '속초시', '양구군', '양양군', '영월군', '원주시', '인제군', '정선군', '철원군', '춘천시', '태백시', '평창군', '홍천군', '화천군', '횡성군'], '경기': ['가평군', '고양시', '과천시', '광명시', '광주시', '구리시', '군포시', '권선구', '기흥구', '김포시', '남양주시', '단원구', '덕양구', '동두천시', '동안구', '만안구', '부천시', '분당구', '상록구', '성남시', '수원시', '수정구', '수지구', '시흥시', '안산시', '안성시', '안양시', '양주시', '양평군', '여주시', '연천군', '영통구', '오산시', '용인시', '의왕시', '의정부시', '이천시', '일산동구', '일산서구', '장안구', '중원구', '처인구', '파주시', '팔달구', '평택시', '포천시', '하남시', '화성시'], '경남': ['거제시', '거창군', '고성군', '김해시', '남해군', '마산합포구', '마산회원구', '밀양시', '사천시', '산청군', '성산구', '양산시', '의령군', '의창구', '진주시', '진해구', '창녕군', '창원시', '통영시', '하동군', '함안군', '함양군', '합천군'], '경북': ['경산시', '경주시', '고령군', '구미시', '군위군', '김천시', '남구', '문경시', '봉화군', '북구', '상주시', '성주군', '안동시', '영덕군', '영양군', '영주시', '영천시', '예천군', '울릉군', '울진군', '의성군', '청도군', '청송군', '칠곡군', '포항시'], '광주': ['광산구', '남구', '동구', '북구', '서구'], '대구': ['남구', '달서구', '달성군', '동구', '북구', '서구', '수성구', '중구'], '대전': ['대덕구', '동구', '서구', '유성구', '중구'], '부산': ['강서구', '금정구', '기장군', '남구', '동구', '동래구', '부산진구', '북구', '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구'], '서울': ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'], '세종': ['세종시'], '울산': ['남구', '동구', '북구', '울주군', '중구'], '인천': ['강화군', '계양구', '남동구', '동구', '미추홀구', '부평구', '서구', '연수구', '옹진군', '중구'], '전남': ['강진군', '고흥군', '곡성군', '광양시', '구례군', '나주시', '담양군', '목포시', '무안군', '보성군', '순천시', '신안군', '여수시', '영광군', '영암군', '완도군', '장성군', '장흥군', '진도군', '함평군', '해남군', '화순군'], '전북': ['고창군', '군산시', '김제시', '남원시', '덕진구', '무주군', '부안군', '순창군', '완산구', '완주군', '익산시', '임실군', '장수군', '전주시', '정읍시', '진안군'], '제주': ['서귀포시', '제주시'], '충남': ['계룡시', '공주시', '금산군', '논산시', '당진시', '동남구', '보령시', '부여군', '서북구', '서산시', '서천군', '아산시', '예산군', '천안시', '청양군', '태안군', '홍성군'], '충북': ['괴산군', '단양군', '보은군', '상당구', '서원구', '영동군', '옥천군', '음성군', '제천시', '증평군', '진천군', '청원구', '청주시', '충주시', '흥덕구']}
            
            function set(){
                var _width = window.screen.width;
                var location = Do.concat(SpecialOrWide_si);
                location.sort();
                console.log(location)
                for(var i=0;i<location.length;i++){
                    document.getElementsByClassName('do-element-span')[i].innerHTML = location[i];
                }
                document.getElementsByClassName("information-slider")[0].style.height = (window.screen.height-260)+"px";
                document.getElementsByClassName("information-list")[0].style.height = (window.screen.height)+"px";
            }
            
            function calendar_search_dialog(){
                var ele = document.getElementsByClassName("calendar-search-dialog")[0];
                var _width = window.screen.width;
                ele.style.transition = "height 0.6s";
                ele.style.height = "70%";
            }
            
            function location_search_dialog(){
                document.getElementsByClassName("location-search-dialog")[0].style.transition = "height 0.6s";
                
                console.log(screen.height)
                
                if(screen.height < 616){
                    document.getElementsByClassName("location-search-dialog")[0].style.height = "70%";    
                }
                
                else if(screen.height < 716 && screen.height >= 616){
                    document.getElementsByClassName("location-search-dialog")[0].style.height = "65%";    
                }
                
                else if(screen.height < 800 && screen.height >= 716){
                 document.getElementsByClassName("location-search-dialog")[0].style.height = "55%";   
                }
                
                else if(screen.height < 846 && screen.height >= 800){
                 document.getElementsByClassName("location-search-dialog")[0].style.height = "50%";   
                }
                
                else if(screen.height < 920 && screen.height >= 846){
                 document.getElementsByClassName("location-search-dialog")[0].style.height = "48%";   
                }
                
                else if(screen.height < 980 && screen.height >= 920){
                 document.getElementsByClassName("location-search-dialog")[0].style.height = "44%";   
                }
                
                else{
                 document.getElementsByClassName("location-search-dialog")[0].style.height = "40%";
                }
            }
            
            function close_location_search_dialog(){
                document.getElementsByClassName("location-search-dialog")[0].style.transition = "height 0.6s";
                document.getElementsByClassName("location-search-dialog")[0].style.height = "0%";
            }
            
            function close_calendar_search_dialog(){
                var ele = document.getElementsByClassName("calendar-search-dialog")[0];
                ele.style.transition = "height 0.6s";
                ele.style.height = "0%";
            }
            
            function alert(e){
                var input = document.getElementById("mySearch");
                var to = document.getElementsByClassName("information-list")[0];
                if(e.keyCode === 13){
                    console.log(input.value);
                    to.innerHTML = input.value
                }
            }
            
            function sendFromSi(ele){
                if(select_Si_list.indexOf(ele.textContent) == -1){
                    select_Si_list.push(ele.textContent);
                    select_Si += 1;
                    ele.style.backgroundColor = "#1C2541";
                    ele.style.color = "white";
                }
                else if(select_Si_list.indexOf(ele.textContent) >= 0){
                    select_Si_list.splice(select_Si_list.indexOf(ele.textContent),1);
                    select_Si -= 1;
                    ele.style.backgroundColor = "#F2F2F2";
                    ele.style.color = "black";
                }
                document.getElementsByClassName("amount-si")[0].innerHTML = select_Si;
                document.getElementsByClassName("information-list")[0].innerHTML = select_Si_list
                document.getElementsByClassName("calendar-search-location")[0].innerHTML = select_Si_list
            }
            
            function sendFromDoSi(ele){
                console.log(ele.textContent);
                if(select_DoSi_list.indexOf(ele.textContent) == -1){
                    select_DoSi_list.push(ele.textContent)
                    select_DoSi += 1;
                    console.log(ele.style.backgroundColor);
                    ele.style.backgroundColor = "#1C2541";
                    ele.style.color = "white";
                    var len = KoreaCity[ele.textContent].length;
                    total_Si += len;
                    console.log("len: "+len);
                    for(var i=0;i<len;i++){
                        size += "40% ";
                        document.getElementsByClassName("select-si")[0].insertAdjacentHTML('beforeend','<div class="do-si-element si-element '+ele.textContent+'"><button onclick="sendFromSi(this)"><span class="do-si-element-span si-element-span">'+KoreaCity[ele.textContent][i]+'</span></button></div>');
                    }
                    console.log("size: "+size)
                    document.getElementsByClassName("select-si")[0].style.gridTemplateColumns = size;
                    document.getElementsByClassName("total-si")[0].innerHTML = total_Si;
                    
                    if(select_DoSi == 1){
                        document.getElementsByClassName("select-container")[1].style.display = "block";
                        document.getElementsByClassName("select-amount")[1].style.display = "block";
                        document.getElementsByClassName("select3")[0].style.display = "block";
                    }
                }
                else if(select_DoSi_list.indexOf(ele.textContent) >= 0){
                    select_DoSi -= 1; 
                    select_DoSi_list.splice(select_DoSi_list.indexOf(ele.textContent),1);
                    ele.style.backgroundColor = "#F2F2F2";
                    ele.style.color = "black";
                    
                    total_Si -= KoreaCity[ele.textContent].length;
                    size = '';
                    for(var i=0;i<total_Si;i++){
                        size += "40% ";
                    }
                    
                    while(1){
                        if(document.getElementsByClassName(ele.textContent)[0] != undefined){
                            console.log(document.getElementsByClassName(ele.textContent)[0].childNodes[0].style.color)
                            if(document.getElementsByClassName(ele.textContent)[0].childNodes[0].style.color == "white"){
                                select_Si -= 1;
                                select_Si_list.splice(select_Si_list.indexOf(document.getElementsByClassName(ele.textContent)[0].childNodes[0].textContent), 1)
                                document.getElementsByClassName("information-list")[0].innerHTML = select_Si_list
                                document.getElementsByClassName("calendar-search-location")[0].innerHTML = select_Si_list
                            }
                            document.getElementsByClassName(ele.textContent)[0].remove()   
                        }
                        else{
                            break;
                        }
                    }
                    
                    if(select_DoSi == 0){
                        document.getElementsByClassName("select-container")[1].style.display = "none";
                        document.getElementsByClassName("select-amount")[1].style.display = "none"; 
                        document.getElementsByClassName("select3")[0].style.display = "none";
                    }
                    
                    document.getElementsByClassName("select-si")[0].style.gridTemplateColumns = size;
                }
                document.getElementsByClassName("amount")[0].innerHTML = select_DoSi;
                document.getElementsByClassName("amount-si")[0].innerHTML = select_Si;
                document.getElementsByClassName("total-si")[0].innerHTML = total_Si;
            }
            
            function drag(event){
                x = event.touches[0].clientX;
            }
            
            function start(event){
                sx = event.touches[0].clientX;
            }
            
            function end(){
                var _width = window.innerWidth;
                
                if(sx - x >= 90 && pos != -2*_width){
                    pos -= _width;
                    console.log(pos);
                    for(var i=0;i<3;i++){
                        document.getElementsByClassName("slider")[i].style.transition = "transform 1s";
                        document.getElementsByClassName("slider")[i].style.transform = "translate("+ pos +"px,0)";
                        if(-(pos/_width) == i){
                            document.getElementsByClassName("dot")[i].style.backgroundColor = "white";
                        }
                        else{
                            document.getElementsByClassName("dot")[i].style.backgroundColor = "transparent";
                        }
                    }
                    console.log("slide left");
                }
                else if(sx - x <= -90 && pos != 0){
                    pos += _width;
                    console.log(pos);
                    for(var i=0;i<3;i++){
                        document.getElementsByClassName("slider")[i].style.transition = "transform 1s";
                        document.getElementsByClassName("slider")[i].style.transform = "translate("+ pos +"px,0)";
                        if(-(pos/_width) == i){
                            document.getElementsByClassName("dot")[i].style.backgroundColor = "white";
                        }
                        else{
                            document.getElementsByClassName("dot")[i].style.backgroundColor = "transparent";
                        }
                    }
                    console.log("slide right");
                }
            }

            function loadDayPicker(ele){
                console.log(ele.textContent);
                month.push(parseInt(ele.textContent.substring(0,1)));
                console.log("month: "+month)

                var xhr = new XMLHttpRequest();
                xhr.open('GET', 'calendar_day_picker.html',true);
                xhr.onload = function(){
                    if(this.status == 200){
                        document.getElementsByClassName("calendar-year-title-button")[0].innerHTML += (" "+ele.textContent);
                        document.getElementsByClassName("undo-button")[0].style.display = "block"
                        document.getElementsByClassName("calendar-month-picker-container")[0].remove()
                        document.getElementsByClassName("calendar-month-picker-title")[0].remove()
                        document.getElementsByClassName("calendar-main-container")[0].style.gridTemplateRows = "60px 50px 30px 1fr"
                        document.getElementsByClassName("calendar-year-title")[0].insertAdjacentHTML('afterend',this.responseText)
                        document.getElementsByClassName("calendar-year-title-button")[0].style.pointerEvents = "none"

                        var _width = screen.width/7
                        var day = new Date('2020-'+month[0].toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'-01');
                        var dayName = day.getDay()
                        console.log("week: "+dayName)
                        var x = document.getElementsByClassName("day-row");
                        var week = ['Sun', 'Mon', 'Thu', 'Wed', 'Thr', 'Fri', 'Sat']
                        document.getElementsByClassName("calendar-day-picker-container")[0].style.gridTemplateRows = parseInt(_width) + "px " +parseInt(_width) + "px " +parseInt(_width) + "px " +parseInt(_width) + "px " +parseInt(_width) + "px " +parseInt(_width) + "px"
                        
                        for(var i=0;i<6;i++){
                            x[i].style.gridTemplateColumns = parseInt(_width) + "px " +parseInt(_width) + "px " +parseInt(_width) + "px " +parseInt(_width) + "px " +parseInt(_width) + "px " +parseInt(_width) + "px " +parseInt(_width) + "px"
                            for(var j=0;j<7;j++){
                                x[i].insertAdjacentHTML("beforeend", '<div class="day-box"><button class="day-button '+ week[j] +'"> </button></div> ')
                            }
                        }

                        var j = 1;
                        var next = false;
                        if(month[0] < 12){
                            var end = new Date('2020-'+(month[0]+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'-01');
                            var endDay = end.getDay()
                        }

                        for(var i=0;i<document.getElementsByClassName("day-box").length;i++){
                            if(i == dayName && j==1){
                                document.getElementsByClassName("day-button")[i].innerHTML = String(j);
                                j += 1
                            }
                            else if(j > 1){
                                if(i%7 == endDay && j>=27 && !next){
                                    j = 1;
                                    var next = true;
                                }
                                else if(!next){
                                    document.getElementsByClassName("day-button")[i].innerHTML = String(j);
                                    j += 1
                                }
                                if(next){
                                    document.getElementsByClassName("day-button")[i].innerHTML = String(j);
                                    document.getElementsByClassName("day-button")[i].className += " next";
                                    j += 1
                                }

                            }
                            else{
                                document.getElementsByClassName('day-button')[i].style.display = "none"
                            }
                        }
                    }
                }
                xhr.send()
            }

            function loadYearPicker(ele){
                document.getElementsByClassName("undo-button")[0].style.display = "block"
                var xhr = new XMLHttpRequest();
                xhr.open('GET', 'calendar_year_picker.html',true);
                xhr.onload = function(){
                    if(this.status == 200){
                        document.getElementsByClassName("calendar-month-picker-container")[0].remove()
                        document.getElementsByClassName("calendar-month-picker-title")[0].remove()
                        document.getElementsByClassName("calendar-year-title")[0].insertAdjacentHTML('beforeend',this.responseText)
                    }
                }
                xhr.send();
                ele.style.pointerEvents = "none";
            }

            function undo(ele){
                var xhr = new XMLHttpRequest();
                document.getElementsByClassName("undo-button")[0].style.display = "none"
                if(month.length == 1){
                    document.getElementsByClassName("calendar-day-picker-title")[0].remove();
                    document.getElementsByClassName("calendar-day-picker-week")[0].remove();
                    document.getElementsByClassName("calendar-day-picker-container")[0].remove();
                    document.getElementsByClassName("calendar-main-container")[0].style.gridTemplateRows = "60px 50px 1fr"
                    xhr.open('GET', 'calendar_month_picker.html',true)
                    month.pop()
                    document.getElementsByClassName("calendar-year-title-button")[0].innerHTML = year[0]
                }
                else if(year.length == 1 && month.length == 0){
                    document.getElementsByClassName("calendar-year-picker-container")[0].remove()
                    document.getElementsByClassName("calendar-year-picker-title")[0].remove()
                    xhr.open('GET', 'calendar_month_picker.html',true)
                }
                xhr.onload = function(){
                    if(this.status == 200){
                        document.getElementsByClassName("calendar-year-title")[0].insertAdjacentHTML("afterend",this.responseText)
                    }
                }
                document.getElementsByClassName("calendar-year-title-button")[0].style.pointerEvents = "auto"
                xhr.send()
            }