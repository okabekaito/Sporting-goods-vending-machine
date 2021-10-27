class Item{
    constructor(name,price,url){
        this.name = name;
        this.price = price;
        this.url = url;
    }

}

    const items = {
       0: new Item("活動量計のイラスト",7000,"https://1.bp.blogspot.com/-9u47rZ8kS7U/YHuAgIecucI/AAAAAAABdpw/riNa6OfXu9Mu0rqmr9Tsj-22_4OhuV8aACNcBGAsYHQ/s400/sports_katsudouryoukei.png"),
       1: new Item("エルゴメーター",13000,"https://1.bp.blogspot.com/-6iDPbVHUMHo/Xhwqrw-eatI/AAAAAAABXDA/b0EMdWlSJhkr6zH6mVaVz2N4PRwhB65fACNcBGAsYHQ/s400/sports_ergometer.png"),
       2: new Item("ケトルベル",5000,"https://1.bp.blogspot.com/-k_NUCYhpil8/XQjuk4fwcTI/AAAAAAABTTk/pejQ-1G0n9gXa_sWDcedcIwZt8_kgBKwACLcBGAs/s400/undou_kettlebell_dumbbell.png"),
       3: new Item("運動靴",4000,"https://2.bp.blogspot.com/-rS6z3Bv6UOQ/Wj4Ir75HO0I/AAAAAAABJPA/BaKYyeDJjbogluglWffgNgw3zOy95zh3QCLcBGAs/s400/shoes_bowling.png"),
       4: new Item("金属バット",5000,"https://3.bp.blogspot.com/-hVA3Y12RSv0/WIHlrhMr_EI/AAAAAAABBQs/0Gc8C6iNq_4q4xBTOmz5q_LGETNteyP3QCLcB/s400/sports_baseball_bat.png"),
       5: new Item("ソフトボール",800,"https://4.bp.blogspot.com/-4r4SrjKvdhA/WIHlsNqzNdI/AAAAAAABBQw/Cm4az2TC2-AiTWFVdGS_DS2XLWJo2FiJgCLcB/s400/sports_softball__ball.png"),
       6: new Item("サンドバッグ",8000,"https://4.bp.blogspot.com/-_hfNu0keIIQ/V8jqWauh2-I/AAAAAAAA9dU/ahUPgj1nNrsEV2DrqgisQ0BiDQKSM9GGgCLcB/s400/boxing_sandbag.png"),
       7: new Item("カーリングのブラシ",2000,"https://4.bp.blogspot.com/-EApOZOIviPs/WzC-2T4peTI/AAAAAAABNFU/_fIc8yP3gFQ5b5jTa6iW9Tm1jZ5CR-5mACLcBGAs/s400/sports_curling_brush.png")
    };

//ボタンの作成
    let btnContainer = document.getElementById("btnContainer")
    let btnButton = "";
    for(let i = 0;i < Object.keys(items).length;i++){
        btnButton += 
        `<button id ="btn${i}"type="button" class="btn btn-outline-warning button">${i+1}</button>`
    }
    btnContainer.innerHTML = btnButton;

    //画像の作成
    let sliderData = document.getElementById("slider-data")

     //btnとスライダーの連携
    for(let i = 0;i < Object.keys(items).length;i++){
        let button = document.getElementById(`btn${i}`);
        button.addEventListener("click",function(){
        itemName.innerHTML = "商品名:" + items[i].name;
        itemPrice.innerHTML = "値段:$" + items[i].price;
        itemButton.innerHTML = "ボタン:" + parseInt(i + 1);
        slideJump(i)
    });
}
//name,price,button初期表示
    let itemsShow = document.getElementById("itemsShow");
    let itemsShowString = "";
    itemsShowString += 
        `<p id="itemName">商品名:</p>
        <p id="itemPrice">値段:</p>
        <p id="itemButton">ボタン:</p>`
    itemsShow.innerHTML = itemsShowString;


    const target = document.getElementById("target");
    const sliderItems = document.querySelectorAll("#target .slider-data .slider-item");
    let mainImg = document.createElement("img");
    let extraImg = document.createElement("img");
    let main = document.getElementById("main");
    let extra = document.getElementById("extra");

    main.classList.add("main");
    sliderData.append(main);

    extra.classList.add("extra");
    sliderData.append(extra);

//setAttribute(属性名, 属性値)を使ってindexの初期値を設定
    sliderData.setAttribute("data-index", "0");

function slideJump(steps) {
    let currentElement = parseInt(sliderData.getAttribute("data-index"));

    mainImg.src = items[steps].url;
    extraImg.src = items[steps].url;

    main.innerHTML = "";
    main.append(mainImg);
    extra.append(extraImg);
    extra.innerHTML = "";

    main.classList.add("expand-animation");
    extra.classList.add("deplete-animation");
        sliderData.innerHTML = "";
    if (currentElement <= steps){
        sliderData.append(extra);
        sliderData.append(main);
    } else {
        sliderData.append(main);
        sliderData.append(extra);
    }

    sliderData.setAttribute("data-index", steps);

    
}
